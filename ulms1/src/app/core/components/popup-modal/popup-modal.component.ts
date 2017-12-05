import {Component, TemplateRef, OnInit, ViewChild} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/modal-options.class';
import {ModalHandlerService} from '../../../services/modal-handler.service';

@Component({
    selector: 'ulms-popup-modal',
    templateUrl: './popup-modal.component.html',
    styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {

    @ViewChild('invitationReject') invitationRejectModal: TemplateRef<any>;
    @ViewChild('courseEnrollment') courseEnrollmentModal: TemplateRef<any>;
    @ViewChild('contractDownload') contractDownloadModal: TemplateRef<any>;
    @ViewChild('qualificationNotice') qualificationNoticeModal: TemplateRef<any>;
    @ViewChild('certificateCondition') certificateConditionModal: TemplateRef<any>;
    @ViewChild('documentumNotification') documentumNotificationModal: TemplateRef<any>;

    modalRef: BsModalRef;
    onHide: any;
    popUpData: any;
    closeModalEvent: any;
    modalState: any;
    checkBoxValue = false;

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
        } else if (this.modalState === 'contractDownload') {
            this.modalRef = this.modalService.show(this.contractDownloadModal);
            this.closeModalEvent = closeModalEvent;
        } else if (this.modalState === 'qualificationNotice') {
            this.modalRef = this.modalService.show(this.qualificationNoticeModal);
            this.closeModalEvent = closeModalEvent;
            this.popUpData = popUpData;
        } else if (this.modalState === 'certificateCondition') {
            this.modalRef = this.modalService.show(this.certificateConditionModal);
            this.closeModalEvent = closeModalEvent;
        } else if (this.modalState === 'documentumNotification') {
            this.modalRef = this.modalService.show(this.documentumNotificationModal);
            this.closeModalEvent = closeModalEvent;
            this.popUpData = popUpData;
        }

        // this.onHide.subscribe(res => {});
    }


    accpectModal() {
        if (this.modalState === 'invitationReject') {
            this.closeModalEvent();
        } else if (this.modalState === 'courseEnrollment') {
            this.closeModal();
            this.closeModalEvent();
        } else if (this.modalState === 'contractDownload') {
            this.closeModal();
            this.closeModalEvent();
        } else if (this.modalState === 'qualificationNotice') {
            this.closeModalEvent(this.checkBoxValue);
            this.closeModal();
        } else if (this.modalState === 'certificateCondition') {
            this.closeModalEvent(this.checkBoxValue);
            // this.closeModal();
        } else if (this.modalState === 'documentumNotification') {
            this.closeModalEvent();
            this.closeModal();
        }
    }

    onCheckBoxChange(checkBoxValue) {
        this.checkBoxValue = checkBoxValue;
    }
}

