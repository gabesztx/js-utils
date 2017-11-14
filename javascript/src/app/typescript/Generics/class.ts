class GenericVale<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericVale<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
console.log(myGenericNumber.add(10, 10));

let myGenericString = new GenericVale<string>();
myGenericString.zeroValue = 'Ödön';
myGenericString.add = (firstName, lastName) => firstName + ' ' + lastName;
console.log(myGenericString.add('Martus', 'Gaben'));
