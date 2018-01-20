import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ulms-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    constructor() { }
    ngOnInit() {
        console.log('CoursesComponent Init');
    }
}
