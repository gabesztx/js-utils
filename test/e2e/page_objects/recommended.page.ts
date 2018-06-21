import {browser, element, by, ElementArrayFinder} from "protractor";

export class RecommendedPage {
    public courseListItems;
    public courseListLinkButton;
    public tabButton;

    constructor() {
        this.tabButton = element(by.id('recommended'));
        this.courseListItems = element.all(by.css('.courseListItemContainer'));
        this.courseListLinkButton = element.all(by.css('.courseListItemContainer a'));
    }

    navigatePage() {
        browser.sleep(1000);
        return this.tabButton.click();
    }

    enrollmentClickHandler() {
        browser.sleep(1000);
        return this.courseListLinkButton.first().click();
    }

}
