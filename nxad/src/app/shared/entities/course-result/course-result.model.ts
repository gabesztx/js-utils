// External import
import * as moment from 'moment';
// Nexius core import
import { BaseModel, BaseSchema } from '@nexius/core';
// Internal import
import { CourseResult } from './course-result.interface';
import { ReferenceBase } from '../../../models/reference-base.model';
import { MIN_DATE, MAX_DATE, DATE_SERVER_FORMAT } from '../../shared.constants';

export const CourseSchema = Object.assign({}, BaseSchema, {
    title: {
        presence: true
    }
});

export class CourseResultModel extends BaseModel implements CourseResult {

    id: string;
    externalUserId: string;
    user: ReferenceBase;
    registrarOrganization: ReferenceBase;
    provider: ReferenceBase;
    registrationDate: string;
    resultEndDate: string;
    measure: number;
    progress: number;
    result: number;
    netTimeLimitOverride: number;
    firstAttemptionTime: string;
    lastAttemptionTime: string;
    qualificationTime: string;
    // status: todo ;
    // state: enum; //

    constructor(data?: any) {
        super(data);

        this.registrationDate = moment(MIN_DATE).format(DATE_SERVER_FORMAT);
        this.resultEndDate = moment(MAX_DATE).format(DATE_SERVER_FORMAT);
    }

}

