import { $$, by, browser } from "protractor";
import { expect } from "../support/expect";

import { waitForElement } from "../../features/support/wait_for_element";
import { LoginPage } from "../../page_objects/login.page";
import { LmsPage } from "../../page_objects/lms.page";
import { LcmsPage } from "../../page_objects/lcms.page";

export = function loginSteps(){
    let page;

    this.When(/^a bejelentkezés oldalon állok$/, function(){
        return page = LoginPage.get();
    });

    this.When(/^bejelentkezek$/, function(){
        return page.login();
    });

    this.Then(/^látnom kell az aktuális kurzusaimat$/, function(){
        waitForElement(by.css('[href="/courses"]'));
        
        browser.sleep(1_000);

        return expect(page.getCoursesSize()).to.eventually.not.equal(0);
    });
  
    this.When(/^az aktuális kurzus lista oldalra navigálok bejelentkezés nélkül$/, function(){
        return page = LmsPage.getWithoutLogin();
    });

    this.When(/^a tananyag lista oldalon állok bejelentkezés nélkül$/, function(){
        return page = LcmsPage.getWithoutLogin();
    });

    this.Then(/^látnom kell a számomra elérhető tananyagokat$/, function(){
        waitForElement(by.css('.fa.fa-user'));
        
        browser.sleep(1_000);

        expect($$('[role=row]:not(.ag-header)').count()).to.eventually.not.equal(0);
    });
};