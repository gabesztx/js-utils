import {browser, element, by, ElementArrayFinder} from "protractor";

export class RecommendedPage {
    public courseListItems;
    public courseDetailListItem;
    public courseListLinkButton;
    public tabButton;
    public dropDownButton;
    public refuseButton;
    public refuseAcceptButton;

    constructor() {
        this.tabButton = element(by.id('recommended'));
        this.courseListItems = element.all(by.css('.courseListItemContainer'));
        this.courseDetailListItem = element.all(by.css('.courseDetailListItemContainer'));
        this.courseListLinkButton = element.all(by.css('.courseListItemContainer a'));
        this.dropDownButton = element.all(by.css('.dropDownContent button'));
        this.refuseButton = element.all(by.css('.dropdownMenuContent li'));
        this.refuseAcceptButton = element(by.css('.acceptBtn'));
    }

    navigatePage() {
        browser.sleep(500);
        this.tabButton.click();
    }

    dropDownClick() {
        browser.sleep(500);
        this.dropDownButton.first().click();
    }
    refuseClick() {
        browser.sleep(500);
        this.refuseButton.last().click();
    }
    refuseAccept() {
        browser.sleep(500);
        this.refuseAcceptButton.click();
    }

    enrollmentClickHandler() {
        browser.sleep(1000);
        this.courseListLinkButton.first().click();
    }

}
