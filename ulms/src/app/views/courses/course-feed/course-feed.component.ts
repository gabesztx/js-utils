import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../../../services/common/common.service';
import { PreferencesService } from '../../../services/preferences.service';
import { PreferencesApiKey } from '../../../models/user.model';
import {slideOutInKeyFrameAnimation} from '../../../animations/course-animation';

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
    public currentItemData = [];
    public isMainFeeds = false;

    constructor(private route: ActivatedRoute, private commonService: CommonService, private preferencesService: PreferencesService,) {
        this.isMainFeeds = this.route.snapshot.data.class === 'main';
        if(this.isMainFeeds){
            this.preferencesService.postPreferencesData(PreferencesApiKey.api_UserFeeds);
        }
        this.paramsObs = this.route.params.subscribe(params => {
            this.itemData = this.route.snapshot.data.responseData.courseFeeds;
            this.currentItemData = this.transFormViewObject(this.itemData);
            if (this.currentItemData.length > 0) {
                clearInterval(this.currentItemInterval);
                this.updatePageItem(this.currentItemData);
            }
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
        }, 100);
    }

    transFormViewObject(itemData: any) {
        const courseDetailFeeds: Array<any> = [];
        const feeds = itemData;

        feeds.forEach((item) => {
            courseDetailFeeds.push({
                title: item.title ? item.title : '', // Title
                label: item.course ? item.course.title : '', // Label
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
