import { $, browser, ElementFinder, promise, by  } from "protractor";

import { config } from '../../conf';
import { By, until } from "selenium-webdriver";
import { waitForElement } from "../features/support/wait_for_element";


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

