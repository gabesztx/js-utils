import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ulms-course-detail',
    templateUrl: './course-detail.component.html',
    // styleUrls: ['../course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
    public paramsObs: any;
    public urlId: any;
    public itemData: any;

    constructor(private route: ActivatedRoute) {
        this.paramsObs = this.route.params.subscribe(params => {
            this.itemData = this.route.snapshot.data.responseData;
            this.urlId =  params.courseId;
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }

}
