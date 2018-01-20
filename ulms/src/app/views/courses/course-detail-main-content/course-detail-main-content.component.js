"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CourseDetailContentItemComponent = /** @class */ (function () {
    function CourseDetailContentItemComponent(commonService) {
        this.commonService = commonService;
    }
    CourseDetailContentItemComponent.prototype.ngOnChanges = function () {
        this.currentItemData = this.transFormViewObject(this.itemData);
    };
    CourseDetailContentItemComponent.prototype.transFormViewObject = function (itemData) {
        var _this = this;
        var courseDetailView = [];
        var course = itemData;
        var courseActivities = course.courseActivities;
        var courseRegistration = course.courseRegistration;
        courseActivities.forEach(function (item) {
            if (!item.target.parent) {
                var courseActivitie = item;
                courseDetailView.push({
                    title: _this.commonService.getTitle(course),
                    label: _this.commonService.getLabel(course),
                    providerName: _this.commonService.getProviderName(course),
                    imageUrl: _this.commonService.getImageUrl(course),
                    status: _this.commonService.getActivityStatus(courseActivitie),
                    links: _this.commonService.getLinks(courseActivitie),
                    courseProgressStatus: _this.commonService.getCourseProgressStatus(courseActivitie),
                    courseMeasureStatus: _this.commonService.getCourseMeasureStatus(courseActivitie),
                    deadLine: _this.commonService.getDeadLine(courseActivitie),
                    totalTime: _this.commonService.getTotalTime(courseActivitie),
                    minimumTime: _this.commonService.getMinimumTime(courseActivitie),
                    registrationDate: _this.commonService.getRegistrationDate(courseRegistration),
                    licenseNetTimeLimit: _this.commonService.getLicenseNetTimeLimit(courseRegistration),
                    licenseGrossTimeLimit: _this.commonService.getLicenseGrossTimeLimit(courseRegistration),
                });
            }
        });
        return courseDetailView;
    };
    __decorate([
        core_1.Input()
    ], CourseDetailContentItemComponent.prototype, "itemData", void 0);
    CourseDetailContentItemComponent = __decorate([
        core_1.Component({
            selector: 'ulms-course-detail-content-item',
            templateUrl: './course-detail-content-item.component.html',
            styleUrls: ['../course-detail.component.scss']
        })
    ], CourseDetailContentItemComponent);
    return CourseDetailContentItemComponent;
}());
exports.CourseDetailContentItemComponent = CourseDetailContentItemComponent;
