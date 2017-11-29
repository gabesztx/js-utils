import { Injectable } from '@angular/core';

@Injectable()

export class ModalHandlerService {
    public popUpHandler: any;
    public initPopUpInstance(scope: any) {
        this.popUpHandler = scope;
    }
}
