import { Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiResponse } from '../../../services/base/http.class';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailService } from '../../../services/course-detail.service';

import { CourseDetail } from '../../../models/courseDetail.model';
import { slideInOutKeyFrameAnimation } from '../../../animations/course-animation';

@Component({
    selector: 'ulms-course-closed',
    templateUrl: './course-closed.component.html',
    styleUrls: ['../courses.component.scss'],
    animations: [slideInOutKeyFrameAnimation]
})

export class CourseClosedComponent implements OnChanges {
    @Input() itemData: any;
    @Input() courseTitleContent: any;
    currentItemData: any;
    currentItemListaData: any;
    currentItemInterval: any;
    noItems = false;

    constructor(private commonService: CommonService, private router: Router, private courseDetailService: CourseDetailService) {}

    ngOnChanges() {
        clearInterval(this.currentItemInterval);
        if (this.itemData.items.length) {
            this.currentItemData = this.transFormViewObject(this.itemData);
            this.updatePageItem(this.currentItemData);
        } else {
            this.noItems = true;
        }
    }

    navigationUrl(id: string) {
        this.courseDetailService.courseDetailRouting(id);
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

    transFormViewObject(itemData: RestApiResponse<CourseDetail[]>) {
        const courseCloseView: Array<any> = [];
        itemData.items.forEach((item) => {
            const course = item;
            const courseActivitie = course.courseActivities[0];
            const grossTimeLimit = courseActivitie.target.requirement.grossTimeLimit;
            const resultEndDate = courseActivitie.target.requirement.resultEndDate;
            courseCloseView.push({
                id: course.id,
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
                grossTimeLimit: grossTimeLimit ? grossTimeLimit : '', // grossTimeLimit
                resultEndDate: resultEndDate ? this.commonService.formatDay(resultEndDate) : '', // resultEndDate
            });
        });
        return courseCloseView;
    }
}
