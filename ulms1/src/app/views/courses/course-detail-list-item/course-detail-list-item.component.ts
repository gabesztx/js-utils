import { Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiResponse } from '../../../services/base/http.class';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailViewModel } from '../../../models/views/course-detail-view.model';
import { slideOutInKeyFrameAnimation } from '../../../animations/course-animation';


@Component({
    selector: 'ulms-course-detail-list-item',
    templateUrl: './course-detail-list-item.component.html',
    styleUrls: ['../course-detail.component.scss'],
    animations: [slideOutInKeyFrameAnimation]
})

export class CourseDetailListItemComponent implements OnChanges, OnDestroy {

    @Input() itemData: any;
    currentItemData: any;
    currentItemListaData: any;
    currentItemInterval: any;
    public paramsObs: any;

    constructor(private route: ActivatedRoute, private commonService: CommonService) {
        this.paramsObs = this.route.params.subscribe(params => {
            this.itemData = this.route.snapshot.data.responseData.courseDetail;
            clearInterval(this.currentItemInterval);
            this.currentItemData = this.transFormViewObject(this.itemData);
            if (this.currentItemData.length) {
                this.updatePageItem(this.currentItemData);
            }
        });
    }

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }

    ngOnChanges() {
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
        }, 130);
    }

    transFormViewObject(itemData: any) {

        const courseDetailView: Array<CourseDetailViewModel> = [];
        const course = itemData;
        const courseActivities = course.courseActivities;
        const courseRegistration = course.courseRegistration;

        courseActivities.forEach((item) => {
            if (item.target.parent) {
                const courseActivitie = item;
                const target = courseActivitie.target;
                courseDetailView.push({
                    title: this.commonService.getTitle(target), // Title
                    label: this.commonService.getLabel(target), // Label
                    prerequisite: this.commonService.getPrerequisite(target), // Előfeltétel
                    status: this.commonService.getActivityStatus(courseActivitie), // Status button
                    links: this.commonService.getLinks(courseActivitie), // Launch button + links
                    courseProgressStatus: this.commonService.getCourseProgressStatus(courseActivitie), // Előrehaladás
                    courseMeasureStatus: this.commonService.getCourseMeasureStatus(courseActivitie), // Eredmény
                    deadLine: this.commonService.getDeadLine(courseActivitie), // Határidő
                    totalTime: this.commonService.getTotalTime(courseActivitie), // Eltöltött idő
                    minimumTime: this.commonService.getMinimumTime(courseActivitie), // Min. tanulási idő
                    registrationDate: this.commonService.getRegistrationDate(courseRegistration), // Beiratkozás dátuma
                    resultStartDate: this.commonService.getResultStartDate(courseActivitie), // Tanulás kezdete
                    suggestedTime: this.commonService.getSuggestedTime(courseActivitie), // Várható tanulási idő
                    launchButton: this.commonService.getLaunchButton(courseActivitie), // Launch
                    description: this.commonService.getDescription(courseActivitie), // Részletek
                    serviceTechnicalProfile: this.commonService.getServiceTechnicalProfile(courseActivitie), // Technikai feltételek
                    // providerName: this.commonService.getProviderName(course), // Label Provider name
                    // imageUrl: this.commonService.getImageUrl(course), // Image,
                });
            }

        });
        // console.log('courseDetailView', courseDetailView);
        return courseDetailView;
    }

}
