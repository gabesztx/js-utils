import { Injectable } from '@angular/core';
import { L10nService } from '../l10n.service';
import { LinkRel, DocumentumTypeValu } from '../../models/link.model';
import { CourseState } from '../../models/courseActivity.model';
import * as moment from 'moment';

@Injectable()
export class CommonService {

    constructor(private l10nService: L10nService) {
    }

    /**
     *  getTitle
     *  @param {Object} course
     *  @return {String}
     */
    getTitle(course: any): string {
        return course.title;
    }

    /**
     *  getImageUrl
     *  @param {Object} course
     *  @return {String} imageUrl
     */
    getImageUrl(course: any): string {
        const imageUrl = course.imageUrl;
        const urlPath = (<any>window).env === 'serv' ? '/Content/client/assets/images/suitcase_big_icon.png' : '/assets/images/suitcase_big_icon.png';
        return imageUrl.length ? imageUrl : urlPath;
    }

    /**
     *  getLabel
     *  @param {Object} course
     *  @return {String}
     */
    getLabel(course: any): string {
        return course.label;
    }

    /**
     *  getProviderName
     *  @param {Object} course
     *  @return {String} provider name
     */
    getProviderName(course: any): string {
        const provider = course.provider;
        return provider ? provider.name : '';
    }

    /**
     *  getPrerequisite
     *  @param {Object} courseActivitie target
     *  @return {String} prerequisite
     */
    getPrerequisite(courseActivitie: any): string {
        const prerequisite = courseActivitie.prerequisite;
        if (prerequisite.length) {
            return prerequisite[0].targetTitle;
        }
        return this.translate('txt_not_exists');
    }

    /**
     *  getCourseProgress
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    getCourseProgressStatus(courseActivitie: any, course?: any): any {
        const status = courseActivitie.status ? courseActivitie.status : 0;
        const courseState = course ? course.courseState : 0;
        const progress = courseActivitie.result.progress ? courseActivitie.result.progress : 0;
        const isCompleted = courseActivitie.result.completed;
        const lineValue = progress ? Math.round(progress * 100) : 0;
        const requiredForCompleted = courseActivitie.target.requirement.requiredForCompleted;
        const requiredText = requiredForCompleted ? 'lbl_required_for_satisfied' : 'lbl_not_required_for_satisfied';
        const requiredToolTipText = requiredForCompleted ? 'tt_course_object_progress_required' : 'tt_course_object_progress_not_required';

            return {
            'value': lineValue,
            'statusIcon': this.getLineStatus(isCompleted, status, courseState),
            'requiredText': this.translate(requiredText),
            'statusColorLine': requiredForCompleted ? requiredForCompleted : false,
            'requiredToolTipText': this.translate(requiredToolTipText),
        };
    }

    /**
     *  getCourseMeasure
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    getCourseMeasureStatus(courseActivitie: any, course?: any): any {
        const status = courseActivitie.status ? courseActivitie.status : 0;
        const courseState = course ? course.courseState : 0;
        const progress = courseActivitie.result.measure;
        const isCompleted = courseActivitie.result.satisfied;
        const lineValue = progress ? Math.round(progress * 100) : 0;
        const requiredForSatisfied = courseActivitie.target.requirement.requiredForSatisfied;
        const requiredText = requiredForSatisfied ? 'lbl_required_for_satisfied' : 'lbl_not_required_for_satisfied';
        const requiredToolTipText = requiredForSatisfied ? 'tt_course_measure_required' : 'tt_course_measure_not_required';
        return {
            'value': lineValue,
            'statusIcon': this.getLineStatus(isCompleted, status, courseState),
            'requiredText': this.translate(requiredText),
            'statusColorLine': requiredForSatisfied ? requiredForSatisfied : false,
            'requiredToolTipText': this.translate(requiredToolTipText),
        };
    }

    /**
     *  getRegistrarOrganization
     *  @param {Object} courseRegistration
     *  @return {Object}
     */
    getRegistrarOrganization(courseRegistration: any): any {
        const registrarOrganization = courseRegistration.registrarOrganization;
        return registrarOrganization ? registrarOrganization.name : this.translate('txt_not_exists');
    }

