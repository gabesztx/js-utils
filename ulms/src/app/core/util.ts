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
