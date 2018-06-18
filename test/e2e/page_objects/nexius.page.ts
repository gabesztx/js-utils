import { $, browser, ElementFinder, promise, by  } from "protractor";

import { config } from '../../conf';
import { By, until } from "selenium-webdriver";


export class NexiusPage {

    private mainHeader: ElementFinder;

    constructor() {
        this.mainHeader = $('.responsive-headline');
    }

    static get() {
        browser.get('/');
        browser.waitForAngular();
        // const driver = browser.driver;

        waitForElement(by.css('.responsive-headline'));

        return new NexiusPage();
    }

    getHeaderText() {
        return this.mainHeader.getText();
    }

    
}

export function waitForElement(locator: By): promise.Promise<boolean> {
    const driver = browser.driver;
    return driver.wait(until.elementLocated(locator), 20 * 1000)
        .then(function (element) {
                return driver.wait(until.elementIsVisible(element), 10 * 1000);
            }
        );
}
