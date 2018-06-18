import { browser, element, by, Key } from "protractor";
import { BADFLAGS } from "dns";
import { S_IRGRP } from "constants";

export class MytestPage {
    static get(){
        // console.log('BROWSER');
        browser.get('https://www.mailinator.com/');
        return new MytestPage();
    };
    public inputField;
    public innerText;
    public valueText;
    constructor(){
        this.inputField = element(by.id("inboxfield"));
        // this.innerText = element(by.css('.Q8LRLc'));
        // this.valueText = element(by.name("btnK"));
    }
    public async typeEmailInput(){
        // this.inputField.sendKeys('cucumber');
        this.inputField.sendKeys('cucumber', Key.ENTER);
    }
}
