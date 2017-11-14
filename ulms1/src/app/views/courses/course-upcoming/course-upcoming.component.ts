import { Component, OnChanges, Input } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';
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

    constructor(private commonService: CommonService) {
    }

    ngOnChanges() {
        clearInterval(this.currentItemInterval);
        if (this.itemData.items.length) {
            this.currentItemData = this.transFormViewObject(this.itemData);
            this.updatePageItem(this.currentItemData);
        } else {
            this.noItems = true
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
        }, 125);
    }

    transFormViewObject(data) {
        const dataArray: Array<any> = [];
        data.items.forEach((value) => {
            const courseActivities = value.courseActivities[0];
            const courseRegistration = value.courseRegistration;
            const resultStartDate = courseActivities.target.requirement.resultStartDate;
            const resultEndDate = courseActivities.target.requirement.resultEndDate;
            dataArray.push({
                id: courseActivities.id,
                imageUrl: value.imageUrl.length ? value.imageUrl : '/Content/client/assets/images/suitcase_big_icon.png',
                remainingTime: courseActivities.result.remainingTime,
                title: value.title,
                label: value.label,
                providerName: value.provider ? value.provider.name : '',
                netTimeLimit: courseActivities.target.requirement.netTimeLimit,
                suggestedTime: courseActivities.target.requirement.suggestedTime,
                registrarOrganization: this.commonService.getRegistrarOrganizationName(courseRegistration.registrarOrganization),
                resultStartDate: this.commonService.getResultDate(resultStartDate),
                resultEndDate: this.commonService.getResultDate(resultEndDate),
                btnLabel: 'lbl_course_status_' + courseActivities.status,
                btnIconClassName: this.commonService.getStatusButton(courseActivities.status),
                urlId: '',
                links: [],
                description: value.description
            });
        });
        return dataArray;
    }
}
