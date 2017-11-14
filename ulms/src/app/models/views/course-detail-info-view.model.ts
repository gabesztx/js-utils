export interface CourseDetailInfo {
    providerName: string,
    contractStatus: number,
    registrarOrganization: string,
    requirement: {
        requiredForCompleted: boolean,
        requiredForSatisfied: boolean
    },
    certificateEnabled: boolean,
    suggestedTime: number,
    accreditationNum: number,
    description: string
}

export class CourseDetailInfoViewModel implements CourseDetailInfo {
    public providerName = '';
    public contractStatus: number;
    public registrarOrganization = '';
    public requirement: { requiredForCompleted: boolean | any, requiredForSatisfied: boolean | any };
    public certificateEnabled: boolean | any;
    public suggestedTime: number | any;
    public accreditationNum: number | any;
    public description = '';
    constructor() {}
}
