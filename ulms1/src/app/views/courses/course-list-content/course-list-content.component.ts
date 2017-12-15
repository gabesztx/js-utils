// External imports
import {Component, OnInit} from '@angular/core';
import {PreferencesService} from '../../../services/preferences.service';
import {CourseTabIndex} from '../../../services/course-status-mapper.service';
import {PreferencesApiKey} from '../../../models/user.model';

@Component({
    selector: 'ulms-course-list-content',
    templateUrl: './course-list-content.component.html',
    styleUrls: ['../courses.component.scss']
})
export class CourseListContentComponent implements OnInit {
    public navData = [];
    constructor(private preferencesService: PreferencesService) {
        this.navData = [
            {
                label: 'lbl_active_courses_short',
                urlPath: CourseTabIndex.ACTIVE
            },
            {
                label: 'lbl_recommended_courses_short',
                urlPath: CourseTabIndex.RECOMMENDED,
                notification: this.preferencesService.getPreferencesData(PreferencesApiKey.api_InvitedCourses)
            },
            {
                label: 'lbl_optional',
                urlPath: CourseTabIndex.OPTIONAL,
                notification: this.preferencesService.getPreferencesData(PreferencesApiKey.api_UserOptionalCourseList)
            },
            {
                label: 'lbl_inactive_courses_short',
                urlPath: CourseTabIndex.UPCOMING
            },
            {
                label: 'lbl_closed_courses',
                urlPath: CourseTabIndex.CLOSED
            }
        ];
    }
    ngOnInit() {}
}
