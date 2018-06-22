import {browser, element, by} from "protractor";

export class Invite_successPage {
    public pageIcon;
    public inviteAcceptBtn;

    constructor() {
        this.pageIcon = element(by.id('topLogo'));
        this.inviteAcceptBtn = element.all(by.css('.container a'));
    }

    clickHandler() {
        browser.sleep(1000);
        return this.inviteAcceptBtn.first().click();
    }

}
