import { Component, OnChanges, Input } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';
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
    currentItemListaData: any;
    currentItemInterval: any;

    constructor(private commonService: CommonService) {
    }

    ngOnChanges() {
        clearInterval(this.currentItemInterval);
        this.currentItemData = this.transFormViewObject(this.itemData);
        this.updatePageItem(this.currentItemData);
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
        }, 125);
    }

    transFormViewObject(itemData: RestApiResponse<any>) {
        // const courseRecommendedView: Array<any> = [];
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
                resultStartDate: this.commonService.getCourseResultStartDate(courseObject), //Kurzus kezdete
                resultEndDate: this.commonService.getResultEndDate(courseObject), //Kurzus vége
                netTimeLimit: this.commonService.getNetTimeLimit(courseObject), // Idő keret
                suggestedTime: this.commonService.getCourseSuggestedTime(courseObject), // Várható tanulási idő
                expirationTime: this.commonService.getExpirationTime(course), // Beiratkozás határideje
                description: this.commonService.getCourseDescription(course), // Leírás
            })
        });

        return courseRecommendedView;
    }


    /*transFormViewObject(data) {
        const dataArray: Array<any> = [];
        data.items.forEach((value) => {
            const course = value.course;
            const courseObject = value.courseObject;
            const invitation = value.invitation;
            const registration = course.registration;
            const resultStartDate = courseObject.requirement.resultStartDate;
            const resultEndDate = courseObject.requirement.resultEndDate;
            const exparitation = invitation ? invitation.expiration : undefined;
            const endDate = registration ? registration.endDate : undefined;

            let links;
            if (value.links) {
                value.links.forEach((value) => {
                    if (value.rel === 'Reject') {
                        links = value;
                    }
                });
            }
            dataArray.push({
                id: course.id,
                imageUrl: course.imageUrl.length ? course.imageUrl : 'assets/images/suitcase_big_icon.png',
                title: course.title,
                label: course.label,
                providerName: course.provider ? course.provider.name : '',
                organizationName: this.commonService.getOrganizationName(invitation),
                resultStartDate: this.commonService.getResultDate(resultStartDate),
                resultEndDate: this.commonService.getResultDate(resultEndDate),
                netTimeLimit: courseObject.requirement.netTimeLimit,
                suggestedTime: courseObject.requirement.suggestedTime,
                getExpiration: this.commonService.getExpiration(exparitation, endDate),
                description: course.description,
                btnLabel: 'lbl_severity_' + invitation.severity,
                btnIconClassName: this.commonService.getStatusButton('severity_' + invitation.severity),
                urlId: '-',
                links: links ? [links] : []
            });
        });
        return dataArray;
    }*/
}
