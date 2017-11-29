import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalHandlerService } from '../../../services/modal-handler.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ulms-popup-modal',
    templateUrl: './popup-modal.component.html',
    styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {

    @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;

    modalRef: BsModalRef;
    onHide: any;
    closeModalEvent: any;

    constructor(private modalService: BsModalService, private modalHandlerService: ModalHandlerService) {
        this.onHide = this.modalService.onHide;
    }

    ngOnInit() {
        this.modalHandlerService.initPopUpInstance(this);
    }

    openModal(closeModalEvent?: any, popUpData?: any) {
        this.modalRef = this.modalService.show(this.recommendedModal);
        this.closeModalEvent = closeModalEvent;
        // this.onHide.subscribe(res => {});
    }

    closeModal() {
        this.modalRef.hide();
    }

    accpectModal() {
        this.closeModalEvent();
    }
}

