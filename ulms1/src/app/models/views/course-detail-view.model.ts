export interface CourseDetailView {
    title: string,
    label: string,
    providerName?: any,
    imageUrl?: string,
    courseProgressStatus: any,
    courseMeasureStatus: any
    deadLine: string,
    totalTime: any,
    status: any,
    links: any,
    registrationDate: any,
    minimumTime: any,
    licenseNetTimeLimit?: any,
    licenseGrossTimeLimit?: any,
    prerequisite?: any,
    resultStartDate?: any,
    suggestedTime?: any,
    description?: any,
    launchButton?: any,
    serviceTechnicalProfile?: any,
    grossTimeLimit?: any,
    resultEndDate?: any,

}

export class CourseDetailViewModel implements CourseDetailView {
    public title: string;
    public label: string;
    public providerName?: string;
    public imageUrl?: string;
    public courseProgressStatus: any;
    public courseMeasureStatus: any;
    public deadLine: string;
    public totalTime: any;
    public status: any;
    public links: any;
    public registrationDate: any;
    public minimumTime: any;
    public licenseNetTimeLimit?: any;
    public licenseGrossTimeLimit?: any;
    public prerequisite?: any;
    public resultStartDate?: any;
    public suggestedTime?: any;
    public description?: any;
    public launchButton?: any;
    public serviceTechnicalProfile?: any;
    public grossTimeLimit?: any;
    public resultEndDate?: any;

    constructor() {}
}
