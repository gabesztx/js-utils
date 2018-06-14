import { $$, by, browser, element } from "protractor";
import { expect } from "../support/expect";
import { waitForElement } from "../../page_objects/nexius.page";
import { LoginPage } from "../../page_objects/login.page";
import { UserCourseList } from "../../page_objects/user_course_list.page";

export = function loginSteps(){
    let page;

    this.When(/a bejelentkezési oldalon állok$/, function(){
        return page = LoginPage.get();
    });

    this.When(/^bejelentkezek$/, function(){
        page = page.login();
        waitForElement(by.css('[href="/courses"]'));
        browser.sleep(1_000);
        return;
    });

    this.When(/^bejelentkezek "(.*)" felhasználóval$/, function(param: string){
        console.log(param);
        return;
    });

    this.When(/a kurzus lista oldalon állok$/, function(){
        page = LoginPage.get().login();
        waitForElement(by.css('[href="/courses"]'));
        browser.sleep(1_000);
        return;
    });

    this.When(/^megnyomom az elfelejtett jelszó gombot$/, function(){
        element(by.id("forgotPassword")).click();
        return waitForElement(by.id("submitBtn"));
    });

    this.Then(/^látnom kell az aktuális kurzusaimat$/, function(){
        return expect(page.getCoursesSize()).to.eventually.not.equal(0);
    });

    this.Then(/^a jelszó emlékeztető oldalra kell, hogy kerüljek$/, function(){
        return expect(element(by.id('submitBtn')).isPresent()).to.eventually.equals(true);
    });

  
    this.When(/^az aktuális kurzus lista oldalra navigálok bejelentkezés nélkül$/, function(){
        return page = UserCourseList.getWithoutLogin();
    });
};