import {browser, element, by, $$, ElementArrayFinder} from "protractor";

export class RecommendedPage {
    public courseListLinkButton: ElementArrayFinder;
    public tabButton;

    constructor() {
        this.tabButton = element(by.id('recommended'));
        this.courseListLinkButton = $$('.courseListItemContainer a');
    }

    navigatePage() {
        browser.sleep(1000);
        this.tabButton.click();
    }

    enrollmentClickHandler() {
        browser.sleep(1000);
        this.courseListLinkButton.first().click();
    }

}
