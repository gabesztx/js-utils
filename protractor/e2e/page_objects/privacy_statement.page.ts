import { browser, element, by, Key, ElementFinder } from "protractor";

export class PrivacyStatementPage{
    static get(){
        return new PrivacyStatementPage();
    };

    public privacyStatementLastSection: ElementFinder;
    public privacyStatementCheckBox: ElementFinder;
    public submitBtn: ElementFinder;

    constructor(){
        this.privacyStatementLastSection = element.all(by.css('.privacyStatamentTextContent section')).last();
        this.privacyStatementCheckBox = element(by.css('.privacyStatamentCheckBox'));
        this.submitBtn = element(by.css('.btn.submitBtn.registerSubmit'));
    }

    public async acceptPrivacyStatement(){
        this.privacyStatementLastSection.click()
        this.privacyStatementCheckBox.click();
        //this.submitBtn.click();
    }
}