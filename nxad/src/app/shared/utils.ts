import * as moment from 'moment';
import {MIN_YEAR, MAX_YEAR, DATE_DISPLAY_FORMAT, FULL_DATE_DISPLAY_FORMAT} from './shared.constants';


const typeCache: { [label: string]: boolean } = {};

export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unqiue"`);
    }

    typeCache[<string>label] = true;

    return <T>label;
}

/**
 * @enumerable decorator that sets the enumerable property of a class field to false.
 * @param value true|false
 */
export function enumerable(value: boolean) {
    return function (target: any, propertyKey: string) {
        const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (descriptor.enumerable !== value) {
            descriptor.enumerable = value;
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}

/**
 * @enumerable decorator that sets the enumerable property of a class field to false.
 * @param value true|false
 */
export function configurable(value: boolean) {
    return function (target: any, propertyKey: string) {
        const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (descriptor.configurable !== value) {
            descriptor.configurable = value;
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}

/**
 * @enumerable decorator that sets the enumerable property of a class field to false.
 * @param value true|false
 */
export function writable(value: boolean) {
    return function (target: any, propertyKey: string) {
        const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
        if (descriptor.writable !== value) {
            descriptor.writable = value;
            Object.defineProperty(target, propertyKey, descriptor);
        }
    };
}

/**
 * Cell renderer for dates
 * Returns empty string if date is a MIN or MAX value
 * @param date <string>
 */
export function dateRenderer(date: string): string {
    const dateObj = new Date(date);
    if ( dateObj.getFullYear() === MIN_YEAR || dateObj.getFullYear() === MAX_YEAR ) {
        return '';
    }
    return moment(date).format(DATE_DISPLAY_FORMAT);
}

/**
 * Cell renderer for dates with hours
 * Returns empty string if date is a MIN or MAX value
 * @param date <string>
 */
export function fullDateRenderer(date: string) {
    const dateObj = new Date(date);
    if (dateObj.getFullYear() === MIN_YEAR || dateObj.getFullYear() === MAX_YEAR) {
        return '';
    }
    return moment(date).format(FULL_DATE_DISPLAY_FORMAT);
}

/**
 * Cell renderer for close courses
 * @param date <string>
 */
export function isCloseCourse(resultEndDate: string) {
    return moment().isAfter(resultEndDate);
}
