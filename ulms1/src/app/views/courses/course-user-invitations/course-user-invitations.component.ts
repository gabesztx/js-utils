import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'ulms-course-user-invitations',
    templateUrl: './course-user-invitations.component.html',
    styleUrls: ['./course-user-invitations.component.scss']
})
export class CourseUserInvitationsComponent implements OnInit, OnChanges {
    @Input() userInvitations: any;

    constructor() {
        // console.log('CourseUserInvitationsComponent');
    }

    ngOnChanges() {
        console.log('userInvitations', this.userInvitations);
    }

    ngOnInit() {}
}
