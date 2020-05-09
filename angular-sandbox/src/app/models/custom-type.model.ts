import 'reflect-metadata';
import * as _ from 'lodash';

export const LAYOUT_META = 'layout:metadata';

export class LayoutDataModelConfig {
  prop?: string;
  caption?: string;
}

export function writeLayoutMeta(meta: any, propertyKey: string, config: LayoutDataModelConfig, viewName: string[] = ['default']){
   viewName.forEach((view: any) => {
     meta[view] = _.merge(meta[view] || {}, {});
     meta[view][propertyKey] = _.merge(meta[view][propertyKey] || {}, config);
   });
}

export function LayoutDataModel(config: LayoutDataModelConfig, viewName: string[] = ['default']): PropertyDecorator{
  return (target: any, propertyKey: string) => {
    const targetCtor = target.constructor;
    const layoutMeta = Reflect.getMetadata(LAYOUT_META, target) || {};
    let layoutTypeMeta = Reflect.getMetadata(LAYOUT_META, targetCtor) || {};
    // console.log('layoutMeta: ', layoutMeta);
    // console.log('layoutTypeMeta: ', layoutTypeMeta);
    // console.log('config: ', config);
    // console.log('layoutMeta: ', layoutMeta);
    // console.log('layoutTypeMeta: ', layoutTypeMeta);
    // console.log('key: ', key);
    // console.log('viewName: ', viewName)
    writeLayoutMeta(layoutMeta, propertyKey, config, viewName);
    layoutTypeMeta = layoutMeta;
    Reflect.defineMetadata(LAYOUT_META, layoutMeta, target);
    Reflect.defineMetadata(LAYOUT_META, layoutTypeMeta, targetCtor);
  };
}

export function LayoutProp(prop: string, viewName: string[] = ['default']){
  return LayoutDataModel({prop}, viewName);
}

export function LayoutCaption(caption: string, viewName: string[] = ['default']){
  return LayoutDataModel({caption}, viewName);
}


export class CustomTypeModel {
  @LayoutCaption('Username caption')
  @LayoutProp('login')
  public username: string;

  @LayoutCaption('Password caption')
  @LayoutProp('password')
  public password: string;
}


/*export function Attribute(attributes?: any): PropertyDecorator{
  return (target: object, propertyKey: string) => {
    const targ = target.constructor;
    const metaObj = {[propertyKey]: attributes};
    Reflect.defineMetadata(LAYOUT_META, metaObj, targ);
  };
}*/
// console.log(Reflect.getMetadataKeys(BaseModel, 'username'));
// console.log(Reflect.getMetadata('attribute:isEditable', baseModel, 'username'));
// console.log(Reflect.getMetadata(LAYOUT_META, baseModel, 'username'));
// console.log(Reflect.getOwnMetadataKeys(baseModel));
