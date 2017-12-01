import { Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailViewModel } from '../../../models/views/course-detail-view.model';

@Component({
    selector: 'ulms-course-detail-main-content',
    templateUrl: './course-detail-main-content.component.html',
    styleUrls: ['../course-detail.component.scss']
})

export class CourseDetailMainContentComponent implements OnChanges {

    @Input() courseDetail: any;
    currentItemData: any;

    constructor(private commonService: CommonService) {}

    ngOnChanges() {
        this.currentItemData = this.transFormViewObject(this.courseDetail);
    }

    transFormViewObject(itemData: any) {

        const courseDetailView: Array<CourseDetailViewModel> = [];
        const course = itemData;
        const courseActivities = course.courseActivities;
        const courseRegistration = course.courseRegistration;

        courseActivities.forEach((item) => {
            if (!item.target.parent) {
                const courseActivitie = item;
                courseDetailView.push({
                    title: this.commonService.getTitle(course), // Title
                    label: this.commonService.getLabel(course), // Label
                    providerName: this.commonService.getProviderName(course), // Label Provider name
                    imageUrl: this.commonService.getImageUrl(course), // Image
                    status: this.commonService.getActivityStatus(courseActivitie), // Status button
                    links: this.commonService.getLinks(courseActivitie), // Launch button + links
                    courseProgressStatus: this.commonService.getCourseProgressStatus(courseActivitie), // Előrehaladás
                    courseMeasureStatus: this.commonService.getCourseMeasureStatus(courseActivitie), // Eredmény
                    deadLine: this.commonService.getDeadLine(courseActivitie), // Határidő
                    totalTime: this.commonService.getTotalTime(courseActivitie), // Eltöltött idő
                    minimumTime: this.commonService.getMinimumTime(courseActivitie), // Min. tanulási idő
                    registrationDate: this.commonService.getRegistrationDate(courseRegistration), // Beiratkozás dátuma
                    licenseNetTimeLimit: this.commonService.getLicenseNetTimeLimit(courseRegistration), // Hozzáférési idő
                    licenseGrossTimeLimit: this.commonService.getLicenseGrossTimeLimit(courseRegistration), // Hozzáférési vége
                });
            }
        });
        return courseDetailView;
    }
}
