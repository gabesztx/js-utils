import { browser, element, by, Key } from "protractor";

export class MytestPage {
    static get(){
        browser.get('https://www.mailinator.com/');
        return new MytestPage();
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
