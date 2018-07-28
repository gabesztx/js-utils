// External imports
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// Nexius Core imports
import {L10nService} from '@nexius/core';
// Internal imports
import { AuthService } from '../../../services/auth.service';
import { UserLevel } from '../../../../models/user.model';

@Component({
    selector: 'nx-grid-cell-button',
    templateUrl: './grid-cell-button.component.html',
    styleUrls: ['./grid-cell-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellButtonComponent implements OnInit {

    params: any;
    available: boolean;
    label: string;
    locked: boolean;
    forceLocked: boolean;
    lockable: boolean;
    iconClass: string;
    tooltipPosition: string;

    private rowData: any;
    private gridApi: any;
    private action: any;
    private actionContext: any;
    private actionParams: Array<any>;
    private requiredUserLevel: UserLevel;
    private acceptHigherLevel: boolean;

    constructor(private l10n: L10nService, private auth: AuthService) { }

    ngOnInit() {
    }

    agInit(params: any) {
        this.params = params;
        this.rowData = Object.assign({}, params.data);
        this.gridApi = params.api;
        this.label = this.l10n.translate(this.params.colDef.label);
        this.iconClass = this.params.colDef.iconClass;
        this.tooltipPosition = this.params.colDef.tooltipPosition || 'left';
        this.action = this.params.colDef.action;
        this.actionContext = this.params.colDef.actionContext;
        this.actionParams = this.params.colDef.actionParams;
        this.requiredUserLevel = this.params.colDef.requiredUserLevel;
        this.acceptHigherLevel = (this.params.colDef.acceptHigherLevel !== false);
        this.locked = !!this.rowData.locked;
        this.lockable = !!this.params.colDef.lockable;
        this.available = (this.requiredUserLevel === 0 || !this.requiredUserLevel ||
            this.auth.isInRole(this.requiredUserLevel, this.acceptHigherLevel));

        if (this.params.colDef.lock) {
            this.forceLocked = this.params.colDef.lock(this.rowData);
        }
    }

    onClick() {
        const actionParams = this.actionParams || this.params.data;

        if (this.actionContext) {
            this.action.apply(this.actionContext, [actionParams]);
        } else {
            this.action(actionParams);
        }
    }

}
