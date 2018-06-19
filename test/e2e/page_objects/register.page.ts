import { browser, element, by, Key } from "protractor";

export class RegisterPage {
    static get(){
        console.log('RegisterPage');
        return new RegisterPage();
    };
    public inputUserName;
    constructor(){
        console.log('REGISTER PAGE CONSTRUCTOR');
        setTimeout(() => {

        this.inputUserName = element(by.css('#FullName'));
        },2000)
        // this.innerText = element(by.css('.Q8LRLc'));
        // this.valueText = element(by.name("btnK"));
    }
    public async typeRegisterInput(){
        setTimeout(() => {
            this.inputUserName = element(by.css('#FullName'));
            this.inputUserName.sendKeys('cucumber');
        },1000)
        // this.inputField.sendKeys('cucumber');
    }
}
