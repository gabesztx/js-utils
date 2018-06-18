
import { $, browser, ElementFinder, promise, by  } from "protractor";
import { By, until } from "selenium-webdriver";

export function waitForElement(locator: By): promise.Promise<boolean> {
    const driver = browser.driver;
    return driver.wait(until.elementLocated(locator), 20 * 1000)
        .then(function (element) {
                return driver.wait(until.elementIsVisible(element), 10 * 1000);
            }
        );
}