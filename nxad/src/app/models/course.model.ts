import * as moment from 'moment';

import { BaseModel, BaseSchema } from '@nexius/core';

import { ReferenceBase } from './reference-base.model';
import { MIN_DATE, MAX_DATE, DATE_SERVER_FORMAT } from '../shared/shared.constants';

export interface Course {
    id: string;
    title: string;
    registrationStartDate: string;
    registrationEndDate: string;
    resultStartDate: string;
    resultEndDate: string;
    provider: ReferenceBase;
}

export const CourseSchema = Object.assign({}, BaseSchema, {
    title: {
        presence: true
    }
});

export class CourseModel extends BaseModel implements Course {

    id: string;
    title: string;
    registrationStartDate: string;
    registrationEndDate: string;
    resultStartDate: string;
    resultEndDate: string;
    provider: ReferenceBase;

    constructor(data?: any) {
        super(data);

        this.registrationStartDate = moment(MIN_DATE).format(DATE_SERVER_FORMAT);
        this.registrationEndDate = moment(MAX_DATE).format(DATE_SERVER_FORMAT);
        this.resultStartDate = moment(MIN_DATE).format(DATE_SERVER_FORMAT);
        this.resultEndDate = moment(MAX_DATE).format(DATE_SERVER_FORMAT);
    }

}