    /**
     *  getDeadLine
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    getDeadLine(courseActivitie: any): any {
        const resultEndTime = courseActivitie.result.resultEndTime;
        const state = courseActivitie.state ? courseActivitie.state : 0;
        const textLabel = state === CourseState.Closed ? this.translate('lbl_closed_date') : this.translate('lbl_deadline_colon');
        let value = this.formatDay(resultEndTime);
        // let isShowToolTip = this.formatDay(resultEndTime);
        if (!resultEndTime) {
            value = this.translate('txt_after_first_launch');
        }
        if (resultEndTime && this.isValideDate(resultEndTime)) {
            value = this.translate('txt_not_exists');
        }
        return {
            value: value,
            textLabel: textLabel,
            isShowToolTip: !resultEndTime,
        };
    }

    /**
     *  getTotalTime
     *  @param {Object} courseActivitie
     *  @return {String}
     */
    getTotalTime(courseActivitie: any): any {
        const totalTime = courseActivitie.result.totalTime ? courseActivitie.result.totalTime : 0;
        const netTimeLimit = courseActivitie.target ? courseActivitie.target.requirement.netTimeLimit : 0;
        return {
            'value': totalTime,
            'netTimeLimit': netTimeLimit,
        };
    }

    /**
     *  getActivityStatus
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    getActivityStatus(courseActivitie: any): any {
        const status = courseActivitie.status ? courseActivitie.status : 0;
        const ICON_NAME = {
            '1': 'hourglass_icon',
            '2': 'play glyphicon glyphicon-play',
            '3': 'pending',
            '4': 'pending',
            '5': 'pending',
            '6': 'success glyphicon glyphicon-ok',
            '7': 'unsuccessful glyphicon glyphicon-remove',
        };
        return {
            'value': status,
            'icon': ICON_NAME[status]
        };
    }

    /**
     *  getRecommendedStatus
     *  @param {Object} invitation
     *  @return {Object}
     */
    getRecommendedStatus(invitation: any): any {
        const severity = invitation.severity ? invitation.severity : 0;
        const ICON_NAME = {
            '0': 'btn-icon',
            '1': 'btn-icon airship_icon',
            '2': 'btn-icon apple_icon',
            '3': 'btn-icon envelope glyphicon glyphicon-envelope',
            '4': 'btn-icon envelope fire_icon',
            '5': 'btn-icon envelope airship_icon',
        };

        return {
            'value': severity,
            'icon': ICON_NAME[severity]
        };
    }

    /**
     *  getCurrentLinkRel
     *  @param {Array} links
     *  @return {Array} link
     */
    getCurrentLinkRel(links?: any, linkRel?: any) {
        // console.log('LINKS', links);
        return links.find(item => item.rel === linkRel);
    }

