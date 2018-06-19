import { browser, element, by, Key } from "protractor";
import { UserCourseList } from "./user_course_list.page";

export class LoginPage {
    
    static get() {
        browser.get('https://testaccount.nexiuslearning.com/');
        return new LoginPage();
    }

    private email;
    private password;
    private name;

    constructor(){
        this.email = element(by.name('UserName'));
        this.password = element(by.name('PasswordTop'));
        this.name='próba jános';
    }

    login(){
        this.email.sendKeys('aaaaa12@mailinator.com');
        this.password.sendKeys('aaaaaa', Key.ENTER);
        return new UserCourseList();
    }
}