import { browser, element, by } from "protractor";
import { LoginPage } from "./login.page";

export class LcmsPage{
    static getWithoutLogin() {
        browser.get('https://testeditor.nexiuslearning.com/nxtest/');
        return new LoginPage;
    };

     
}