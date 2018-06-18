import { $$, by, browser, $ } from "protractor";
import { expect } from "../support/expect";
import { waitForElement } from "../../features/support/wait_for_element";
import { PrivacyStatementPage } from "../../page_objects/privacy_statement.page"
import { LmsPage } from "../../page_objects/lms.page";

export = function privacyStatementSteps(){

    let page;

    this.Given(/^hogy az elfogadásra váró adatkezelési tájékoztató oldalán állok$/, function(){
        let idpPage = LmsPage.getWithoutLogin();
        idpPage.login();
        return page = PrivacyStatementPage.get();
    });

    this.When(/^az adatkezelési tájékoztatót elfogadom$/, function(){
        return page.acceptPrivacyStatement();
    });

    this.Then(/^léphetek be a kurzusaimhoz$/, function(){
        expect($$('.nx-navbar__logo.testLogo').count()).to.eventually.equal(1);
    });
};