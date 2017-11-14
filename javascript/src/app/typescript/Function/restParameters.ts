function buildNameRest(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildNameRest("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);

let buildNameFun: (fname: string, ...rest: string[]) => string = buildNameRest;
// console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));