    /**
     *  getLinks
     *  @param {Object} courseActivitie
     *  @return {Array}
     */
    getLinks(courseActivitie: any): Array<any> {
        const linkData: Array<any> = [];
        const links = courseActivitie.links ? courseActivitie.links : [];
        const licenseDocumentType = courseActivitie.licenseDocumentType;
        const linksLabel = {
            [LinkRel.ACCEPT]: 'accept',
            [LinkRel.REJECT]: 'lnk_reject',
            [LinkRel.CERTIFICATEALL]: 'lnk_download_certificate_zip',
            [LinkRel.CERTIFICATE]: 'lnk_download_certificate_pdf',
            [LinkRel.CONTRACTAll]: 'btn_download_contract_zip',
            [LinkRel.CONTRACT]: 'btn_download_contract_pdf'
        };
        if (links.length) {
            links.forEach((link) => {
                if (linksLabel.hasOwnProperty(link.rel)) {
                    link.dropDownItemLabel = linksLabel[link.rel];
                    linkData.push(link);
                }
                if (link.rel === LinkRel.CONTRACTREJECT) {
                    linkData.push(link);
                }
                if (link.rel === LinkRel.PROFILEUPGRADE) {
                    linkData.push(link);
                }
                if (link.rel === LinkRel.EXTERNAL) {
                    link.dropDownItemLabel = link.label;
                    linkData.push(link);
                }
                if (link.rel === LinkRel.LICENSEDOCUMENTALL && licenseDocumentType) {
                    link.dropDownItemLabel = 'lnk_download_' + DocumentumTypeValu[licenseDocumentType] + '_zip';
                    link.lblDocumentType = 'lnk_download_' + DocumentumTypeValu[licenseDocumentType] + '_zip';
                    link.licenseDocumentType = this.translate('enm_document_type_' + DocumentumTypeValu[licenseDocumentType]);
                    linkData.push(link);
                }
                if (link.rel === LinkRel.LICENSEDOCUMENT && licenseDocumentType) {
                    link.dropDownItemLabel = 'lnk_download_' + DocumentumTypeValu[licenseDocumentType] + '_pdf';
                    link.lblDocumentType = 'lnk_download_' + DocumentumTypeValu[licenseDocumentType] + '_pdf';
                    link.licenseDocumentType = this.translate('enm_document_type_' + DocumentumTypeValu[licenseDocumentType]);
                    linkData.push(link);
                }
            });
        }
        return linkData;
    }

    /**
     *  getRegistrationDate
     *  @param {Object} courseRegistration
     *  @return
     */
    getRegistrationDate(courseRegistration: any): any {
        const registrationDate = courseRegistration.registrationDate;
        if (this.isValideDate(registrationDate)) {
            return this.translate('txt_not_specified');
        }
        return registrationDate ? this.formatDay(registrationDate) : this.translate('txt_not_specified');
    }

    /**
     *  getSuggestedTime
     *  @param {Object} courseActivitie
     *  @return
     */
    getSuggestedTime(courseActivitie: any): any {
        const suggestedTime = courseActivitie.target.requirement.suggestedTime;
        return suggestedTime ? suggestedTime : 0;
    }

    /**
     *  getDescription
     *  @param {Object} courseActivitie
     *  @return
     */
    getDescription(courseActivitie: any): any {
        const description = courseActivitie.target.description;
        return description;
    }

    /**
     *  getLaunchButton
     *  @param {Object} courseActivitie
     *  @return
     */

    getLaunchButton(courseActivitie: any): any {

        const links = courseActivitie.links ? courseActivitie.links : [];
        const isLinks = links.length;
        const state = courseActivitie.state ? courseActivitie.state : 0;
        const disturbingContent = courseActivitie.target.disturbingContent;
        const isClose = state === CourseState.Closed;
        // const disturbingContent = false;
        // const isClose = true;

        if (isLinks) {
            // console.log('link', links);
            // console.log('state: ', state);
            // console.log('isClose: ', isClose);
            // console.log('disturbingContent: ', disturbingContent);
        }

        if (isLinks && isClose) {
            // console.log('--- LAUNCH 1 ---');
            if (links[0].rel === 'Launch') {
                return {
                    type: 'warning',
                    href: links[0].href,
                    target: links[0].target,
                    icon: 'btn-icon fa fa-exclamation-triangle',
                    className: 'launch_warning'
                };
            }
        }

        if (isLinks && !isClose) {
            // console.log('--- LAUNCH 2 ---');
            if (links[0].rel === 'Launch') {
                if (!disturbingContent) {
                    // console.log('--- LAUNCH 2/1 ---');
                    return {
                        type: 'origin',
                        href: links[0].href,
                        target: links[0].target,
                        className: 'launch_origin'
                    };
                }
                if (disturbingContent) {
                    // console.log('--- LAUNCH 2/2 ---');
                    return {
                        type: 'disturbing',
                        href: links[0].href,
                        target: links[0].target,
                        icon: 'btn-icon fa fa-exclamation-triangle',
                        className: 'launch_origin'
                    };
                }
            }
        }
        return false;
    }


