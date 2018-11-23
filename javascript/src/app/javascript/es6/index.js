const obj1 = {}
const obj2 = {
    'id':{}
}
const obj3 = {
    ...obj1,
    ...obj2
}
// console.log(obj3);



/*let obj = {
    '01': {}
};
let objNew = {
    ...obj,
    ...{'02': {}}
};

console.log(obj);
console.log(objNew);*/


/*let key = 'd1';
let value = 'Ben';
let obj = {[key]: value};

let key1 = 'd2';
let value1 = 'Ben2';
let obj1 = {[key1]: value1};

const obj_done = {...obj, ...{[key1]: value1}};


console.log('obj_done', obj_done);*/

// might expect `obj` to have a property
// key named 'value', with the value of 'Ben'
// but this is a SyntaxError.
// You would need to do `{ [key] : value}`


/*import {
  promiseSimple,
  promiseResult,
  promiseChain,
  promiseAll,
  promiseRace
} from './promise'

promiseRace().then((res) => {
  // console.log('SUCCESS', res);
})*/

/*
 promiseSimple('GABESZ',10).then((res)=>{
 console.log('RES',res);
 });*/
/*promiseResult().then((res)=>{
 console.log('RES',res);
 });*/
/*promiseAll().then((res)=>{
 console.log('SUCCESS', res);
 })*/
//TODO: kiszervezni külön mappákba az alkategóriákat;

/*
 const _resParameter = () => {
 return ((x, y, ...a) => {
 return (x + y) * a.length;
 })(1, 2, 'hello', 'szia', 'szevasz', {'id': 10});
 };

 const _arrayFunction = () => {
 return 'hello _arrayFunction'
 };

 const _arrayMatching = () => {
 const list = [1, 2, 3];
 const [name, id] = list;
 return name + id
 };

 const _spreadOperator = () => {
 const params = ['hello', true, 7];
 return [1, 2, 3, ...params];
 };

 const _stringInterpolation = () => {
 let customer = {name: 'Customer name is Vazul'};
 let customerData = {id: 13, product: 'Bar', unitprice: 42};
 return `Hello ${customer.name} show me user data, userID:${customerData.id}, userOwn:${customerData.product}`;

 };


 module.exports = {
 arrowFunction: _arrayFunction,
 arrayMatching: _arrayMatching,
 resParameter: _resParameter,
 spreadOperator: _spreadOperator,
 stringInterpolation: _stringInterpolation,
 };*/
