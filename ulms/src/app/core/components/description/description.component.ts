import { Component, OnInit, Input } from '@angular/core';
import { CourseResultDetail } from '../../../services/course-result-detail';

@Component({
    selector: 'ulms-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
    @Input() className;
    @Input() description: any;
    @Input() descriptionData: any;
    public isOpen = false;
    public resultDetailActivities = [];

    constructor(private courseResultDetailService: CourseResultDetail) {}
    ngOnInit() {}

    textToggle() {
        this.isOpen = !this.isOpen;
    }

    getResultDetailActivities(link) {
        if(!this.isOpen){
            const url = link.href;
            this.courseResultDetailService.getCourseResultDetail(url).then(
                (result) => {
                    if(result){
                        this.transformCourseResultDetail(result);
                    }
                    this.isOpen = true;
                },
                error => error
            );
        }else{
            this.isOpen = false;
        }
    }

    transformCourseResultDetail(data) {
        const activities = data.Activities;
        const activitiesContent = [];
        activities.forEach((item) => {
            if (item.IsSCO) {
                const activitie = item;
                const completionAmount = activitie.CompletionAmount ? activitie.CompletionAmount * 100 : 0;
                const scoreUnformatted = activitie.ScoreUnformatted ? activitie.ScoreUnformatted * 100 : 0;
                activitiesContent.push({
                    title: activitie.Title, // Lecke címe
                    completionAmount: completionAmount, // Előre haladás
                    scoreUnformatted: scoreUnformatted, // Teszt eredmény
                    timeTaken: activitie.TimeTaken, // Eltöltött idő
                });
            }
        });
        this.resultDetailActivities = activitiesContent;
    }
}
