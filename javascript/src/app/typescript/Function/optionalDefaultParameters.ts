function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right


function buildName1(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
// let result1 = buildName1("Bob");                  // works correctly now
// let result2 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName1("Bob", "Adams");         // ah, just right


function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
// let result1 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName2("Bob", "Adams");         // ah, just right