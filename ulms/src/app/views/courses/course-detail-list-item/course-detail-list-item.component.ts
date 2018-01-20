import { Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiResponse } from '../../../services/base/http.class';
import { CommonService } from '../../../services/common/common.service';
import { CourseDetailViewModel } from '../../../models/views/course-detail-view.model';
import { slideOutInKeyFrameAnimation } from '../../../animations/course-animation';
import { ModalHandlerService } from '../../../services/modal-handler.service';

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
    public popUpModal: any;

    constructor(private route: ActivatedRoute,
                private commonService: CommonService,
                private modalHandlerService: ModalHandlerService) {

        this.popUpModal = this.modalHandlerService.getPopUpHandlerScope();
        this.paramsObs = this.route.params.subscribe(params => {
            this.itemData = this.route.snapshot.data.responseData.courseDetail;
            clearInterval(this.currentItemInterval);
            this.currentItemData = this.transFormViewObject(this.itemData);
            if (this.currentItemData.length) {
                this.updatePageItem(this.currentItemData);
            }
        });
    }

    ngOnChanges() {
    }

    navigationUrl(item) {
        console.log('navigationUrl', item);
        const url = item.href;
        const target = item.target;
        const type = item.type;

        if (type === 'disturbing') {
            this.popUpModal.openModal('disturbingContent', () => {
                window.open(url, target);
            });
            return;
        } else if (type === 'warning') {
            this.popUpModal.openModal('launchWarning', () => {
                window.open(url, target);
            });
            return;
        }
        // window.open(url, target);
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
                const grossTimeLimit = courseActivitie.target.requirement.grossTimeLimit;
                const resultEndDate = courseActivitie.target.requirement.resultEndDate;
                const target = courseActivitie.target;
                const links = courseActivitie.links;
                courseDetailView.push({
                    title: this.commonService.getTitle(target), // Title
                    label: this.commonService.getLabel(target), // Label
                    prerequisite: this.commonService.getPrerequisite(target), // Előfeltétel
                    status: this.commonService.getActivityStatus(courseActivitie), // Status button
                    links: this.commonService.getLinks(courseActivitie), // Launch button + links
                    courseProgressStatus: this.commonService.getCourseProgressStatus(courseActivitie, course), // Előrehaladás
                    courseMeasureStatus: this.commonService.getCourseMeasureStatus(courseActivitie, course), // Eredmény
                    deadLine: this.commonService.getDeadLine(courseActivitie), // Határidő
                    totalTime: this.commonService.getTotalTime(courseActivitie), // Eltöltött idő
                    minimumTime: this.commonService.getMinimumTime(courseActivitie), // Min. tanulási idő
                    registrationDate: this.commonService.getRegistrationDate(courseRegistration), // Beiratkozás dátuma
                    resultStartDate: this.commonService.getResultStartDate(courseActivitie), // Tanulás kezdete
                    suggestedTime: this.commonService.getSuggestedTime(courseActivitie), // Várható tanulási idő
                    launchButton: this.commonService.getLaunchButton(courseActivitie), // Launch
                    detailButton: this.commonService.getCurrentLinkRel(links, 'Result'), // Details url
                    description: this.commonService.getDescription(courseActivitie), // Részletek
                    serviceTechnicalProfile: this.commonService.getServiceTechnicalProfile(courseActivitie), // Technikai feltételek
                    grossTimeLimit: grossTimeLimit ? grossTimeLimit : '', // grossTimeLimit
                    resultEndDate: resultEndDate ? this.commonService.formatDay(resultEndDate) : '', // resultEndDate
                });
            }
        });
        return courseDetailView;
    }

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }
}
