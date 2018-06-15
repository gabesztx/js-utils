import { browser } from "protractor";


export = function World() {
    this.setDefaultTimeout( 30 * 1000 );

    // nope
    /*
    browser.manage().deleteCookie('NXIDP');
    browser.manage().deleteCookie('NXLMS');
    browser.manage().deleteCookie('LCMS');
    */

    this.contentListPage;
}