    /**
     *  getServiceTechnicalProfile
     *  @param {Object} courseActivitie
     *  @return
     */
    getServiceTechnicalProfile(courseActivitie: any): any {
        const serviceTechnicalProfile = courseActivitie.target.serviceTechnicalProfile;
        const serviceTechnicalProfileData = {
            1: {
                'profile': [
                    {
                        'name': 'desktop',
                        'hardware': '1 Ghz Dual-Core CPU, 2 Gb RAM',
                        'display': '13″ (XGA - 1024x768)',
                        'browser': [
                            'Internet Explorer 9+ (Flash Player 10+)',
                            'Firefox 28+  (Flash Player 10+)',
                            'Chrome 30+  (Flash Player 10+)',
                            'Safari 6.1+  (Flash Player 10+)'
                        ]
                    }
                ]
            },
            2: {
                'profile': [
                    {
                        'name': 'desktop',
                        'hardware': '1 GHz Dual-Core CPU, 2 Gb RAM',
                        'display': '13″ (XGA - 1024x768)',
                        'browser': [
                            'Internet Explorer 9+ (Flash Player 10+)',
                            'Internet Explorer 11+',
                            'Firefox 28+',
                            'Chrome 30+',
                            'Safari 6.1+'
                        ]
                    },
                    {
                        'name': 'mobile',
                        'hardware': '1 GHz Dual-Core CPU, 1 Gb RAM',
                        'display': '7″ (XGA - 1024x768)',
                        'browser': [
                            'Chrome 30+',
                            'Android Browser 4.4+',
                            'iOS Safari 7.1+',
                            'IE Mobile 11+'
                        ]
                    }
                ]
            },
            3: {
                'profile': [
                    {
                        'name': 'desktop',
                        'hardware': '1 GHz Dual-Core CPU, 2 Gb RAM',
                        'display': '13″ (XGA - 1024x768)',
                        'browser': [
                            'Internet Explorer 11+',
                            'Firefox 28+',
                            'Chrome 30+',
                            'Safari 6.1+'
                        ]
                    },
                    {
                        'name': 'mobile',
                        'hardware': '1 GHz Dual-Core CPU, 1 Gb RAM',
                        'display': '7″ (XGA - 1024x768)',
                        'browser': [
                            'Chrome 30+',
                            'Android Browser 4.4+',
                            'iOS Safari 7.1+',
                            'IE Mobile 11+'
                        ]
                    }
                ]
            },
        };

        return serviceTechnicalProfileData[serviceTechnicalProfile];
    }


    /**
     *  getMinimumTime
     *  @param {Object} courseActivitie
     *  @return
     */
    getMinimumTime(courseActivitie: any): any {
        const minimumTime = courseActivitie.target.requirement.minimumTime;
        return minimumTime ? minimumTime : 0;
    }

    /**
     *  getLicenseNetTimeLimit
     *  @param {Object} courseRegistration
     *  @return {Object}
     */
    getLicenseNetTimeLimit(courseRegistration: any): any {

        const licenseGrossTimeLimitDate = courseRegistration.licenseGrossTimeLimitDate;
        const licenseTimeSpentInThisPeriod = courseRegistration.licenseTimeSpentInThisPeriod;
        const licenseNetTimeLimit = courseRegistration.licenseNetTimeLimit;
        const timeUsedNumber = parseInt(licenseTimeSpentInThisPeriod, 10);
        const timeAvailableNumber = parseInt(licenseNetTimeLimit, 10);

        return {
            isShow: !!licenseGrossTimeLimitDate || !!licenseTimeSpentInThisPeriod,
            timeUsedNumber: timeUsedNumber,
            timeAvailableNumber: timeAvailableNumber,
            // text: timeUsed,
        };
    }


