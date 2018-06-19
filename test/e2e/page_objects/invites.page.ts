import { browser, element, by, Key } from "protractor";

export class InvitesPage {
    static get(){
        browser.get('https://testaccount.nexiuslearning.com');
        return new InvitesPage();
    };
    public inputField;
    constructor(){
        this.inputField = element(by.id("inboxfield"));
    }
    public async typeEmailInput(){
        // this.inputField.sendKeys('cucumber');
        this.inputField.sendKeys('cucumber', Key.ENTER);
    }

}
