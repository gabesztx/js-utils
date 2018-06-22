import {browser, element, by, Key} from "protractor";

export class Invite_successPage {
    public pageIcon;
    public inviteAcceptBtn;
    public acceptBtn;
    public passwordInput;

    constructor() {
        this.pageIcon = element(by.id('topLogo'));
        this.inviteAcceptBtn = element.all(by.css('.successContent a'));
        this.acceptBtn = element.all(by.css('.warningContent a'));
        this.passwordInput = element(by.id('Password'));
    }

    clickHandler() {
        browser.sleep(1000);
        return this.inviteAcceptBtn.first().click();
    }
    clickAccpetHandler() {
        browser.sleep(1000);
        return this.acceptBtn.first().click();
    }
    clickResultHandler() {
        browser.sleep(1000);
        return this.acceptBtn.last().click();
    }
    typePassword() {
        browser.sleep(1000);
        this.passwordInput.sendKeys('0000', Key.ENTER)
    }

}