    /**
     *  getLicenseGrossTimeLimit
     *  @param {Object} courseRegistration
     *  @return {Object}
     */
    getLicenseGrossTimeLimit(courseRegistration: any): any {
        const licenseGrossTimeLimitDate = courseRegistration.licenseGrossTimeLimitDate;
        const licenseTimeSpentInThisPeriod = courseRegistration.licenseTimeSpentInThisPeriod;
        const hasTimeLimit = !!licenseGrossTimeLimitDate && !this.isValideDate(licenseGrossTimeLimitDate);
        const value = hasTimeLimit ? this.formatDay(licenseGrossTimeLimitDate) : this.translate('lbl_unlimited');
        return {
            isShow: !!licenseGrossTimeLimitDate || !!licenseTimeSpentInThisPeriod,
            dateValue: value,
        };
    }


    /**
     *  getOrganizationName
     *  @param {Object} invitation
     *  @return
     */
    getOrganizationName(invitation) {
        const organizationName = invitation.organization;
        return organizationName ? organizationName.name : this.translate('txt_not_exists');
    }


    /*   /!**
        *  getGrossTimeLimit
        *  @param {Object} courseActivitie
        *  @return
        *!/
       getGrossTimeLimit(courseActivitie) {
           const grossTimeLimit = courseActivitie.target.requirement.grossTimeLimit;
           return grossTimeLimit ? grossTimeLimit : '';
       }*/

    /**
     *  getResultEndDateToolTip
     *  @param {Object} courseActivitie
     *  @return
     */

    /*    getResultEndDateToolTip(courseActivitie) {
            const resultEndDate = courseActivitie.target.requirement.resultEndDate;
            if (resultEndDate.split('-')[0] === '9999') {
                console.log('9999');
               console.log()
            } else {
                // console.log('normaé darte', this.formatDay(resultEndDate));
                return this.formatDay(resultEndDate);

            }
            // console.log(this.isValideDate(resultEndDate))
            // return resultEndDate ? resultEndDate : '';
        }*/

    /**
     *  getCourseResultStartDate
     *  @param {Object} courseObject
     *  @return
     */
    getCourseResultStartDate(courseObject) {
        const resultStartDate = courseObject.requirement.resultStartDate;
        if (this.isValideDate(resultStartDate)) {
            return this.translate('txt_not_specified');
        }
        return resultStartDate ? this.formatDay(resultStartDate) : this.translate('txt_not_specified');
    }

    /**
     *  getCourseResultEndDate
     *  @param {Object} courseObject
     *  @return
     */
    getCourseResultEndDate(courseObject) {
        const resultStartDate = courseObject.requirement.resultEndDate;
        if (this.isValideDate(resultStartDate)) {
            return this.translate('txt_not_specified');
        }
        return resultStartDate ? this.formatDay(resultStartDate) : this.translate('txt_not_specified');
    }

    /**
     *  getResultStartDate
     *  @param {Object} courseActivities
     *  @return
     */
    getResultStartDate(courseActivities: any): any {
        const resultStartDate = courseActivities.target.requirement.resultStartDate;
        const IsResultStartDate = resultStartDate ? resultStartDate.split('-')[0] : undefined;
        const isSetTime = (date) => {
            if (date > 2000 && date < 9000) {
                return true;
            } else {
                return false;
            }
        };
        if (IsResultStartDate && isSetTime(IsResultStartDate)) {
            return this.formatDay(resultStartDate);
        }
        return this.translate('txt_not_exists');

    }

    /**
     *  getResultEndDate
     *  @param {Object} courseActivities
     *  @return
     */
    getResultEndDate(courseActivities: any): any {
        const resultEndDate = courseActivities.target.requirement.resultEndDate;
        const IsResultStartDate = resultEndDate ? resultEndDate.split('-')[0] : undefined;
        const isSetTime = (date) => {
            if (date > 2000 && date < 9000) {
                return true;
            } else {
                return false;
            }
        };
        if (IsResultStartDate && isSetTime(IsResultStartDate)) {
            return this.formatDay(resultEndDate);
        }
        return this.translate('txt_not_exists');
    }

