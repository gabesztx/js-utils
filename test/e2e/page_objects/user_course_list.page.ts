import { browser, ElementArrayFinder, $$ } from "protractor";
import { LoginPage } from "./login.page";

export class UserCourseList{
    myCourses: ElementArrayFinder;
    
    constructor(){
        this.myCourses = $$('div.courseListItemContainer');
        console.log('------------ myCourses ------------');
    }

    static getWithoutLogin() {
        browser.get('https://testhome.nexiuslearning.com/');
        return new LoginPage;
    };

    getCoursesSize(){
        return this.myCourses.count();
    }
}