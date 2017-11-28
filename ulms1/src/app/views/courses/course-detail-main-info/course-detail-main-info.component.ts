import { Component, OnChanges, Input } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailViewModel } from '../../../models/views/course-detail-view.model';

@Component({
    selector: 'ulms-course-detail-main-info',
    templateUrl: './course-detail-main-info.component.html',
    // styleUrls: ['../course-detail.component.scss']
    styleUrls: ['../courses.component.scss'],
})

export class CourseDetailMainInfoComponent implements OnChanges {

    @Input() courseDetail: any;
    currentItemData: any;
    isUseroptionalCourse: any;

    constructor(private commonService: CommonService) {}

    ngOnChanges() {
        this.currentItemData = this.transFormViewObject(this.courseDetail);
    }
    clickUrl(id: string) {
        console.log('CourseDetailMainInfoComponent CLICK', id);
    }
    transFormViewObject(courseDetail: any) {
        //const courseDetailView: Array<CourseDetailViewModel> = [];

        const courseDetailView: Array<any> = [];
        const course = courseDetail;
        const courseState = course.courseState;
        const courseObjects = course.courseObjects;
        const courseActivities = course.courseActivities;
        const userInvitations = course.userInvitations;

        const isCourseObjects = (courseState >= 0 && courseState <= 2 || !courseState);
        const isCourseActivities = (courseState === 3 && courseActivities.length);

        this.isUseroptionalCourse = courseState === 2 && !userInvitations.length;
        // console.log('course', course);

        courseObjects.forEach((courseObject) => {
            if (!courseObject.parent) {
                courseDetailView.push({
                    id: course.id,
                    title: this.commonService.getTitle(course), // Title
                    label: this.commonService.getLabel(course), // Label
                    imageUrl: this.commonService.getImageUrl(course), // Image
                    providerName: this.commonService.getProviderName(course), // Label Provider name
                    courseState: courseState, // Course State number
                    expirationTime: this.commonService.getExpirationTime(course), // Beiratkozás határideje
                    links: this.commonService.getLinks(course), // Launch button + links
                    //status: this.commonService.getActivityStatus(courseActivitie), // Status button
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
                if (isCourseActivities) {}
            }
        });
        console.log('courseDetailView', courseDetailView);
        return courseDetailView;
    }
}
