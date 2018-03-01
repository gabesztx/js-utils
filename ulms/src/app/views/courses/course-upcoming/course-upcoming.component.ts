import { Component, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common/common.service';
import { RestApiResponse } from '../../../services/base/http.class';
import { CourseUpcomingViewModel } from '../../../models/views/course-upcoming-view.model';
import { CourseDetailService } from '../../../services/course-detail.service';
import { slideInOutKeyFrameAnimation } from '../../../animations/course-animation';

@Component({
    selector: 'ulms-course-upcoming',
    templateUrl: './course-upcoming.component.html',
    styleUrls: ['../courses.component.scss'],
    animations: [slideInOutKeyFrameAnimation]
})

export class CourseUpcomingComponent implements OnChanges {
    @Input() itemData: any;
    @Input() courseTitleContent: any;
    currentItemData: any;
    currentItemListaData: any;
    currentItemInterval: any;
    noItems: boolean;

    constructor(private commonService: CommonService, private router: Router, private courseDetailService: CourseDetailService) {
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

    transFormViewObject(itemData: RestApiResponse<any>) {
        const courseUpcomingView: Array<any> = [];
        itemData.items.forEach((item) => {
            const course = item;
            const courseActivitie = item.courseActivities[0];
            const courseRegistration = course.courseRegistration;
            courseUpcomingView.push({
                id: course.id,
                title: this.commonService.getTitle(course), // Title
                label: this.commonService.getLabel(course), // Label
                status: this.commonService.getActivityStatus(courseActivitie), // Status button
                providerName: this.commonService.getProviderName(course), // Label Provider name
                imageUrl: this.commonService.getImageUrl(course), // Image
                links: this.commonService.getLinks(courseActivitie), // Launch button + links
                registrarOrganization: this.commonService.getRegistrarOrganization(courseRegistration), // Beirato szervezet
                resultStartDate: this.commonService.getResultStartDate(courseActivitie), // Kurzus kezdete
                resultEndDate: this.commonService.getResultEndDate(courseActivitie), // Kurzus vége
                netTimeLimit: this.commonService.getNetTimeLimit(courseActivitie.target), // Idő keret
                suggestedTime: this.commonService.getCourseSuggestedTime(courseActivitie.target), // Várható tanulási idő
                description: this.commonService.getCourseDescription(course), // Leírás
            });
        });
        return courseUpcomingView;
    }
}
