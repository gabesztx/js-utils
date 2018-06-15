import { LoginPage } from "../../page_objects/login.page";
import { $, $$, by, browser } from "protractor";
import { expect } from "../support/expect";
import { LmsPage } from "../../page_objects/lms.page";
import { LcmsPage } from "../../page_objects/lcms.page";
import { waitForElement } from "../../features/support/wait_for_element";

export = function playCourseSteps(){
    let page;
    
    this.Given(/^hogy az aktuális kurzus lista oldalra állok$/, function(){
        let idpPage = LmsPage.getWithoutLogin();
        idpPage.login();
        waitForElement(by.css('.courseListItemContainer'));
        return page = new LmsPage();
    });

    this.When(/^elindítom a kiválasztott tananyagot$/, function(){
        return page.playCourse();
    });
    
    this.Then(/^el kell indulnia a tananyaglejátszónak$/, function(){
        browser.switchTo().frame($("#ScormContent").getWebElement());
        waitForElement(by.css('#btnClose'));
        expect($$('#btnClose').count()).to.eventually.equal(1);
    });
};