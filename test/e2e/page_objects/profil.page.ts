import { browser, element, by } from "protractor";
import { LoginPage } from "./login.page";

export class ProfilPage{
    private fullName;
    static getWithoutLogin(){
        browser.get('https://testaccount.nexiuslearning.com/profile/index');
        return new ProfilPage;
    }

    static get(){
        browser.get('https://testaccount.nexiuslearning.com/profile/index');
        new LoginPage().login();
        return new ProfilPage;
    }

    constructor(){
    this.fullName = element(by.id('FullName'));
}

}