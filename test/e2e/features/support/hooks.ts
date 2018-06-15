import { browser, by } from "protractor";
import { waitForElement } from "../../features/support/wait_for_element";

export = function hooks(){

    this.After(function(){
        browser.get('https://testaccount.nexiuslearning.com/account/logoff');
        waitForElement(by.id('login-form'));
        return browser.sleep(500);
    });
}