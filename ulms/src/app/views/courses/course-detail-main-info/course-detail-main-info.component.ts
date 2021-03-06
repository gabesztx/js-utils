import { Component, OnChanges, Input } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailViewModel } from '../../../models/views/course-detail-view.model';
import {CourseDetailService} from '../../../services/course-detail.service';
import {ModalHandlerService} from '../../../services/modal-handler.service';

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
    popUpModal: any;

    constructor(
        private commonService: CommonService,
        private courseDetailService: CourseDetailService,
        private modalHandlerService: ModalHandlerService
        ) {
        this.popUpModal = this.modalHandlerService.getPopUpHandlerScope();
    }

    ngOnChanges() {
        this.currentItemData = this.transFormViewObject(this.courseDetail);
    }

    clickUrl(id: string) {
        console.log('CourseDetailMainInfoComponent CLICK', id);
        this.courseDetailService.postCourseEnrollment(id).subscribe(
            res => {
                //TODO ha BEZÁRRA kattint akkor frissítem a listát
                console.log('enrollment RES', res);
                if (res.error.status === 201) {
                    this.popUpModal.openModal('courseEnrollment', () => {
                        this.courseDetailService.courseDetailRouting(id);
                    });
                }
            },
            error => console.log('enrollment ERROR: ', error)
        );
    }

    transFormViewObject(courseDetail: any) {

        const courseDetailView: Array<any> = [];

        const course = courseDetail;
        const courseState = course.courseState;
        const courseObjects = course.courseObjects;
        const courseActivities = course.courseActivities;
        const courseRegistration = course.courseRegistration;
        const userInvitations = course.userInvitations;

        const isCourseObjects = (courseState >= 0 && courseState <= 2 || !courseState);
        const isCourseActivities = (courseState === 3 && courseActivities.length >= 0);

        const courseData = isCourseObjects ? courseObjects : courseActivities;
        this.isUseroptionalCourse = courseState === 2 && !userInvitations.length;

        // console.log('course', course);
        // console.log('courseData', courseData);

        courseData.forEach((courseObject) => {
            if (isCourseObjects && !courseObject.parent ||  isCourseActivities && !courseObject.target.parent) {
                courseDetailView.push({
                    id: course.id,
                    title: this.commonService.getTitle(course), // Title
                    label: this.commonService.getLabel(course), // Label
                    imageUrl: this.commonService.getImageUrl(course), // Image
                    providerName: this.commonService.getProviderName(course), // Label Provider name
                    courseState: courseState, // Course State number
                    expirationTime: this.commonService.getExpirationTime(course), // Beiratkozás határideje
                    links: this.commonService.getLinks(course), // Launch button + links

                    // status: this.commonService.getActivityStatus(courseActivitie), // Status button
                    // description: this.commonService.getCourseDescription(course), // Leírás
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
                    Object.assign(courseDetailView[0], {
                        status: this.commonService.getActivityStatus(courseObject), // Status button
                        registrarOrganization: this.commonService.getRegistrarOrganization(courseRegistration), // Beirato szervezet
                        resultStartDate: this.commonService.getResultStartDate(courseObject), // Kurzus kezdete
                        resultEndDate: this.commonService.getResultEndDate(courseObject), // Kurzus vége
                        netTimeLimit: this.commonService.getNetTimeLimit(courseObject.target), // Idő keret
                        suggestedTime: this.commonService.getCourseSuggestedTime(courseObject.target), // Várható tanulási idő
                    });

                }
            }
        });
        return courseDetailView;
    }
}
