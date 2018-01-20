export interface CourseUpcomingView {
    title: string;
    label: string;
    id: string;
    providerName: any;
    status: any;
    links: any;
    imageUrl: string;
    organization: any;
    resultStartDate: any;
    resultEndDate: any;
    netTimeLimit: any;
    suggestedTime: any;
    expirationTime: any;
    description: any;
}

export class CourseUpcomingViewModel implements CourseUpcomingView {
    public title: string;
    public label: string;
    public id: string;
    public providerName: string;
    public imageUrl: string;
    public status: any;
    public links: any;
    public organization: any;
    public resultStartDate: any;
    public resultEndDate: any;
    public netTimeLimit: any;
    public suggestedTime: any;
    public expirationTime: any;
    public description: any;

    constructor() {
    }
}
