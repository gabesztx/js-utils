import { Component, OnChanges, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiResponse } from '../../../services/base/http.class';
import { CommonService } from '../../../services/common/common.service';
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

    transFormViewObject(data: RestApiResponse<CourseDetail[]>) {
        const dataArray: Array<any> = [];
        data.items.forEach((value) => {
            const courseActivities = value.courseActivities[0];
            const id = value.id;
            const title = value.title;
            const label = value.label;
            const providerName = value.provider && value.provider.name ? value.provider.name : '';
            const imageUrl = value.imageUrl.length ? value.imageUrl : '/Content/client/assets/images/suitcase_big_icon.png';

            const status = courseActivities.status;
            const remainingTime = courseActivities.result.remainingTime;
            const netTimeLimit = courseActivities.target.requirement.netTimeLimit;
            const totalTime = courseActivities.result.totalTime;
            const links = courseActivities.links;
            const resultProgress = courseActivities.result.progress;
            const resultMeasure = courseActivities.result.measure;
            const deadLine = courseActivities.result.resultEndTime;
            const completed = courseActivities.result.completed;
            const satisfied = courseActivities.result.satisfied;

            dataArray.push({
                id: id,
                title: title,
                label: label,
                imageUrl: imageUrl,
                remainingTime: remainingTime,
                totalTime: totalTime,
                netTimeLimit: netTimeLimit,
                providerName: providerName,
                status: status,
                deadLine: this.commonService.getDeadLine_(deadLine),
                btnIcon: this.commonService.getStatusButton(status),
                resultProgress: resultProgress ? Math.round(resultProgress * 100) : 0,
                resultMeasure: resultMeasure ? Math.round(resultMeasure * 100) : 0,
                progressStatus: this.commonService.getLineStatus(completed, status),
                measureStatus: this.commonService.getLineStatus(satisfied, status),
                links: this.commonService.getLink(links),
            });

        });
        return dataArray;
    }
}