    /**
     *  getNetTimeLimit
     *  @param {Object} courseObject
     *  @return
     */
    getNetTimeLimit(courseObject: any) {
        const netTimeLimit = courseObject.requirement.netTimeLimit;
        return netTimeLimit;
    }

    /**
     *  getCourseSuggestedTime
     *  @param {Object} courseObject
     *  @return
     */
    getCourseSuggestedTime(courseObject: any) {
        const suggestedTime = courseObject.requirement.suggestedTime;
        return suggestedTime;
    }

    /**
     *  getExpirationTime
     *  @param {Object} course
     *  @return
     */
    getExpirationTime(course: any) {
        const invitation = course.invitation;
        const registration = course.registration;
        const exparitation = invitation ? invitation.expiration : undefined;
        const endDate = registration ? registration.endDate : undefined;
        const isEpxDate = exparitation ? exparitation.split('-')[0] : undefined;
        const isEnd = endDate ? endDate.split('-')[0] : undefined;

        const isSetTime = (date) => {
            if (date === undefined) {
                date = 0;
            }

            if (date > 2000 && date < 9000) {
                return true;
            } else {
                return false;
            }
        };


        if (isSetTime(isEpxDate)) {
            return this.formatDay(exparitation);
        }
        if (!isSetTime(isEpxDate) && isSetTime(isEnd)) {
            return this.formatDay(endDate);

        }
        return this.translate('txt_not_specified');
    }


    /**
     *  getCourseDescription
     *  @param {Object} course
     *  @return
     */
    getCourseDescription(course: any) {
        const description = course.description;
        return description;
    }


    /* -------- Utilz -------- */

    /**
     *  translate
     *  @param {String} transletValue
     *  @return {String} transletValue
     */
    translate(transletValue: string, transletValueParam?: any): string {
        return this.l10nService.translate(transletValue, transletValueParam);
    }

    /**
     *  getLineStatus
     *  @param {number} isCompleted
     *  @param {number} status
     *  @return {}
     */
    getLineStatus(isCompleted: any, status: any, courseState?: any) {
        if (isCompleted === true) {
            return true;
        }
        if (!isCompleted && status === 7 || courseState === 5) {
            return false;
        }
        return null;
    }

    /**
     *  isValideDate
     *  @param {string} value
     *  @return {boolean}
     */
    isValideDate(value): boolean {
        return value.split('-')[0] === '9999' || value.split('-')[0] === '1753';
    }

    /**
     *  isValideDate
     *  @param {string} date
     *  @return {string}
     */
    formatDay(date): string {
        return moment(date).format('YYYY.MM.DD.');
    }

    /**
     *  dateValue
     *  @param {string} date
     *  @return {string}
     */
    dateValue(date): any {
        if (date) {
            return moment.utc(date).toDate().valueOf();
        } else {
            return null;
        }
    }


    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */
    /* ------------------------------------------- */


    /*
    * Status Button
    * */
    getStatusButton(value) {
        const className = {
            '1': 'btn-icon hourglass_icon',
            '2': 'btn-icon play glyphicon glyphicon-play',
            '3': 'btn-icon pending',
            '4': 'btn-icon pending',
            '5': 'btn-icon pending',
            '6': 'btn-icon success glyphicon glyphicon-ok',
            '7': 'btn-icon unsuccessful glyphicon glyphicon-remove',
            'severity_0': 'btn-icon',
            'severity_1': 'btn-icon airship_icon',
            'severity_2': 'btn-icon apple_icon',
            'severity_3': 'btn-icon envelope glyphicon glyphicon-envelope',
            'severity_4': 'btn-icon envelope fire_icon',
            'severity_5': 'btn-icon envelope airship_icon',
        };
        return className[value];
    }


    /*
    * Status
    * */

    /* ContractStatus:
         Unknown = 0
         None = 1
         Rejected = 2
         Required = 3
         Pending = 4
         Accepted = 5
         Failed = 6
                         */
    getState(value) {
        const stateParam = {
            '1': 'invited',
            '2': 'open',
            '3': 'inactive',
            '4': 'active',
            '5': 'closed',
        };
        return stateParam[value];
    }

