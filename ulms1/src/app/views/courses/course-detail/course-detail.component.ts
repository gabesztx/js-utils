import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkRel } from '../../../models/link.model';
import { CourseActivityStatus } from '../../../models/courseActivity.model';
import { CommonService } from '../../../services/common/common.service';
import { ModalHandlerService } from '../../../services/modal-handler.service';

@Component({
    selector: 'ulms-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['../course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
    public paramsObs: any;
    public urlId: any;
    public courseDetail: any;
    public courseFeeds: any;
    public isShowTab: any;
    public userInvitations: any;
    public courseDetailState: any;
    public popUpModal: any;

    public navTabData = [];
    public navTabLinks = [];

    public isShowMessageBox: false;
    public isCourseDetailMainContent = false;
    public isCourseDetailMainInfo = false;
    public isContentDetailTabShow = true;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private commonService: CommonService,
                private modalHandlerService: ModalHandlerService) {

        this.popUpModal = this.modalHandlerService.getPopUpHandlerScope();

        this.paramsObs = this.route.params.subscribe(params => {
            this.urlId = params.courseId;
            this.courseDetail = this.route.snapshot.data.responseData.courseDetail;
            this.courseFeeds = this.route.snapshot.data.responseData.courseFeeds;
            this.courseDetailState = this.courseDetail.courseState;
            this.userInvitations = this.courseDetail.userInvitations;
            this.isShowMessageBox = this.courseDetail.isLocked;
            this.navTabLinks = this.navigationTabDropDown();
            // this.navigationTabDropDown()

            this.courseDetailView();
            this.courseDetailModalHandler();

        });
    }

    ngOnInit() {
    }

    /**
     * course detail nav tab property
     */
    courseDetailView() {

        if (this.courseDetailState === 4 || this.courseDetailState === 5) {
            console.log('STATE 1');
            this.isShowTab = true;
            this.isCourseDetailMainContent = true;
            this.isContentDetailTabShow = true;
            // this.navigateList('content');

        } else if (this.courseDetailState >= 0 && this.courseDetailState <= 2 || this.courseDetailState == null) {
            console.log('STATE 2');
            this.isShowTab = false;
            this.isCourseDetailMainInfo = true;
            // this.navigateList('info');

        } else if (this.courseDetailState === 3) {
            console.log('STATE 3');
            this.isShowTab = true;
            this.isCourseDetailMainInfo = true;
            this.isContentDetailTabShow = false;
            // this.navigateList('info');
        }

        this.navigationTabView();
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
        if (courseActivities.length && this.isContentDetailTabShow) {
            this.navTabData.push(navTabDefaultData.content);
        }

        // add information tab
        this.navTabData.push(navTabDefaultData.info);

        // add feed tab
        if (this.courseFeeds.length) {
            this.navTabData.push(navTabDefaultData.feed);
        }
    }

    /**
     * course courseActivitie root
     */

    getCourseActivitieRoot(courseActivities) {
        const courseActivitie = [];
        courseActivities.forEach((item) => {
            if (!item.target.parent) {
                courseActivitie.push(item);
            }
        });

        return courseActivitie[0];

    }

    /**
     * course detail nav tab dropDown menu
     */
    navigationTabDropDown() {
        const courseActivitie = this.getCourseActivitieRoot(this.courseDetail.courseActivities);
        return this.commonService.getLinks(courseActivitie);


    }

    /**
     * course detail modal handler
     */
    courseDetailModalHandler() {
        const courseActivitie = this.getCourseActivitieRoot(this.courseDetail.courseActivities);
        const currentLink = this.commonService.getCurrentLink(this.navTabLinks);
        const courseActivitieState = courseActivitie.state;

        /* Sikeres kurzus - ne jelenjen meg popup */
        if (courseActivitieState === CourseActivityStatus.Qualified) {
            console.log('SIKERES');
        }

        /* Szerződés letöltése popup */
        if (currentLink.rel === LinkRel.CONTRACTAll) {
            this.popUpModal.openModal('contractDownload', (link) => {
                window.open(link.href, '_blank');
            }, currentLink);
        }
    }


    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }
}
