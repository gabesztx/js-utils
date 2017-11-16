import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiResponse } from '../../../services/base/http.class';
import { CourseDetailInfoViewModel } from '../../../models/views/course-detail-info-view.model';
import { UserCourseRegistrationModel } from '../../../models/userCourseRegistration.model';
import { ContractStatus, CourseRegistrationShallow } from '../../../models/courseRegistrationShallow.model';
import { CourseActivityModel } from '../../../models/courseActivity.model';
import { CourseObjectModel } from '../../../models/courseObject.model';
import { slideOutInKeyFrameAnimation } from '../../../animations/course-animation';

@Component({
    selector: 'ulms-course-detail-info',
    templateUrl: './course-detail-info.component.html',
    styleUrls: ['./course-detail-info.component.scss'],
    animations: [slideOutInKeyFrameAnimation]
})

export class CourseDetailInfoComponent implements OnDestroy {

    itemData: any;

    public paramsObs: any;
    public contractStatusText: any;

    public currentItemData: any;
    public currentItemListaData: any;
    public currentItemInterval: any;

    constructor(private route: ActivatedRoute) {
        this.paramsObs = this.route.params.subscribe(params => {
            clearInterval(this.currentItemInterval);
            this.contractStatusText = ContractStatus;
            this.itemData = this.route.snapshot.data.responseData.courseDetail;
            this.currentItemData = this.transFormViewObject(this.itemData);
            this.updatePageItem(this.currentItemData);
        });
    }

    ngOnDestroy() {
        this.paramsObs.unsubscribe();
    }

    updatePageItem(currentList: any) {
        let itemNum = 0;
        this.currentItemListaData = [];
        this.currentItemInterval = setInterval(() => {
            if (itemNum === currentList.length - 1) {
                clearInterval(this.currentItemInterval);
            }
            this.currentItemListaData.push(currentList[itemNum]);
            itemNum++;
        }, 100);
    }

    transFormViewObject(data: any): Array<CourseDetailInfoViewModel> {

        const dataArray: Array<CourseDetailInfoViewModel> = [];
        const courses = data;
        const courseObjects = courses.courseObjects;
        const courseActivities = courses.courseActivities;
        const courseRegistration = courses.courseRegistration;

        courseObjects.forEach((courseObject, key) => {
            if (!courseObject.parent) {
                const courseActivitie = courseActivities[key];

                dataArray.push({

                    /* Kuryus szolgáltatója */
                    providerName: courses.provider ? courses.provider.name : '',

                    /* Szerződés státusza */
                    contractStatus: courseRegistration.contractStatus,

                    /* Beírató szervezet */
                    registrarOrganization: courseRegistration.registrarOrganization ? courseRegistration.registrarOrganization.name : '',

                    /* Teljesítés feltétele */
                    requirement: {
                        /* Tananyag bejárása */
                        requiredForCompleted: courseActivitie.target.requirement.requiredForCompleted,
                        /* Sikeres tesztkitöltés */
                        requiredForSatisfied: courseActivitie.target.requirement.requiredForSatisfied
                    },

                    /* Oklevél */
                    certificateEnabled: courses.certificateEnabled,

                    /* Várható tanulási idõ */
                    suggestedTime: courseActivitie.target.requirement.suggestedTime,

                    /*  Akkreditációs szám */
                    accreditationNum: courses.accreditationNum,

                    /*  Leírás */
                    description: courses.description
                })
                // dataArray.push(courseDetailInfo)
            }
        });

        return dataArray;
    }
}