    /*
    * Course Deatail Dead Line Label Text
    *
    * */

    getDetialDeadLabelText(stateParam) {
        if (stateParam === 5) {
            return 'lbl_closed_date';
        } else {
            return 'lbl_deadline_colon';
        }
    }

    /*
    * getPrerequisiteText // Előfelvétel
    *
    * */

    getPrerequisiteText(prerequisite) {
        if (prerequisite.length) {
            return prerequisite[0].targetTitle;
        }
        return this.l10nService.translate('txt_not_exists');
    }

    /*
    * DeadLine
    * */
    getDeadLine_(value) {
        if (!value) {
            return this.l10nService.translate('txt_after_first_launch');
        } else if (value.split('-')[0] === '9999') {
            return this.l10nService.translate('txt_not_exists');
        }
        return moment(value).format('YYYY.MM.DD.');
    }

    getRequiredText(requiredFor) {
        if (requiredFor === true) {
            return this.l10nService.translate('lbl_required_for_satisfied');
        }
        return this.l10nService.translate('lbl_not_required_for_satisfied');
    }

    // TODO LINKS object dinamikus átalaktása
    /* getLaunchButton(links, state, course) {
         if (links.length && state === 5) {
             if (links[0].rel == 'Launch') {
                 return {
                     icon: 'btn-icon fa fa-exclamation-triangle',
                     className: 'launch_warning'
                 }
             }
         }
         /!* TODO: Migrationra rákérdezni és normálisan megcsinálni ezt a feltételt *!/
         if (links.length && state !== 5) {
             if (links[0].rel == 'Launch' && links[0].rel !== 'Migration') {
                 if (!course.target.disturbingContent) {
                     return {
                         className: 'launch_origin'
                     }
                 }
                 if (course.target.disturbingContent) {
                     return {
                         icon: 'btn-icon fa fa-exclamation-triangle',
                         className: 'launch_warning'
                     }
                 }
             }
         }

         /!*   if (links.length && state !== 5) {
                if (links[0].rel == 'Launch' && links[1].rel == 'Migration') {
                    return {
                        icon: 'btn-icon warning',
                        className: 'launch_warning'
                    }
                }
            }*!/

         return false;
     }*/


    /* getResultStartDate(resultStartDate) {
         const IsResultStartDate = resultStartDate ? resultStartDate.split('-')[0] : undefined;
         const isSetTime = (date) => {
             if (date > 2000 && date < 9000) {
                 return true;
             } else {
                 return false;
             }
         };


         if (IsResultStartDate && isSetTime(IsResultStartDate)) {
             return moment(IsResultStartDate).format('YYYY.MM.DD.')
         }
         return this.l10nService.translate('txt_not_exists');
     }*/


    /*getExpiration(exparitation, endDate) {
        const isEpxDate = exparitation ? exparitation.split('-')[0] : undefined;
        const isEnd = endDate ? endDate.split('-')[0] : undefined;

        const isSetTime = (date) => {
            if (date === undefined) {
                date = 0;
            }

            if (date > 1999 && date < 9000) {
                return true;
            } else {
                return false;
            }
        };


        if (isSetTime(isEpxDate)) {
            return moment(isEpxDate).format('YYYY.MM.DD.');
        }
        if (!isSetTime(isEpxDate) && isSetTime(isEnd)) {
            return moment(isEnd).format('YYYY.MM.DD.');

        }
        return this.l10nService.translate('txt_not_specified');
    }*/

    getLink(value: any, rule ?: any) {
        if (value && value.length) {
            const linkData = [];
            value.forEach((data, key) => {
                linkData.push({
                    'rel': data.rel,
                    'href': data.href,
                    'label': data.label,
                    'tooltip': data.tooltip,
                    'target': data.target
                });
            });
            return linkData;
        }
        return [];
    }
}
