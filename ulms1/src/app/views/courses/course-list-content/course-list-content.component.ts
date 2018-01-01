// External imports
import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../../../services/preferences.service';
import { CourseTabIndex } from '../../../services/course-status-mapper.service';
import { PreferencesApiKey } from '../../../models/user.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { fadeInKeyFrameAnimation } from '../../../animations/common-animation';

@Component({
    selector: 'ulms-course-list-content',
    templateUrl: './course-list-content.component.html',
    styleUrls: ['../courses.component.scss'],
    animations: [fadeInKeyFrameAnimation]
})
export class CourseListContentComponent implements OnInit {
    public navData = [];

    constructor(private preferencesService: PreferencesService) {
        this.preferencesService.__courseListContentInstance__ = this;
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

    ngOnInit() {
    }

    updateNotification(apikey) {
        if (apikey === PreferencesApiKey.api_InvitedCourses) {
            this.navData[1].notification = [];
        } else if (apikey === PreferencesApiKey.api_UserOptionalCourseList) {
            this.navData[2].notification = [];
        }
    }
}
