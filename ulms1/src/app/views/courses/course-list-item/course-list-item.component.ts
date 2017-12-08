import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CourseTabIndex} from '../../../services/course-status-mapper.service';

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

    public noItemBoxText = {
        [CourseTabIndex.ACTIVE]: 'msg_recommennded_course_list_is_empty',
        [CourseTabIndex.RECOMMENDED]: 'msg_recommennded_course_list_is_empty',
        [CourseTabIndex.OPTIONAL]: 'msg_optional_course_list_is_empty',
        [CourseTabIndex.UPCOMING]: 'msg_upcoming_course_list_is_empty',
        [CourseTabIndex.CLOSED]: 'msg_closed_course_list_is_empty',
    };

    constructor(private route: ActivatedRoute) {
        // console.log('---- CourseListItemComponent ---- ');
        this.paramsObservable = this.route.params.subscribe(params => {
            this.itemIndex = this.route.snapshot.data.itemIndex;
            // console.log('itemIndex: ', this.route.snapshot.data.itemIndex);
            // console.log('responseData: ', this.route.snapshot.data.responseData);
            this.itemData = this.route.snapshot.data.responseData;
            this.items = this.itemData.items;
            // this.items = [];
        });
    }

    ngOnDestroy() {
        this.paramsObservable.unsubscribe();
    }
}
