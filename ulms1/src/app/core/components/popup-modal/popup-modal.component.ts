import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'ulms-popup-modal',
    templateUrl: './popup-modal.component.html',
    styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent {
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    openModal(template: TemplateRef<any>) {
        // console.log('OPEN', template);
        // this.modalRef = this.modalService.show(template);
    }
    closeModal() {
        console.log();
        this.modalRef.hide();
    }
}
