// import * as validator from "./ZipCodeValidator";
// import {mainValidator} from './ZipCodeValidator';
import {ZipCodeValidator as ZVALID} from './ZipCodeValidator';

// let myZipCodeValidator = new validator.ZipCodeValidator();
// let myZipCodeValidator = new mainValidator();
let myZipCodeValidator = new ZVALID();
console.log(myZipCodeValidator.isAcceptable('12345'));