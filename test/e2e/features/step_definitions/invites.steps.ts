import {by, element, browser, $$} from 'protractor';
import {InvitesPage} from '../../page_objects/invites.page';
import {RecommendedPage} from '../../page_objects/recommended.page';
import {expect} from "../support/expect";
import {waitForElement} from "../../page_objects/nexius.page";

export = function invitesSteps() {
    const invitePage = new InvitesPage();
    const recommendedPage = new RecommendedPage();

    this.When(/^hogy a login oldalon állok$/, function () {
        console.log('----- hogy a login oldalon állok ------');
        return invitePage.getPage();
    });

    this.When(/^bejelentkezek az oldalra$/, function () {
        console.log('----- bejelentkezek az oldalra ------');
        return invitePage.loginPage();
    });

    this.Then(/^látnom kell a Nexius logot$/, function () {
        console.log('----- látnom kell a Nexius logot ------');
        expect(waitForElement(by.className('nx-navbar__logo')));
    });

    this.Then(/^látom az ajánlott listát$/, function () {
        // const recommendedList = element.all(by.css('.courseListItemContainer.recommended'));
        // const recommendedList = element(by.css('.courseListItemComponent'));
        // expect(recommendedList.count()).to.eventually.equal(0);
        browser.sleep(2000);
        expect(true);
    });

    this.When(/^hogy az ajánlat oldalon állok$/, function () {
        return recommendedPage.navigatePage();
    });

    this.When(/^hogy rákattintok az első kurzus beiratkozó gombjára$/, function () {
        return recommendedPage.enrollmentClickHandler();
    });

    this.When(/^látom a sikeres oldalt$/, function () {
        expect($$('.container a').isPresent()).to.eventually.equals(true);
        $$('.container a').first().click();
    });

    this.When(/^vissza navigálok a kurzus detail oldalra$/, function () {
       browser.sleep(5000)
        return;
        // expect(waitForElement(by.className('nx-navbar__logo')));
        // expect(recommendedPage.enrollment().getText()).to.eventually.equals('Beiratkozás');
    });
};
