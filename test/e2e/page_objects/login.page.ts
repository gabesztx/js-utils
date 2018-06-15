import { browser, element, by, Key, $, $$, ElementArrayFinder } from "protractor";
import { waitForElement } from "../features/support/wait_for_element";

export class LoginPage {
    
    myCourses: ElementArrayFinder;
    static get() {
        browser.get('https://testaccount.nexiuslearning.com/');
        return new LoginPage();
    }

    private email;
    private password;

    constructor(){
        this.email = element(by.name('UserName'));
        this.password = element(by.name('PasswordTop'));

        this.myCourses = $$('div.courseListItemContainer');
    }

    login(){
        this.email.sendKeys('nexiustest999@mailinator.com');   //aaaaa12@mailinator.com
        this.password.sendKeys('aaaaaa');
        element(by.css('.btn[value="Bejelentkezés"]')).click();
    }

    getCoursesSize(){
        return this.myCourses.count();
    }
}