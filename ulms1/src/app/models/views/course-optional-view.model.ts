export interface CourseOptionalView {
    id: string;
    imageUrl: string;
    title: string;
    label: string;
    providerName: any;
    links: any;
    resultStartDate: any;
    resultEndDate: any;
    suggestedTime: any;
    expirationTime: any;
    description: any;
}

export class CourseOptionalViewModel implements CourseOptionalView {
    public id: string;
    public imageUrl: string;
    public title: string;
    public label: string;
    public providerName: string;
    public links: any;
    public resultStartDate: any;
    public resultEndDate: any;
    public netTimeLimit: any;
    public suggestedTime: any;
    public expirationTime: any;
    public description: any;

    constructor() {
    }
}
