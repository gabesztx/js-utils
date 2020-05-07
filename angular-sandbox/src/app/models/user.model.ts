import 'reflect-metadata';


enum AttributeType {
  Text,
  Date,
  Number,
  Password
}

interface IAttributeProperties {
  icon?: string;
  type?: AttributeType;
  isEditable?: boolean;
  isVisible?: boolean;
}


export const ATTRIBUTE_PREFIX = 'attribute:';

/**
 * Adds attribute metadata to a property
 * @param {IAttributeProperties} attributes
 * @returns {(target: any, propertyKey: string) => void}
 * @constructor
 */
export function Attribute(attributes?: IAttributeProperties){
  return (target: object, propertyKey: string) => {
    if (attributes !== undefined && attributes !== null) {
      Object.keys(attributes).forEach(key => {
        Reflect.defineMetadata(
          `${ATTRIBUTE_PREFIX}${key}`,
          attributes[key],
          target,
          propertyKey
        );
      });
    }
  };
}

export class BaseModel {
  @Attribute({
    isEditable: true,
    isVisible: true
  })
  username: any;
  // password: string;
  // email: string;
  // age: number;
  // name: string;
  // constructor() {
  // }
  constructor(){
    this.username = null;
  }
}

const baseModel = new BaseModel();
console.log(Reflect.getMetadataKeys(baseModel, 'username'));
console.log(Reflect.getOwnMetadataKeys(baseModel));
// console.log(Reflect.getMetadata('foo1', userModel, 'baz'));
