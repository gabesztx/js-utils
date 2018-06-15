import { $$, by, browser } from "protractor";
import { expect } from "../support/expect";
import { waitForElement } from "../../page_objects/nexius.page";
import { errorPage } from "../../page_objects/error.page";

export = function errorSteps(){
    let page;

    this.When(/az IDP hiba oldalon állok$/, function(){
        return errorPage.getIdpErrorPageWithoutLogin();
    });

    this.When(/az LMS hiba oldalon állok$/, function(){
        return errorPage.getLmsErrorPageWithoutLogin();
    });
};