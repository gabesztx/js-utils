import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LinkRel} from '../../../models/link.model';
import {CourseActivityStatus} from '../../../models/courseActivity.model';
import {ContractStatus} from '../../../models/courseRegistrationShallow.model';
import {CommonService} from '../../../services/common/common.service';
import {ModalHandlerService} from '../../../services/modal-handler.service';
import {CourseDetailService} from '../../../services/course-detail.service';
import {calcPossibleSecurityContexts} from '@angular/compiler/src/template_parser/binding_parser';

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
    public courseRegistration: any;
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
                private courseDetailService: CourseDetailService,
                private modalHandlerService: ModalHandlerService) {

        this.popUpModal = this.modalHandlerService.getPopUpHandlerScope();
        this.paramsObs = this.route.params.subscribe(params => {
            this.urlId = params.courseId;
            this.courseDetail = this.route.snapshot.data.responseData.courseDetail;
            this.courseFeeds = this.route.snapshot.data.responseData.courseFeeds;
            this.courseDetailState = this.courseDetail.courseState;
            this.courseRegistration = this.courseDetail.courseRegistration;
            this.userInvitations = this.courseDetail.userInvitations;
            this.isShowMessageBox = this.courseDetail.isLocked;
            this.navTabLinks = this.navigationTabDropDown();
            this.courseDetailView();
            this.courseDetailModalHandler();
        });
    }

    ngOnInit() {
    }

    /**
     * Course detail nav tab property
     */
    courseDetailView() {

        if (this.courseDetailState === 4 || this.courseDetailState === 5) {
            // console.log('STATE 1');
            this.isShowTab = true;
            this.isCourseDetailMainContent = true;
            this.isContentDetailTabShow = true;
            // this.navigateList('content');
        } else if (this.courseDetailState >= 0 && this.courseDetailState <= 2 || this.courseDetailState == null) {
            // console.log('STATE 2');
            this.isShowTab = false;
            this.isCourseDetailMainInfo = true;
            // this.navigateList('info');
        } else if (this.courseDetailState === 3) {
            // console.log('STATE 3');
            this.isShowTab = true;
            this.isCourseDetailMainInfo = true;
            this.isContentDetailTabShow = false;
            // this.navigateList('info');
        }
        this.navigationTabView();
    }

    /**
     * Course detail nav tab property
     */
    navigationTabView() {
        const courseActivities = this.courseDetail.courseActivities;
        const navTabDefaultData = {
            content: {'label': 'lbl_course_content', 'urlPath': '/courses/' + this.urlId + '/content'},
            info: {'label': 'lbl_course_information', 'urlPath': '/courses/' + this.urlId + '/info'},
            feed: {'label': 'lbl_feed', 'urlPath': '/courses/' + this.urlId + '/feed'}
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
     * Get courseActivitie root
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
     * Course detail nav tab dropDown menu
     */
    navigationTabDropDown() {
        const courseActivitie = this.getCourseActivitieRoot(this.courseDetail.courseActivities);
        return this.commonService.getLinks(courseActivitie);
    }

    /**
     * Course detail modal handler
     */
    courseDetailModalHandler() {
        const courseActivitie = this.getCourseActivitieRoot(this.courseDetail.courseActivities);

        const courseActivitieStatus = courseActivitie.status;
        const courseRegistration = this.courseRegistration;
        const contractStatus = courseRegistration.contractStatus;
        const licenseDocumentNotificationRequired = courseActivitie.licenseDocumentNotificationRequired;

        const qualificationNotice = this.courseDetail.qualificationNotice;
        const qualificationNoticeAppeared = this.courseRegistration.qualificationNoticeAppeared;
        const isActivitieQualified = courseActivitieStatus === CourseActivityStatus.Qualified;

        const isContractNone = contractStatus === ContractStatus.None;
        const isContractAccepted = contractStatus === ContractStatus.Accepted;
        const isContractRequired = contractStatus === ContractStatus.Required;

        /**
         * LINKS: get currentLinkValue
         */
        const getCurrentLinkValue = (linkRel) => {
            return this.navTabLinks.find(item => item.rel === linkRel);
        };

        const linkContractAll = getCurrentLinkValue(LinkRel.CONTRACTAll);
        const linkContractReject = getCurrentLinkValue(LinkRel.CONTRACTREJECT);
        const linkProfileUpgrade = getCurrentLinkValue(LinkRel.PROFILEUPGRADE);
        const linkLicenceDocumentum = getCurrentLinkValue(LinkRel.LICENSEDOCUMENT);
        const linkLicenceDocumentumAll = getCurrentLinkValue(LinkRel.LICENSEDOCUMENTALL);


        /**
         * POPUP MODAL: QualificationNotice
         */
        if (!!qualificationNotice && isActivitieQualified && !qualificationNoticeAppeared && (isContractNone || isContractAccepted)) {
            console.log('----- QualificationNotice MODAL -----');
            this.popUpModal.openModal('qualificationNotice', (checkBoxValue: boolean) => {
                if (checkBoxValue) {
                    /* send server */
                    this.courseDetailService.qualificationNoticeModal(this.courseRegistration.id);

                }
            }, {links: this.navTabLinks, qualificationNotice: qualificationNotice});
        }

        /**
         *  POPUP MODAL: Szerződés letöltése
         */
        if (courseRegistration && isContractRequired && linkContractAll) {
            console.log('----- Contract download MODAL -----');
            this.popUpModal.openModal('contractDownload', () => {
                // TODO: KÉRDÉS: elküldeni servernek az állapotot?
                window.open(linkContractAll.href, linkContractAll.target);
            });
        }

        /**
         * POPUP MODAL: Szerződés tanustvány letöltése
         */
        if (courseRegistration && isContractRequired && linkContractReject && linkProfileUpgrade) {
            console.log('----- Contract required MODAL -----');
            this.popUpModal.openModal('certificateCondition', (checkBoxValue: boolean) => {
                // TODO: KÉRDÉS: elküldeni servernek az állapotot?
                if (!checkBoxValue) {
                    // console.log('UPDATE');
                    window.open(linkProfileUpgrade.href, linkProfileUpgrade.target);
                } else {
                    console.log('REJECT Contract!!!!');
                    this.courseDetailService.contractRequiredReject(linkContractReject.href);
                }
            });
        }

        /**
         * POPUP MODAL: Documentum notification
         */

        if (licenseDocumentNotificationRequired && linkLicenceDocumentumAll || linkLicenceDocumentum) {
            console.log('----- Documentum notification MODAL -----');
            const linkLicenceData = linkLicenceDocumentumAll || linkLicenceDocumentum;
            this.popUpModal.openModal('documentumNotification', () => {
                // TODO: KÉRDÉS: elküldeni servernek az állapotot?
                window.open(linkLicenceData.href, linkLicenceData.target);
            }, linkLicenceData);
        }
    }

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }
}


