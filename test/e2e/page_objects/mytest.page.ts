import { browser, element, by, Key } from "protractor";

export class MytestPage {
    static get(){
        // console.log('BROWSER');
        browser.get('https://www.mailinator.com/');
        return new MytestPage();
    };
    public inputField;
    // public inputUserName;
    public valueText;
    constructor(){
        this.inputField = element(by.id("inboxfield"));
        console.log('MYTEST CONSTRUCTOR');
        // this.inputUserName = element(by.css('#FullName'));
        // this.innerText = element(by.css('.Q8LRLc'));
        // this.valueText = element(by.name("btnK"));
    }
    public async typeEmailInput(){
        // this.inputField.sendKeys('cucumber');
        this.inputField.sendKeys('cucumber', Key.ENTER);
    }

}
