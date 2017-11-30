import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';

import { ModalHandlerService } from '../../../services/modal-handler.service';

@Component({
    selector: 'ulms-course-user-invitations',
    templateUrl: './course-user-invitations.component.html',
    styleUrls: ['../courses.component.scss'],
})
export class CourseUserInvitationsComponent implements OnInit, OnChanges {
    @Input() courseDetail: any;
    userInvitations: any;
    currentItemListaData: any;
    popUpModal: any;

    constructor(private commonService: CommonService, private modalHandlerService: ModalHandlerService) {
        this.popUpModal = this.modalHandlerService.getPopUpHandlerScope();
    }

    ngOnInit() {}

    ngOnChanges() {
        this.currentItemListaData = this.transFormViewObject(this.courseDetail);
    }

    dropDownClickFn(linkData: any) {
        const rejectLink = linkData.href;
        this.popUpModal.openModal((res) => {
            window.location.href = rejectLink;
        });
    }

    transFormViewObject(courseDetail: any) {
        const userInvitationData: Array <any> = [];
        const userInvitations = courseDetail.userInvitations;
        const courses = { registration: courseDetail.registration };
        userInvitations.forEach((userInvitation) => {
            const invitation = userInvitation.invitation;
            const course = Object.assign(courses, { invitation: invitation });
            userInvitationData.push({
                id: userInvitation.id,
                organization: this.commonService.getOrganizationName(invitation), // Meghívó szervezet
                title: this.commonService.getTitle(invitation), // Title
                creationDate: this.commonService.formatDay(userInvitation.creationDate), // Meghívás Dátuma
                expirationTime: this.commonService.getExpirationTime(course), // Beiratkozás határideje
                status: this.commonService.getRecommendedStatus(invitation), // Status button
                links: this.commonService.getLinks(userInvitation), // Launch button + links
                description: this.commonService.getCourseDescription(invitation), // Leírás
            });
        });

        return userInvitationData;
    }
}
