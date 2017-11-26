import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    public isShowTab: any;
    public navTabData = [];

    public courseDetailState: any;
    public isCourseDetailMainContent = false;
    public isCourseDetailMainInfo = false;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.paramsObs = this.route.params.subscribe(params => {
            this.urlId = params.courseId;
            this.courseDetail = this.route.snapshot.data.responseData.courseDetail;
            this.courseFeeds = this.route.snapshot.data.responseData.courseFeeds;
            this.courseDetailState = this.courseDetail.courseState;
            // console.log('CourseDetailComponent', this.route.snapshot.data.responseData);
            this.navigationTabView();
            this.courseDetailView();
        });
    }

    ngOnInit() {
    }

    navigateList(urlParams: string) {
        this.router.navigate(['courses', this.urlId, urlParams]);
    }

    /**
     * course detail nav tab property
     */
    courseDetailView() {

        if (this.courseDetailState === 4 || this.courseDetailState === 5) {
            this.isShowTab = true;
            this.isCourseDetailMainContent = true;
            this.navigateList('content');

        } else if (this.courseDetailState >= 0 && this.courseDetailState <= 2 || this.courseDetailState == null) {
            this.isShowTab = false;
            this.isCourseDetailMainInfo = true;
            this.navigateList('info');

        }
        console.log('courseDetailState: ', this.courseDetailState);
        console.log('isCourseDetailMainContent: ', this.isCourseDetailMainContent);
        console.log('isCourseDetailMainInfo: ', this.isCourseDetailMainInfo);
    }

    /**
     * course detail nav tab property
     */
    navigationTabView() {
        const courseActivities = this.courseDetail.courseActivities;
        const navTabDefaultData = {
            content: { 'label': 'lbl_course_content', 'urlPath': '/courses/' + this.urlId + '/content' },
            info: { 'label': 'lbl_course_information', 'urlPath': '/courses/' + this.urlId + '/info' },
            feed: { 'label': 'lbl_feed', 'urlPath': '/courses/' + this.urlId + '/feed' }
        };

        // add content tab
        if (courseActivities.length) {
            this.navTabData.push(navTabDefaultData.content);
        }

        // add information tab
        this.navTabData.push(navTabDefaultData.info);

        // add feed tab
        if (this.courseFeeds.length) {
            this.navTabData.push(navTabDefaultData.feed);
        }
    }

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }

}

/*
if ($scope.courses.courseState == 0 || $scope.courses.courseState == 1 || $scope.}courses.courseState == 2 || $scope.courses.courseState == null) {
    $scope.showTabs = false;
    $scope.course.selectTab('infoTab');
} else if ($scope.courses.courseState == 4 || $scope.courses.courseState == 5) {
    $scope.showTabs = true;
} else if ($scope.courses.courseState == 3) {
    //inactive tipusu kurzusok eseten eltuntetjuk a tartalom tabot
    $scope.courses.contentTabShowing = false;
    $scope.showTabs = true;
    $scope.course.selectTab('infoTab');
}*/
