import {browser, element, by, ElementArrayFinder} from "protractor";

export class RecommendedPage {
    public courseListItems;
    public courseListLinkButton;
    public tabButton;
    public dropDownButton;
    public refuseButton;
    public refuseAcceptButton;

    constructor() {
        this.tabButton = element(by.id('recommended'));
        this.courseListItems = element.all(by.css('.courseListItemContainer'));
        this.courseListLinkButton = element.all(by.css('.courseListItemContainer a'));
        this.dropDownButton = element.all(by.css('.dropDownContent button'));
        this.refuseButton = element.all(by.css('.dropdownMenuContent li'));
        this.refuseAcceptButton = element(by.css('.acceptBtn'));
    }

    navigatePage() {
        browser.sleep(1000);
        this.tabButton.click();
    }

    dropDownClick() {
        browser.sleep(1000);
        this.dropDownButton.first().click();
    }
    refuseClick() {
        browser.sleep(1000);
        this.refuseButton.last().click();
    }
    refuseAccept() {
        browser.sleep(1000);
        this.refuseAcceptButton.click();
        // browser.sleep(10000);
    }

    enrollmentClickHandler() {
        browser.sleep(1000);
        this.courseListLinkButton.first().click();
    }

}
