import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Action } from '@ngrx/store';
import { empty, of, Observable } from 'rxjs';
import {
  filter,
  map,
  share,
  switchMap,
  takeUntil,
  concatMap,
  debounceTime,
  timeout,
  catchError,
  take,
} from 'rxjs/operators';

import { PERFORM_ACTION, IMPORT_STATE } from './actions';
import {
  SerializationOptions,
  STORE_DEVTOOLS_CONFIG,
  StoreDevtoolsConfig,
} from './config';
import { LiftedAction, LiftedState } from './reducer';
import {
  sanitizeAction,
  sanitizeActions,
  sanitizeState,
  sanitizeStates,
  unliftState,
  isActionFiltered,
  filterLiftedState,
  shouldFilterActions,
} from './utils';
import { UPDATE } from '@ngrx/store';
import { DevtoolsDispatcher } from './devtools-dispatcher';

export const ExtensionActionTypes = {
  START: 'START',
  DISPATCH: 'DISPATCH',
  STOP: 'STOP',
  ACTION: 'ACTION',
};

export const REDUX_DEVTOOLS_EXTENSION = new InjectionToken<
  ReduxDevtoolsExtension
>('Redux Devtools Extension');

export interface ReduxDevtoolsExtensionConnection {
  subscribe(listener: (change: any) => void): void;
  unsubscribe(): void;
  send(action: any, state: any): void;
  init(state?: any): void;
  error(anyErr: any): void;
}
export interface ReduxDevtoolsExtensionConfig {
  features?: object | boolean;
  name: string | undefined;
  maxAge?: number;
  serialize?: boolean | SerializationOptions;
}

export interface ReduxDevtoolsExtension {
  connect(
    options: ReduxDevtoolsExtensionConfig
  ): ReduxDevtoolsExtensionConnection;
  send(action: any, state: any, options: ReduxDevtoolsExtensionConfig): void;
}

@Injectable()
export class DevtoolsExtension {
  private devtoolsExtension: ReduxDevtoolsExtension;
  private extensionConnection: ReduxDevtoolsExtensionConnection;

  liftedActions$: Observable<any>;
  actions$: Observable<any>;
  start$: Observable<any>;

  constructor(
    @Inject(REDUX_DEVTOOLS_EXTENSION) devtoolsExtension: ReduxDevtoolsExtension,
    @Inject(STORE_DEVTOOLS_CONFIG) private config: StoreDevtoolsConfig,
    private dispatcher: DevtoolsDispatcher
  ) {
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }

  notify(action: LiftedAction, state: LiftedState) {
    if (!this.devtoolsExtension) {
      return;
    }
    // Check to see if the action requires a full update of the liftedState.
    // If it is a simple action generated by the user's app and the recording
    // is not locked/paused, only send the action and the current state (fast).
    //
    // A full liftedState update (slow: serializes the entire liftedState) is
    // only required when:
    //   a) redux-devtools-extension fires the @@Init action (ignored by
    //      @ngrx/store-devtools)
    //   b) an action is generated by an @ngrx module (e.g. @ngrx/effects/init
    //      or @ngrx/store/update-reducers)
    //   c) the state has been recomputed due to time-traveling
    //   d) any action that is not a PerformAction to err on the side of
    //      caution.
    if (action.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }

      const currentState = unliftState(state);
      if (
        shouldFilterActions(this.config) &&
        isActionFiltered(
          currentState,
          action,
          this.config.predicate,
          this.config.actionsWhitelist,
          this.config.actionsBlacklist
        )
      ) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer
        ? sanitizeState(
            this.config.stateSanitizer,
            currentState,
            state.currentStateIndex
          )
        : currentState;
      const sanitizedAction = this.config.actionSanitizer
        ? sanitizeAction(
            this.config.actionSanitizer,
            action,
            state.nextActionId
          )
        : action;

      this.sendToReduxDevtools(() =>
        this.extensionConnection.send(sanitizedAction, sanitizedState)
      );
    } else {
      // Requires full state update
      const sanitizedLiftedState = {
        ...state,
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer
          ? sanitizeActions(this.config.actionSanitizer, state.actionsById)
          : state.actionsById,
        computedStates: this.config.stateSanitizer
          ? sanitizeStates(this.config.stateSanitizer, state.computedStates)
          : state.computedStates,
      };

      this.sendToReduxDevtools(() =>
        this.devtoolsExtension.send(
          null,
          sanitizedLiftedState,
          this.getExtensionConfig(this.config)
        )
      );
    }
  }

  private createChangesObservable(): Observable<any> {
    if (!this.devtoolsExtension) {
      return empty();
    }

    return new Observable(subscriber => {
      const connection = this.devtoolsExtension.connect(
        this.getExtensionConfig(this.config)
      );
      this.extensionConnection = connection;
      connection.init();

      connection.subscribe((change: any) => subscriber.next(change));
      return connection.unsubscribe;
    });
  }

  private createActionStreams() {
    // Listens to all changes
    const changes$ = this.createChangesObservable().pipe(share());

    // Listen for the start action
    const start$ = changes$.pipe(
      filter((change: any) => change.type === ExtensionActionTypes.START)
    );

    // Listen for the stop action
    const stop$ = changes$.pipe(
      filter((change: any) => change.type === ExtensionActionTypes.STOP)
    );

    // Listen for lifted actions
    const liftedActions$ = changes$.pipe(
      filter(change => change.type === ExtensionActionTypes.DISPATCH),
      map(change => this.unwrapAction(change.payload)),
      concatMap((action: any) => {
        if (action.type === IMPORT_STATE) {
          // State imports may happen in two situations:
          // 1. Explicitly by user
          // 2. User activated the "persist state accross reloads" option
          //    and now the state is imported during reload.
          // Because of option 2, we need to give possible
          // lazy loaded reducers time to instantiate.
          // As soon as there is no UPDATE action within 1 second,
          // it is assumed that all reducers are loaded.
          return this.dispatcher.pipe(
            filter(action => action.type === UPDATE),
            timeout(1000),
            debounceTime(1000),
            map(() => action),
            catchError(() => of(action)),
            take(1)
          );
        } else {
          return of(action);
        }
      })
    );

    // Listen for unlifted actions
    const actions$ = changes$.pipe(
      filter(change => change.type === ExtensionActionTypes.ACTION),
      map(change => this.unwrapAction(change.payload))
    );

    const actionsUntilStop$ = actions$.pipe(takeUntil(stop$));
    const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
    this.start$ = start$.pipe(takeUntil(stop$));

    // Only take the action sources between the start/stop events
    this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
  }

  private unwrapAction(action: Action) {
    return typeof action === 'string' ? eval(`(${action})`) : action;
  }

  private getExtensionConfig(config: StoreDevtoolsConfig) {
    const extensionOptions: ReduxDevtoolsExtensionConfig = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false /* support === 0 */) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }

  private sendToReduxDevtools(send: Function) {
    try {
      send();
    } catch (err) {
      console.warn(
        '@ngrx/store-devtools: something went wrong inside the redux devtools',
        err
      );
    }
  }
}
