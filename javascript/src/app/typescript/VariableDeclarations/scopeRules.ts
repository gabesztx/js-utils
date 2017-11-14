/*
 function f(shouldInitialize: boolean) {

 if (shouldInitialize) {
 var x = 10;
 }

 return x;
 }
 */

// console.log(f(true));  // returns '10'
// console.log(f(false)); // returns 'undefined'


/*
 // 10,10,10,10...
 for (var i = 0; i < 10; i++) {
 setTimeout(function () {
 console.log(i);
 }, 100 * i);
 }
 */

// 0,1,2,3,4...
/*
 for (var i = 0; i < 10; i++) {
 // capture the current state of 'i'
 // by invoking a function with its current value
 (function(i) {
 setTimeout(function() { console.log(i); }, 100 * i);
 })(i);
 }*/

/*
function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

console.log(theCityThatAlwaysSleeps());*/
