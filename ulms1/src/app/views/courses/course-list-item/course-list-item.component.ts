import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CourseTabIndex } from '../../../services/course-status-mapper.service';

@Component({
    selector: 'ulms-course-list-item',
    templateUrl: './course-list-item.component.html',
    styleUrls: ['./course-list-item.component.scss'],
    providers: [Location]
})

export class CourseListItemComponent implements OnDestroy {
    public itemData: any;
    public state = 'small';
    public itemIndex: string;
    public paramsObservable: any;
    public courseTabIndex = CourseTabIndex;
    public items: any;

    public pageTitle = {
        [CourseTabIndex.ACTIVE]: 'lbl_active_courses_title',
        [CourseTabIndex.RECOMMENDED]: 'lbl_recommended_courses',
        [CourseTabIndex.OPTIONAL]: 'lbl_optional_courses',
        [CourseTabIndex.UPCOMING]: 'lbl_inactive_courses_title',
        [CourseTabIndex.CLOSED]: 'lbl_closed_curses_title',
    };

    constructor(private route: ActivatedRoute) {
        // this.itemData = [];
        this.paramsObservable = this.route.params.subscribe(params => {
            this.itemIndex = this.route.snapshot.data.itemIndex;
            this.itemData = this.route.snapshot.data.responseData;
            // this.items = this.itemData.items;
            this.items = [];
            console.log('itemData: ', this.itemData);
        });
    }

    ngOnDestroy() {
        this.paramsObservable.unsubscribe();
    }
}
