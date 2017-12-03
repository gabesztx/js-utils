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

    @ViewChild('invitationReject') invitationRejectModal: TemplateRef<any>;
    @ViewChild('courseEnrollment') courseEnrollmentModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;
    // @ViewChild('recommendedModal') recommendedModal: TemplateRef<any>;

    modalRef: BsModalRef;
    onHide: any;
    closeModalEvent: any;
    modalState: any;

    constructor(private modalService: BsModalService, private modalHandlerService: ModalHandlerService) {
        this.onHide = this.modalService.onHide;
    }

    ngOnInit() {
        this.modalHandlerService.initPopUpInstance(this);
    }


    closeModal() {
        this.modalRef.hide();
    }

    openModal(modalStateParam: string, closeModalEvent?: any, popUpData?: any) {
        this.modalState = modalStateParam;

        if (this.modalState === 'invitationReject') {
            this.modalRef = this.modalService.show(this.invitationRejectModal);
            this.closeModalEvent = closeModalEvent;
        } else if (this.modalState === 'courseEnrollment') {
            this.modalRef = this.modalService.show(this.courseEnrollmentModal);
            this.closeModalEvent = closeModalEvent;
        }

        // this.onHide.subscribe(res => {});
    }


    accpectModal() {
        if (this.modalState === 'invitationReject') {
            this.closeModalEvent();
        } else if (this.modalState === 'courseEnrollment') {
            this.closeModal();
            this.closeModalEvent();
        }
    }
}

