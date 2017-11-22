export interface CourseActiveView {
    title: string;
    label: string;
    id: string;
    providerName: any;
    imageUrl: string;
    courseProgressStatus: any;
    courseMeasureStatus: any;
    deadLine: string;
    totalTime: any;
    status: any;
    links: any;
    resultEndDate: any;
    grossTimeLimit: any;

}

export class CourseActiveViewModel implements CourseActiveView {
    public title: string;
    public label: string;
    public id: string;
    public providerName: string;
    public imageUrl: string;
    public courseProgressStatus: any;
    public courseMeasureStatus: any;
    public deadLine: string;
    public totalTime: any;
    public status: any;
    public links: any;
    public resultEndDate: any;
    public grossTimeLimit: any;

    constructor() {
    }
}
