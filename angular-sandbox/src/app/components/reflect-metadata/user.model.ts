import 'reflect-metadata';

interface IAttributeProperties {
  icon?: string;
  type?: AttributeType;
  isEditable?: boolean;
  isVisible?: boolean;
}

enum AttributeType {
  Text,
  Date,
  Number,
  Password
}



export const ATTRIBUTE_PREFIX = 'attribute:';

/**
 * Adds attribute metadata to a property
 * @param {IAttributeProperties} attributes
 * @returns {(target: any, propertyKey: string) => void}
 * @constructor
 */
export function Attribute(attributes: IAttributeProperties) {
  return (target: object, propertyKey: string) => {
    if (attributes !== undefined && attributes !== null) {
      Object.keys(attributes).forEach(key => {
        Reflect.defineMetadata(`${ATTRIBUTE_PREFIX}${key}`, attributes[key], target, propertyKey);
      });
    }
  };
}

/*
function logType(target:any , key:string) {

}
*/

export class UserModel {
  @Attribute({
    type: AttributeType.Text
  })
  username: string;
  // password: string;
  // email: string;
  // age: number;
  // name: string;
  // constructor() {
  // }
  constructor() {
    this.username = null;
  }
}
