import { Injectable } from '@angular/core';

@Injectable()

export class ModalHandlerService {

    popUpHandler: any;

    constructor() {}

    initPopUpInstance(scope: any) {
        this.popUpHandler = scope;
    }

    getPopUpHandlerScope() {
        return this.popUpHandler;
    }
}
