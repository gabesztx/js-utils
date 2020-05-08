import 'reflect-metadata';
import { Type } from '@angular/core';

export const LAYOUT_META = 'layout:metadata';

enum AttributeType {
  Text,
  Date,
  Number,
  Password
}

interface IAttributeProperties {
  icon?: string;
  type?: AttributeType;
  caption?: string;
  isEditable?: boolean;
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
    console.log('target: ', target.constructor, propertyKey);
    /*    if (attributes !== undefined && attributes !== null) {
          Object.keys(attributes).forEach(key => {
            // console.log(`${ATTRIBUTE_PREFIX}${key}`);

            // console.log('key', key);
            // console.log('attributes[key]', attributes[key]);
            // `${ATTRIBUTE_PREFIX}${key}`,
            // Reflect.defineMetadata(LAYOUT_META, attributes[key], target, propertyKey);
            // Reflect.defineMetadata(LAYOUT_META, target);
          });
        }*/
  };
}

class BaseModel {
  @Attribute({
    caption: 'Hello Caption'
  })
  public username = '';

  constructor(){
    this.username = null;
  }
}

console.log(BaseModel);
// const baseModel = new BaseModel();
// const modelType: Type<any> | Type<any>[] = BaseModel;
// console.log(modelType);
// console.log(modelType);
// console.log(Reflect.getMetadataKeys(BaseModel, 'username'));
// console.log(Reflect.getMetadata('attribute:isEditable', baseModel, 'username'));
// console.log(Reflect.getMetadata(LAYOUT_META, baseModel, 'username'));
// console.log(Reflect.getOwnMetadataKeys(baseModel));
