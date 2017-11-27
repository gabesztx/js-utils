import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailInfoViewModel } from '../../../models/views/course-detail-info-view.model';
import { ContractStatus } from '../../../models/courseRegistrationShallow.model';
import { slideOutInKeyFrameAnimation } from '../../../animations/course-animation';

@Component({
    selector: 'ulms-course-detail-info',
    templateUrl: './course-detail-info.component.html',
    styleUrls: ['./course-detail-info.component.scss'],
    animations: [slideOutInKeyFrameAnimation]
})

export class CourseDetailInfoComponent implements OnDestroy {

    public itemData: any;
    public paramsObs: any;
    public contractStatusText: any;

    public currentItemData: any;
    public currentItemListaData: any;
    public currentItemInterval: any;

    constructor(private route: ActivatedRoute) {
        console.log('CourseDetailInfoComponent')
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

        // const dataArray: Array<CourseDetailInfoViewModel> = [];
        const infoData: Array<any> = [];
        const courses = data;
        const courseState = courses.courseState;
        const courseObjects = courses.courseObjects;
        const courseActivities = courses.courseActivities;
        const courseRegistration = courses.courseRegistration;

        const isCourseObjects = (courseState >= 0 && courseState <= 2 || !courseState);
        const isCourseActivities = (courseState === 3 || courseState === 4 || courseState === 5  && courseActivities.length);
        console.log('isCourseObjects', isCourseObjects)
        console.log('isCourseActivities', isCourseActivities)

        courseObjects.forEach((courseObject, key) => {

            if (!courseObject.parent) {
                const courseActivitie = courseActivities[key];
                infoData.push({

                    /* Kuryus szolgáltatója */
                    providerName: courses.provider ? courses.provider.name : '',

                    /* Szerződés státusza */
                    contractStatus: courseRegistration ? courseRegistration.contractStatus : undefined,

                    /* Beírató szervezet */
                    registrarOrganization: courseRegistration ? courseRegistration.registrarOrganization : undefined,

                    /* Oklevél */
                    certificateEnabled: courses.certificateEnabled,

                    /* Akkreditációs szám */
                    accreditationNum: courses.accreditationNum,

                    /* Leírás */
                    description: courses.description
                });

                if (isCourseObjects) {
                    console.log('courseobj---------------')

                    Object.assign(infoData[0], {
                        /* Teljesítés feltétele */
                        requirement: {
                            /* Tananyag bejárása */
                            requiredForCompleted: courseObject.requirement.requiredForCompleted,
                            /* Sikeres tesztkitöltés */
                            requiredForSatisfied: courseObject.requirement.requiredForSatisfied,
                            /* Várható tanulási idõ */
                            suggestedTime: courseObject.requirement.suggestedTime,
                        },
                    });
                }
                if (isCourseActivities ) {
                    console.log('-----------------aktiv')
                    Object.assign(infoData[0], {
                        /* Teljesítés feltétele */
                        requirement: {
                            /* Tananyag bejárása */
                            requiredForCompleted: courseActivitie.target.requirement.requiredForCompleted,
                            /* Sikeres tesztkitöltés */
                            requiredForSatisfied: courseActivitie.target.requirement.requiredForSatisfied,
                            /* Várható tanulási idõ */
                            suggestedTime: courseActivitie.target.requirement.suggestedTime,
                        },
                    });

                }


            }
        });
        console.log('infoData', infoData);

        return infoData;
    }
}

