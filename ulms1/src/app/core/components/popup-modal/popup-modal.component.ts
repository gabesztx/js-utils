import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalHandlerService } from '../../../services/modal-handler.service';

@Component({
    selector: 'ulms-popup-modal',
    templateUrl: './popup-modal.component.html',
    styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {

    @ViewChild('popUpTemplate') popUpTemplate: TemplateRef<any>;
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService, private modalHandlerService: ModalHandlerService) {}

    ngOnInit() {
        this.modalHandlerService.initPopUpInstance(this);
    }

    openModal() {
        this.modalRef = this.modalService.show(this.popUpTemplate);
    }

    closeModal() {
        this.modalRef.hide();
    }
}

