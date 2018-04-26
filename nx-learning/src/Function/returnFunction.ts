function returnNel(): string {
    return 'hello';
}
// minden visszatérő függvényhez meg kell adni a visszatérési érték típusát
console.log(returnNel());

function returnArray(): Array<any> {
    return ['0', 1];
}
// minden visszatérő függvényhez meg kell adni a visszatérési érték típusát
console.log(returnArray());


// Nem visszatérő

const nemVisszaterFn = function(): void{
    //blabla
}



