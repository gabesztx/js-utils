import 'reflect-metadata';
import { EditorTestRowType } from './editortest-row-type.model';
import { Type } from '@angular/core';
/*
//-----------------------------------------------------------------------------------------------
export const RANGE_KEY = Symbol('validateRange');
export function RangeParameter(min: number = 0, max: number = 100){
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    // Pull existing metadata (if any)
    const existingRanges: { [key: number]: number[] } = (
      Reflect.getMetadata(RANGE_KEY, target, propertyKey) || {}
    );
    // Add new value
    existingRanges[parameterIndex] = [min, max];
    // Store metadata
    Reflect.defineMetadata(RANGE_KEY, existingRanges, target, propertyKey);
  };
}

export function ValidateRange(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor){
  // Store the original value
  const savedValue = descriptor.value;
  // Attach validation logic
  descriptor.value = (...args: any[]) => {
    // Pull the active ranges (if any)
    const monitoredRanges: { [key: number]: number[] } = (
      Reflect.getOwnMetadata(
        RANGE_KEY,
        target,
        propertyKey,
      )
      ||
      {}
    );
    // Check all monitored ranges
    // tslint:disable-next-line:forin
    for (const key in Reflect.ownKeys(monitoredRanges)) {
      const range = monitoredRanges[key];
      const value = args[key];
      // Throw error if outside range
      if (value < range[0] || value > range[1]) {
        throw new Error('Value outside of range');
      }
    }
    // Actually call the function
    return Reflect.apply(savedValue, target, args);
  };
}

export class Sample {
  // Validate the input ranges
  @ValidateRange
  public updatePercentage(
    // Define a min,max of 0,100
    @RangeParameter(0, 100)
      newValue: number,
    // Does nothing
    negative: boolean = false,
  ){
    console.log('newValue', newValue);
  }
}

const demoSample = new Sample();
// Working value
demoSample.updatePercentage(10);

try {
  demoSample.updatePercentage(200);
} catch (error) {
  // do nothing
}
//-----------------------------------------------------------------------------------------------
*/


//-----------------------------------------------------------------------------------------------
function LogMethod(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
){
  console.log('target', target);
  // console.log('propertyKey', propertyKey);
  // console.log('descriptor', descriptor);
  // console.log(Reflect.getMetadata('design:type', target, propertyKey)); // Function type
  // console.log(Reflect.getMetadata('design:paramtypes', target, propertyKey)); // function arguments type: number
  // console.log(Reflect.getMetadata('design:returntype', target, propertyKey)); // function return type: string
}

class Demo {
  @LogMethod
  public foo(bar: number): string{
    return 'hello';
  }
}
let modelType: Type<any> | Type<any>[] = EditorTestRowType;
// const demo = new Demo();
console.log('EditorTestRowType', modelType);
// console.log('EditorTestRowType', EditorTestRowType);
// -----------------------------------------------------------------------------------------------


/*
-----------------------------------------------------------------------------------------------
class BasicUsage {
  constructor(){
    // key, value, target, propertyKey
    Reflect.defineMetadata('foo1', 'bar1', this, 'baz');
  }

  @Reflect.metadata('foo2', 'bar2')
  public baz(){
  }
}


const basicUsageDemo = new BasicUsage();
// key, target, propertyKey
console.log(Reflect.getMetadata('foo1', basicUsageDemo, 'baz'));
// bar1
console.log(Reflect.getMetadata('foo2', basicUsageDemo, 'baz'));
// bar2
-----------------------------------------------------------------------------------------------
*/
/*
import 'reflect-metadata';

class BasicUsage {
  @Reflect.metadata('foo1', 'Gabesz')
  public userName: string;

  constructor(){
    // this.userId = 10
    // Reflect.defineMetadata('foo1', 'bar1', this, 'userName');
    // this.userId = 10;
  }

}


const basicUsageDemo = new BasicUsage();
console.log(Reflect.getMetadata(
  'foo1',
  basicUsageDemo,
  'userName'))*/
