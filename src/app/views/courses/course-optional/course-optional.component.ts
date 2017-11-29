import { Component, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common/common.service';
import { RestApiResponse } from '../../../services/base/http.class';
import { CourseOptionalViewModel } from '../../../models/views/course-optional-view.model';
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
    noItems = false;

    constructor(private commonService: CommonService, private router: Router) {
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

    clickUrl(id: string) {
        this.router.navigate(['courses', id]);
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

    transFormViewObject(itemData: RestApiResponse<any>) {
        // const courseOptionalView: Array<CourseOptionalViewModel> = [];
        const courseOptionalView: Array<any> = [];
        itemData.items.forEach((item) => {
            const course = item.course;
            const courseObject = item.courseObject;
            courseOptionalView.push({
                id: course.id,
                title: this.commonService.getTitle(course), // Title
                label: this.commonService.getLabel(course), // Label
                providerName: this.commonService.getProviderName(course), // Label Provider name
                imageUrl: this.commonService.getImageUrl(course), // Image
                links: this.commonService.getLinks(item), // Launch button + links
                resultStartDate: this.commonService.getCourseResultStartDate(courseObject), // Kurzus kezdete
                resultEndDate: this.commonService.getCourseResultEndDate(courseObject), // Kurzus vége
                netTimeLimit: this.commonService.getNetTimeLimit(courseObject), // Idő keret
                suggestedTime: this.commonService.getCourseSuggestedTime(courseObject), // Várható tanulási idő
                expirationTime: this.commonService.getExpirationTime(course), // Beiratkozás határideje
                description: this.commonService.getCourseDescription(course), // Leírás
            });
        });
        return courseOptionalView;
    }
}