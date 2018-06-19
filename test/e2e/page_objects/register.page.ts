import {browser, element, by} from "protractor";

export class RegisterPage {
    static get() {
        browser.get('https://testaccount.nexiuslearning.com/account/register');
        return new RegisterPage();
    };

    public userName;
    public email;
    public emailAgain;
    public password;
    public passwordAgain;
    public userAgeYes;

    constructor() {
        this.userName = element(by.css('#FullName'));
        this.email = element(by.css('#Email'));
        this.emailAgain = element(by.css('#EmailAgain'));
        this.password = element(by.css('#Password'));
        this.passwordAgain = element(by.css('#PasswordConfirm'));
        this.userAgeYes = element(by.css('#incapableYes'));
    }

    // public async typeRegisterInput(){
    public typeRegisterInput() {
        // console.log(this.captcha);
        this.userName.sendKeys('Test Ödön');
        this.email.sendKeys('cucumber@mailinator.com');
        this.emailAgain.sendKeys('cucumber@mailinator.com');
        this.password.sendKeys('0000');
        this.passwordAgain.sendKeys('0000');
        browser.sleep(1000);
        this.userAgeYes.click();
        browser.sleep(1000);

    }
}

/*public clickCaptcha() {
    browser.switchTo().frame(0).then(function () {
        const checkbox = element(by.css('.recaptcha-checkbox-checkmark'));
        browser.actions().mouseMove(checkbox).perform();
        browser.sleep(1000);
        checkbox.click();
    });
    browser.sleep(1000);
}*/
