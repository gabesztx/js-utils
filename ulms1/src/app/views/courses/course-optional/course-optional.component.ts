import { Component, OnChanges, Input } from '@angular/core';
import { CommonService } from '../../../services/common/common.service';
import { slideInOutKeyFrameAnimation } from '../../../animations/course-animation';

@Component({
    selector: 'ulms-course-optional',
    templateUrl: './course-optional.component.html',
    styleUrls: ['../courses.component.scss'],
    animations: [slideInOutKeyFrameAnimation]
})

export class CourseOptionalComponent implements OnChanges {
    @Input() itemData: any;
    @Input() courseTitleContent: any;
    currentItemData: any;
    currentItemListaData: any;
    currentItemInterval: any;

    constructor(private commonService: CommonService) {}

    ngOnChanges() {
        clearInterval(this.currentItemInterval);
        // console.log('CourseOptionalComponent', this.itemData)
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

    transFormViewObject(data) {
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
            const description = course.description;

            let links;
            if (value.links) {
                value.links.forEach((value) => {
                    if (value.rel === 'Reject') {
                        links = value
                    }
                });
            }
            dataArray.push({
                id: course.id,
                imageUrl: course.imageUrl.length ? course.imageUrl : '/Content/client/assets/images/suitcase_big_icon.png',
                title: course.title,
                label: course.label,
                providerName: course.provider ? course.provider.name : '',
                resultStartDate: this.commonService.getResultDate(resultStartDate),
                resultEndDate: this.commonService.getResultDate(resultEndDate),
                getExpiration: this.commonService.getExpiration(exparitation, endDate),
                suggestedTime: courseObject.requirement.suggestedTime,
                netTimeLimit: courseObject.requirement.netTimeLimit,
                description: description,
                links: links ? [links] : []
            });
        });
        return dataArray;
    }
}
