import { Component, OnChanges,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailService } from '../../../services/course-detail.service';
import { PreferencesService } from '../../../services/preferences.service';
import { PreferencesApiKey } from '../../../models/user.model';
import { ModalHandlerService } from '../../../services/modal-handler.service';
import { slideInOutKeyFrameAnimation } from '../../../animations/course-animation';
import { RestApiResponse } from '../../../services/base/http.class';
import { CourseRecommendedViewModel } from '../../../models/views/course-recommended-view.model';

@Component({
    selector: 'ulms-course-recommended',
    templateUrl: './course-recommended.component.html',
    styleUrls: ['../courses.component.scss'],
    animations: [slideInOutKeyFrameAnimation]
})

export class CourseRecommendedComponent implements OnChanges {
    @Input() itemData: any;
    @Input() courseTitleContent: any;
    currentItemData: any;
    popUpModal: any;
    currentItemListaData: any;
    currentItemInterval: any;
    noItems = false;

    constructor(private commonService: CommonService,
                private router: Router,
                private modalHandlerService: ModalHandlerService,
                 private preferencesService: PreferencesService,
                private courseDetailService: CourseDetailService) {

        this.popUpModal = this.modalHandlerService.getPopUpHandlerScope();
        this.preferencesService.postPreferencesData(PreferencesApiKey.api_InvitedCourses);
    }

    navigationUrl(id: string) {
        this.courseDetailService.courseDetailRouting(id);
    }

    dropDownClick(linkData: any) {
        const rejectLink = linkData.href;
        this.popUpModal.openModal('invitationReject', () => {
            window.location.href = rejectLink;
        });
    }

    ngOnChanges() {
        clearInterval(this.currentItemInterval);
        if (this.itemData.items.length) {
            this.currentItemData = this.transFormViewObject(this.itemData);
            this.updatePageItem(this.currentItemData);
        } else {
            this.noItems = true;
        }
    }

    updatePageItem(currentList: any) {
        let itemNum = 0;
        this.currentItemListaData = [];
        this.currentItemInterval = setInterval(() => {
            if (itemNum === currentList.length - 1) {
                clearInterval(this.currentItemInterval);
            }
            this.currentItemListaData.push(currentList[itemNum]);
            itemNum++;
        }, 100);
    }

    transFormViewObject(itemData: RestApiResponse<any>) {
        const courseRecommendedView: Array<CourseRecommendedViewModel> = [];
        itemData.items.forEach((item) => {
            const course = item.course;
            const courseObject = item.courseObject;
            const invitation = item.invitation;
            courseRecommendedView.push({
                id: course.id,
                title: this.commonService.getTitle(course), // Title
                label: this.commonService.getLabel(course), // Label
                providerName: this.commonService.getProviderName(course), // Label Provider name
                imageUrl: this.commonService.getImageUrl(course), // Image
                links: this.commonService.getLinks(item), // Launch button + links
                status: this.commonService.getRecommendedStatus(invitation), // Status button
                organization: this.commonService.getOrganizationName(invitation), // Meghívó szervezet
                resultStartDate: this.commonService.getCourseResultStartDate(courseObject), // Kurzus kezdete
                resultEndDate: this.commonService.getCourseResultEndDate(courseObject), // Kurzus vége
                netTimeLimit: this.commonService.getNetTimeLimit(courseObject), // Idő keret
                suggestedTime: this.commonService.getCourseSuggestedTime(courseObject), // Várható tanulási idő
                expirationTime: this.commonService.getExpirationTime(course), // Beiratkozás határideje
                description: this.commonService.getCourseDescription(course), // Leírás
            });
        });

        return courseRecommendedView;
    }

}
