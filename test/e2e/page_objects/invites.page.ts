import { browser, element, by, Key } from "protractor";

export class InvitesPage {

    private email;
    private password;
    private submitButton;

    constructor() {
        this.email = element(by.id('email'));
        this.password = element(by.id('PasswordTop'));
        this.submitButton = element(by.id('submitBtn'));
    }

    getPage() {
        return browser.get('https://devaccount.nexiuslearning.com/');
    }

    loginPage(email?: string, password?: any) {
        this.email.sendKeys('mostoha.tamas@nexius.hu');
        this.password.sendKeys('Password1');
        this.submitButton.click();
    }

}
