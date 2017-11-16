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
    public courseDetail: any;
    public courseFeeds: any;

    constructor(private route: ActivatedRoute) {
        this.paramsObs = this.route.params.subscribe(params => {
            this.urlId =  params.courseId;
            this.courseDetail = this.route.snapshot.data.responseData.courseDetail;
            this.courseFeeds = this.route.snapshot.data.responseData.courseFeeds;
        });
    }

    ngOnInit() {}

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }

}
