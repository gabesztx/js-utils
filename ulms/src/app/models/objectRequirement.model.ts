import { Base, BaseModel } from './base/base.model';

export enum RollupMethod {
    Unknown,
    None,
    Default
}

export enum GrossLimitBase {
    Unknown,
    FirstAttempt,
    Registration
}

export interface ObjectRequirement extends Base {
    resultStartDate: string;
    resultEndDate: string;
    exemptionForCompleted: boolean;
    exemptionForSatisfied: boolean;
    requiredForCompleted: boolean;
    requiredForSatisfied: boolean;
    rollupMethod: RollupMethod;
    progressWeight: number;
    measureWeight: number;
    averageTime: number;
    suggestedTime: number;
    minimumTime: number;
    netTimeLimit: number;
    grossTimeLimit: number;
    grossLimitBase: GrossLimitBase;
    netLimitOverride: boolean;
    grossLimitOverride: boolean;
    registrationDateOverride: boolean;
    alwaysAvailable: boolean;
}

export class ObjectRequirementModel extends BaseModel implements ObjectRequirement {

    public resultStartDate = '';
    public resultEndDate = '';
    public exemptionForCompleted = false;
    public exemptionForSatisfied = false;
    public requiredForCompleted = false;
    public requiredForSatisfied = false;
    public rollupMethod= RollupMethod.Default;
    public progressWeight = 0;
    public measureWeight = 0;
    public averageTime = 0;
    public suggestedTime = 0;
    public minimumTime = 0;
    public netTimeLimit = 0;
    public grossTimeLimit = 0;
    public grossLimitBase= GrossLimitBase.Unknown;
    public netLimitOverride = false;
    public grossLimitOverride = false;
    public registrationDateOverride = false;
    public alwaysAvailable = false;

    constructor(data: any) {
        super(data);
    }

    serialize(): ObjectRequirement {
        return <ObjectRequirement>super.serialize();
    }

}
