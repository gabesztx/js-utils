let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

// console.log(first);
// console.log(second);
// console.log(bothPlus);


/* overwrite default 'food' in rest*/
// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { ...defaults, food: "rich" };
// console.log(defaults);
// console.log(search);


// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { food: "rich", ...defaults };
// console.log(defaults);
// console.log(search);

/* megváltoztja az object key sorrendjét */
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { price: "rich", ...defaults };
console.log(defaults);
console.log(search);