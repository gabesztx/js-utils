import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common/common.service';
import { slideOutInKeyFrameAnimation } from '../../../animations/course-animation';

@Component({
    selector: 'ulms-course-feed',
    templateUrl: './course-feed.component.html',
    styleUrls: ['../course-feed.comopenet.scss'],
    animations: [slideOutInKeyFrameAnimation]
})

export class CourseFeedComponent implements OnInit, OnChanges, OnDestroy {
    itemData: any;
    paramsObs: any;
    currentItemListaData: any;
    currentItemInterval: any;
    currentItemData: any;

    constructor(private route: ActivatedRoute, private commonService: CommonService) {
        this.paramsObs = this.route.params.subscribe(params => {
            console.log('Course feeed')
            // this.itemData = this.route.snapshot.data.responseData.courseFeeds;
            // this.currentItemData = this.transFormViewObject(this.itemData);
            // clearInterval(this.currentItemInterval);
            // this.updatePageItem(this.currentItemData);
        });
    }

    ngOnChanges() {}

    ngOnInit() {}

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
        const courseDetailFeeds: Array<any> = [];
        const feeds = itemData;

        feeds.forEach((item) => {
            courseDetailFeeds.push({
                title: item.title, // Title
                label: item.course.title, // Label
                creationDate: this.commonService.formatDay(item.creationDate), // Date
                description: item.description, // Description
            });
        });
        return courseDetailFeeds;
    }

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }
}
