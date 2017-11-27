import { Component, OnChanges, OnDestroy, OnInit, Input, TemplateRef } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailViewModel } from '../../../models/views/course-detail-view.model';

@Component({
    selector: 'ulms-course-detail-main-info',
    templateUrl: './course-detail-main-info.component.html',
    styleUrls: ['../course-detail.component.scss']
})

export class CourseDetailMainInfoComponent implements OnChanges {

    @Input() itemData: any;
    currentItemData: any;
    isUseroptionalCourse: any;

    constructor(private commonService: CommonService) {
    }

    ngOnChanges() {
        this.currentItemData = this.transFormViewObject(this.itemData);
    }

    transFormViewObject(itemData: any) {

        //const courseDetailView: Array<CourseDetailViewModel> = [];
        let courseDetailView: Array<any> = [];
        const course = itemData;
        const courseState = course.courseState;
        const courseObjects = course.courseObjects;
        const courseActivities = course.courseActivities;
        const userInvitations = course.userInvitations;

        this.isUseroptionalCourse = courseState === 2 && !userInvitations.length;

        const isCourseObjects = (courseState >= 0 && courseState <= 2 || !courseState);
        const isCourseActivities = (courseState === 3 && courseActivities.length);

        // console.log('Course:', course);
        //console.log('isCourseObjects', isCourseObjects)
        //console.log('iscourseActivities', iscourseActivities)

        courseObjects.forEach((courseObject) => {
            if (!courseObject.parent) {
                courseDetailView.push({
                    id: course.id,
                    title: this.commonService.getTitle(course), // Title
                    label: this.commonService.getLabel(course), // Label
                    imageUrl: this.commonService.getImageUrl(course), // Image
                    providerName: this.commonService.getProviderName(course), // Label Provider name
                    courseState: courseState, // Course State number
                    //registrarOrganization: this.commonService.getRegistrarOrganization(courseRegistration), // Beirato szervezet
                    //status: this.commonService.getActivityStatus(courseActivitie), // Status button
                    //links: this.commonService.getLinks(courseActivitie), // Launch button + links
                    //description: this.commonService.getCourseDescription(course), // Leírás
                });
                if (isCourseObjects) {
                    Object.assign(courseDetailView[0], {
                        resultStartDate: this.commonService.getCourseResultStartDate(courseObject), // Kurzus kezdete
                        resultEndDate: this.commonService.getCourseResultEndDate(courseObject), // Kurzus vége
                        netTimeLimit: this.commonService.getNetTimeLimit(courseObject), // Idő keret
                        suggestedTime: this.commonService.getCourseSuggestedTime(courseObject), // Várható tanulási idő
                    });

                }
                if (isCourseActivities) {
                }
            }
        });
        // console.log('courseDetailView', courseDetailView);
        return courseDetailView;
    }
}
