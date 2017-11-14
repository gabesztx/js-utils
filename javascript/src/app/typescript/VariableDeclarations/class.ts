class C {
    p = 12;
    m() {
    }
}
let c = new C();
console.log(c);
let clone = { ...c };
console.log(clone);
// clone.p; // ok
// console.log(clone.p);
// clone.m(); // error!
