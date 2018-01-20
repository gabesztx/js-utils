"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var link_model_1 = require("../../models/link.model");
var courseActivity_model_1 = require("../../models/courseActivity.model");
var moment = require("moment");
var CommonService = /** @class */ (function () {
    function CommonService(l10nService) {
        this.l10nService = l10nService;
    }
    /**
     *  getTitle
     *  @param {Object} course
     *  @return {String}
     */
    CommonService.prototype.getTitle = function (course) {
        return course.title;
    };
    /**
     *  getImageUrl
     *  @param {Object} course
     *  @return {String} imageUrl
     */
    CommonService.prototype.getImageUrl = function (course) {
        var imageUrl = course.imageUrl;
        var urlPath = window.env === 'serv' ? '/Content/client/assets/images/suitcase_big_icon.png' : '/assets/images/suitcase_big_icon.png';
        return imageUrl.length ? imageUrl : urlPath;
    };
    /**
     *  getLabel
     *  @param {Object} course
     *  @return {String}
     */
    CommonService.prototype.getLabel = function (course) {
        return course.label;
    };
    /**
     *  getProviderName
     *  @param {Object} course
     *  @return {String} provider name
     */
    CommonService.prototype.getProviderName = function (course) {
        var provider = course.provider;
        return provider ? provider.name : '';
    };
    /**
     *  getPrerequisite
     *  @param {Object} courseActivitie target
     *  @return {String} prerequisite
     */
    CommonService.prototype.getPrerequisite = function (courseActivitie) {
        var prerequisite = courseActivitie.prerequisite;
        if (prerequisite.length) {
            return prerequisite[0].targetTitle;
        }
        return this.translate('txt_not_exists');
    };
    /**
     *  getCourseProgress
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    CommonService.prototype.getCourseProgressStatus = function (courseActivitie) {
        var status = courseActivitie.status ? courseActivitie.status : 0;
        var progress = courseActivitie.result.progress ? courseActivitie.result.progress : 0;
        var lineValue = progress ? Math.round(progress * 100) : 0;
        var requiredForCompleted = courseActivitie.target.requirement.requiredForCompleted;
        var requiredText = requiredForCompleted ? 'lbl_required_for_satisfied' : 'lbl_not_required_for_satisfied';
        return {
            'value': lineValue,
            'statusIcon': this.getLineStatus(progress, status),
            'requiredText': this.translate(requiredText),
        };
    };
    /**
     *  getCourseMeasure
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    CommonService.prototype.getCourseMeasureStatus = function (courseActivitie) {
        var status = courseActivitie.status ? courseActivitie.status : 0;
        var measure = courseActivitie.result.measure;
        var lineValue = measure ? Math.round(measure * 100) : 0;
        var requiredForSatisfied = courseActivitie.target.requirement.requiredForSatisfied;
        var requiredText = requiredForSatisfied ? 'lbl_required_for_satisfied' : 'lbl_not_required_for_satisfied';
        return {
            'value': lineValue,
            'statusIcon': this.getLineStatus(measure, status),
            'requiredText': this.translate(requiredText),
        };
    };
    /**
     *  getDeadLine
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    CommonService.prototype.getDeadLine = function (courseActivitie) {
        var resultEndTime = courseActivitie.result.resultEndTime;
        var state = courseActivitie.state ? courseActivitie.state : 0;
        var textLabel = state === courseActivity_model_1.CourseState.Closed ? this.translate('lbl_closed_date') : this.translate('lbl_deadline_colon');
        var value = this.formatDay(resultEndTime);
        if (!resultEndTime) {
            value = this.translate('txt_after_first_launch');
        }
        if (resultEndTime && this.isValideDate(resultEndTime)) {
            value = this.translate('txt_not_exists');
        }
        return {
            value: value,
            textLabel: textLabel,
        };
    };
    /**
     *  getTotalTime
     *  @param {Object} courseActivitie
     *  @return {String}
     */
    CommonService.prototype.getTotalTime = function (courseActivitie) {
        var totalTime = courseActivitie.result ? courseActivitie.result.totalTime : 0;
        var netTimeLimit = courseActivitie.target ? courseActivitie.target.requirement.netTimeLimit : 0;
        return {
            'value': totalTime,
            'netTimeLimit': netTimeLimit,
        };
    };
    /**
     *  getResultEndDate
     *  @param {Object} courseActivitie
     *  @return {String}
     */
    CommonService.prototype.getResultEndDate = function (courseActivitie) {
        var totalTime = courseActivitie.result ? courseActivitie.result.totalTime : 0;
        var netTimeLimit = courseActivitie.target ? courseActivitie.target.requirement.netTimeLimit : 0;
        return {
            'value': totalTime,
            'netTimeLimit': netTimeLimit,
        };
    };
    /**
     *  getActivityStatus
     *  @param {Object} courseActivitie
     *  @return {Object}
     */
    CommonService.prototype.getActivityStatus = function (courseActivitie) {
        var status = courseActivitie.status ? courseActivitie.status : 0;
        var ICON_NAME = {
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
    };
    /**
     *  getRecommendedStatus
     *  @param {Object} invitation
     *  @return {Object}
     */
    CommonService.prototype.getRecommendedStatus = function (invitation) {
        var severity = invitation.severity ? invitation.severity : 0;
        var ICON_NAME = {
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
    };
    /**
     *  getLinks
     *  @param {Object} courseActivitie
     *  @return {Array}
     */
    CommonService.prototype.getLinks = function (courseActivitie) {
        var linkData = [];
        var links = courseActivitie.links ? courseActivitie.links : [];
        var linksLabel = (_a = {},
            _a[link_model_1.LinkRel.ACCEPT] = 'accept',
            _a[link_model_1.LinkRel.REJECT] = 'lnk_reject',
            _a[link_model_1.LinkRel.CERTIFICATEALL] = 'lnk_download_certificate_zip',
            _a[link_model_1.LinkRel.CERTIFICATE] = 'lnk_download_certificate_pdf',
            _a[link_model_1.LinkRel.CONTRACTAll] = 'btn_download_contract_zip',
            _a[link_model_1.LinkRel.CONTRACT] = 'btn_download_contract_pdf',
            _a[link_model_1.LinkRel.LICENSEDOCUMENTALL] = '',
            _a[link_model_1.LinkRel.LICENSEDOCUMENT] = '',
            _a);
        if (links.length) {
            links.forEach(function (link) {
                if (linksLabel.hasOwnProperty(link.rel)) {
                    link.dropDownItemLabel = linksLabel[link.rel];
                    linkData.push(link);
                }
            });
        }
        return linkData;
        var _a;
        //TODO: licenseDocumentTypeKey megvizsgálni
        /* if ($scope.linkObjects.LicenseDocumentAll && $scope.licenseDocumentTypeKey) {
                $scope.linkObjects.LicenseDocumentAll.label = $scope.t({ label: 'lnk_download_' + $scope.licenseDocumentTypeKey + '_zip' });
                links.push($scope.linkObjects.LicenseDocumentAll);
            }

            // License link (pdf)
            if ($scope.linkObjects.LicenseDocument && $scope.licenseDocumentTypeKey) {
                $scope.linkObjects.LicenseDocument.label = $scope.t({ label: 'lnk_download_' + $scope.licenseDocumentTypeKey + '_pdf' });
                links.push($scope.linkObjects.LicenseDocument);
            }
     */
    };
    /**
     *  getRegistrationDate
     *  @param {Object} courseRegistration
     *  @return
     */
    CommonService.prototype.getRegistrationDate = function (courseRegistration) {
        var registrationDate = courseRegistration.registrationDate;
        if (this.isValideDate(registrationDate)) {
            return this.translate('txt_not_specified');
        }
        return registrationDate ? this.formatDay(registrationDate) : this.translate('txt_not_specified');
    };
    /**
     *  getSuggestedTime
     *  @param {Object} courseActivitie
     *  @return
     */
    CommonService.prototype.getSuggestedTime = function (courseActivitie) {
        var suggestedTime = courseActivitie.target.requirement.suggestedTime;
        return suggestedTime ? suggestedTime : 0;
    };
    /**
     *  getDescription
     *  @param {Object} courseActivitie
     *  @return
     */
    CommonService.prototype.getDescription = function (courseActivitie) {
        var description = courseActivitie.target.description;
        return description;
    };
    /**
     *  getLaunchButton
     *  @param {Object} courseActivitie
     *  @return
     */
    CommonService.prototype.getLaunchButton = function (courseActivitie) {
        var links = courseActivitie.links ? courseActivitie.links : [];
        var state = courseActivitie.state ? courseActivitie.state : 0;
        if (links.length && state === courseActivity_model_1.CourseState.Closed) {
            if (links[0].rel === 'Launch') {
                return {
                    icon: 'btn-icon fa fa-exclamation-triangle',
                    className: 'launch_warning'
                };
            }
        }
        /* TODO: Migrationra rákérdezni és normálisan megcsinálni ezt a feltételt */
        if (links.length && state !== courseActivity_model_1.CourseState.Closed) {
            if (links[0].rel === 'Launch' && links[0].rel !== 'Migration') {
                if (!courseActivitie.target.disturbingContent) {
                    return {
                        className: 'launch_origin'
                    };
                }
                if (courseActivitie.target.disturbingContent) {
                    return {
                        icon: 'btn-icon fa fa-exclamation-triangle',
                        className: 'launch_warning'
                    };
                }
            }
        }
        /*   if (links.length && state !== 5) {
        if (links[0].rel == 'Launch' && links[1].rel == 'Migration') {
            return {
                icon: 'btn-icon warning',
                className: 'launch_warning'
            }
        }
         */
        return false;
    };
    /**
     *  getServiceTechnicalProfile
     *  @param {Object} courseActivitie
     *  @return
     */
    CommonService.prototype.getServiceTechnicalProfile = function (courseActivitie) {
        var serviceTechnicalProfile = courseActivitie.target.serviceTechnicalProfile;
        var serviceTechnicalProfileData = {
            1: {
                "profile": [
                    {
                        "name": "desktop",
                        "hardware": "1 Ghz Dual-Core CPU, 2 Gb RAM",
                        "display": "13″ (XGA - 1024x768)",
                        "browser": [
                            "Internet Explorer 9+ (Flash Player 10+)",
                            "Firefox 28+  (Flash Player 10+)",
                            "Chrome 30+  (Flash Player 10+)",
                            "Safari 6.1+  (Flash Player 10+)"
                        ]
                    }
                ]
            },
            2: {
                "profile": [
                    {
                        "name": "desktop",
                        "hardware": "1 GHz Dual-Core CPU, 2 Gb RAM",
                        "display": "13″ (XGA - 1024x768)",
                        "browser": [
                            "Internet Explorer 9+ (Flash Player 10+)",
                            "Internet Explorer 11+",
                            "Firefox 28+",
                            "Chrome 30+",
                            "Safari 6.1+"
                        ]
                    },
                    {
                        "name": "mobile",
                        "hardware": "1 GHz Dual-Core CPU, 1 Gb RAM",
                        "display": "7″ (XGA - 1024x768)",
                        "browser": [
                            "Chrome 30+",
                            "Android Browser 4.4+",
                            "iOS Safari 7.1+",
                            "IE Mobile 11+"
                        ]
                    }
                ]
            },
            3: {
                "profile": [
                    {
                        "name": "desktop",
                        "hardware": "1 GHz Dual-Core CPU, 2 Gb RAM",
                        "display": "13″ (XGA - 1024x768)",
                        "browser": [
                            "Internet Explorer 11+",
                            "Firefox 28+",
                            "Chrome 30+",
                            "Safari 6.1+"
                        ]
                    },
                    {
                        "name": "mobile",
                        "hardware": "1 GHz Dual-Core CPU, 1 Gb RAM",
                        "display": "7″ (XGA - 1024x768)",
                        "browser": [
                            "Chrome 30+",
                            "Android Browser 4.4+",
                            "iOS Safari 7.1+",
                            "IE Mobile 11+"
                        ]
                    }
                ]
            },
        };
        return serviceTechnicalProfileData[serviceTechnicalProfile];
    };
    /**
     *  getMinimumTime
     *  @param {Object} courseActivitie
     *  @return
     */
    CommonService.prototype.getMinimumTime = function (courseActivitie) {
        var minimumTime = courseActivitie.target.requirement.minimumTime;
        return minimumTime ? minimumTime : 0;
    };
    /**
     *  getLicenseNetTimeLimit
     *  @param {Object} courseRegistration
     *  @return {Object}
     */
    CommonService.prototype.getLicenseNetTimeLimit = function (courseRegistration) {
        var licenseGrossTimeLimitDate = courseRegistration.licenseGrossTimeLimitDate;
        var licenseTimeSpentInThisPeriod = courseRegistration.licenseTimeSpentInThisPeriod;
        var licenseNetTimeLimit = courseRegistration.licenseNetTimeLimit;
        var timeUsedNumber = parseInt(licenseTimeSpentInThisPeriod, 10);
        var timeAvailableNumber = parseInt(licenseNetTimeLimit, 10);
        return {
            isShow: !!licenseGrossTimeLimitDate || !!licenseTimeSpentInThisPeriod,
            timeUsedNumber: timeUsedNumber,
            timeAvailableNumber: timeAvailableNumber,
        };
    };
    /**
     *  getLicenseGrossTimeLimit
     *  @param {Object} courseRegistration
     *  @return {Object}
     */
    CommonService.prototype.getLicenseGrossTimeLimit = function (courseRegistration) {
        var licenseGrossTimeLimitDate = courseRegistration.licenseGrossTimeLimitDate;
        var licenseTimeSpentInThisPeriod = courseRegistration.licenseTimeSpentInThisPeriod;
        var hasTimeLimit = !!licenseGrossTimeLimitDate && !this.isValideDate(licenseGrossTimeLimitDate);
        var value = hasTimeLimit ? this.formatDay(licenseGrossTimeLimitDate) : this.translate('lbl_unlimited');
        return {
            isShow: !!licenseGrossTimeLimitDate || !!licenseTimeSpentInThisPeriod,
            dateValue: value,
        };
    };
    /**
     *  getOrganizationName
     *  @param {Object} invitation
     *  @return
     */
    CommonService.prototype.getOrganizationName = function (invitation) {
        var organizationName = invitation.organization;
        return organizationName ? organizationName.name : this.translate('txt_not_exists');
    };
    /**
     *  getResultStartDate
     *  @param {Object} courseObject
     *  @return
     */
    CommonService.prototype.getCourseResultStartDate = function (courseObject) {
        var resultStartDate = courseObject.requirement.resultStartDate;
        if (this.isValideDate(resultStartDate)) {
            return this.translate('txt_not_specified');
        }
        return resultStartDate ? this.formatDay(resultStartDate) : this.translate('txt_not_specified');
    };
    /**
     *  getResultStartDate
     *  @param {Object} courseRegistration
     *  @return
     */
    CommonService.prototype.getResultStartDate = function (courseRegistration) {
        var resultStartDate = courseRegistration.target.requirement.resultStartDate;
        var IsResultStartDate = resultStartDate ? resultStartDate.split('-')[0] : undefined;
        var isSetTime = function (date) {
            if (date > 2000 && date < 9000) {
                return true;
            }
            else {
                return false;
            }
        };
        if (IsResultStartDate && isSetTime(IsResultStartDate)) {
            return this.formatDay(IsResultStartDate);
        }
        return this.translate('txt_not_exists');
    };
    // /**
    //  *  getResultEndDate
    //  *  @param {Object} courseObject
    //  *  @return
    //  */
    // getResultEndDate(courseObject: any) {
    //     const resultEndDate = courseObject.requirement.resultEndDate;
    //     if (this.isValideDate(resultEndDate)) {
    //         return this.translate('txt_not_specified');
    //     }
    //     return resultEndDate ? this.formatDay(resultEndDate) : this.translate('txt_not_specified');
    // }
    /**
     *  getNetTimeLimit
     *  @param {Object} courseObject
     *  @return
     */
    CommonService.prototype.getNetTimeLimit = function (courseObject) {
        var netTimeLimit = courseObject.requirement.netTimeLimit;
        return netTimeLimit;
    };
    /**
     *  getCourseSuggestedTime
     *  @param {Object} courseObject
     *  @return
     */
    CommonService.prototype.getCourseSuggestedTime = function (courseObject) {
        var suggestedTime = courseObject.requirement.suggestedTime;
        return suggestedTime;
    };
    /**
     *  getExpirationTime
     *  @param {Object} course
     *  @return
     */
    CommonService.prototype.getExpirationTime = function (course) {
        var invitation = course.invitation;
        var registration = course.registration;
        var exparitation = invitation ? invitation.expiration : undefined;
        var endDate = registration ? registration.endDate : undefined;
        var isEpxDate = exparitation ? exparitation.split('-')[0] : undefined;
        var isEnd = endDate ? endDate.split('-')[0] : undefined;
        var isSetTime = function (date) {
            if (date === undefined) {
                date = 0;
            }
            if (date > 2000 && date < 9000) {
                return true;
            }
            else {
                return false;
            }
        };
        if (isSetTime(isEpxDate)) {
            return this.formatDay(isEpxDate);
        }
        if (!isSetTime(isEpxDate) && isSetTime(isEnd)) {
            return this.formatDay(isEnd);
        }
        return this.translate('txt_not_exists');
    };
    /**
     *  getCourseDescription
     *  @param {Object} course
     *  @return
     */
    CommonService.prototype.getCourseDescription = function (course) {
        var description = course.description;
        return description;
    };
    /* -------- Utilz -------- */
    /**
     *  translate
     *  @param {String} transletValue
     *  @return {String} transletValue
     */
    CommonService.prototype.translate = function (transletValue) {
        return this.l10nService.translate(transletValue);
    };
    /**
     *  getLineStatus
     *  @param {number} value
     *  @param {number} status
     *  @return {}
     */
    CommonService.prototype.getLineStatus = function (value, status) {
        if (value === true) {
            return true;
        }
        if (!value && status === 7) {
            return false;
        }
        return null;
    };
    /**
     *  isValideDate
     *  @param {string} value
     *  @return {boolean}
     */
    CommonService.prototype.isValideDate = function (value) {
        // return value.split('-')[0] === '9999';
        return value.split('-')[0] === '9999' || value.split('-')[0] === '1753';
    };
    /**
     *  isValideDate
     *  @param {string} date
     *  @return {string}
     */
    CommonService.prototype.formatDay = function (date) {
        return moment(date).format('YYYY.MM.DD.');
    };
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
    CommonService.prototype.getStatusButton = function (value) {
        var className = {
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
    };
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
    CommonService.prototype.getState = function (value) {
        var stateParam = {
            '1': 'invited',
            '2': 'open',
            '3': 'inactive',
            '4': 'active',
            '5': 'closed',
        };
        return stateParam[value];
    };
    /*
    * Course Deatail Dead Line Label Text
    *
    * */
    CommonService.prototype.getDetialDeadLabelText = function (stateParam) {
        if (stateParam === 5) {
            return 'lbl_closed_date';
        }
        else {
            return 'lbl_deadline_colon';
        }
    };
    /*
    * getPrerequisiteText // Előfelvétel
    *
    * */
    CommonService.prototype.getPrerequisiteText = function (prerequisite) {
        if (prerequisite.length) {
            return prerequisite[0].targetTitle;
        }
        return this.l10nService.translate('txt_not_exists');
    };
    /*
    * DeadLine
    * */
    CommonService.prototype.getDeadLine_ = function (value) {
        if (!value) {
            return this.l10nService.translate('txt_after_first_launch');
        }
        else if (value.split('-')[0] === '9999') {
            return this.l10nService.translate('txt_not_exists');
        }
        return moment(value).format('YYYY.MM.DD.');
    };
    /*
    * Get Result Date
    **/
    CommonService.prototype.getResultDate = function (value) {
        if (this.isValideDate) {
            return this.l10nService.translate('txt_not_specified');
        }
        return value ? moment(value).format('YYYY.MM.DD.') : this.l10nService.translate('txt_not_specified');
    };
    /*
    * getRequiredElementText
    **/
    CommonService.prototype.getRequiredText = function (requiredFor) {
        if (requiredFor === true) {
            return this.l10nService.translate('lbl_required_for_satisfied');
        }
        return this.l10nService.translate('lbl_not_required_for_satisfied');
    };
    /*
    * isShowLunchButton
    **/
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
    CommonService.prototype.getRegistrarOrganizationName = function (value) {
        return value && value.name ? value.name : this.l10nService.translate('txt_not_exists');
    };
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
    CommonService.prototype.getExpiration = function (exparitation, endDate) {
        var isEpxDate = exparitation ? exparitation.split('-')[0] : undefined;
        var isEnd = endDate ? endDate.split('-')[0] : undefined;
        var isSetTime = function (date) {
            if (date === undefined) {
                date = 0;
            }
            if (date > 1999 && date < 9000) {
                return true;
            }
            else {
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
    };
    CommonService.prototype.getLink = function (value, rule) {
        if (value && value.length) {
            var linkData_1 = [];
            value.forEach(function (data, key) {
                linkData_1.push({
                    'rel': data.rel,
                    'href': data.href,
                    'label': data.label,
                    'tooltip': data.tooltip,
                    'target': data.target
                });
            });
            return linkData_1;
        }
        return [];
    };
    CommonService = __decorate([
        core_1.Injectable()
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
