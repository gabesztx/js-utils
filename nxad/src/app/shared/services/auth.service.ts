// External imports
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Nexius Core imports
import { UserBaseSchema } from '@nexius/core';
// Internal imports
import * as fromRoot from '../../reducers/index.reducer';
import { UserLevel, UserModel } from '../../models/user.model';

let __instance__: AuthService = null;

@Injectable()
export class AuthService {

    private user$: Observable<UserModel>;
    private user: UserModel;

    constructor(private store: Store<fromRoot.AppState>) {
        if (__instance__ !== this) {
            __instance__ = this;
            this.user$ = <Observable<UserModel>>this.store.select(fromRoot.CoreSelectors.getCurrentUser);
            this.user$.subscribe(user => {
                this.user = user;
                console.log('AuthService: user is set. [user]:', this.user);
            });
        }

        return __instance__;
    }

    isInRole(userLevel: UserLevel, acceptHigherLevel: boolean = true): boolean {
        if (this.user && UserModel.is(this.user, UserBaseSchema)) {
            // TODO: a szervertől érkező adat nevére átnevezendő a userLevel user.modelben kell átnevezni - rename symbol
            return (acceptHigherLevel ? this.user.userLevel >= userLevel :
                this.user.userLevel === userLevel);
        } else {
            console.error('AuthService.isInRole: "user" is not a UserModel instance! [user]:', this.user);
            return false;
        }
    }

}
