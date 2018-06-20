import {by, element, browser} from 'protractor';
import {InvitesPage} from '../../page_objects/invites.page';
import {RecommendedPage} from '../../page_objects/recommended.page';
import {expect} from "../support/expect";
import {waitForElement} from "../../page_objects/nexius.page";

export = function invitesSteps() {
    const invitePage = new InvitesPage();
    const recommendedPage = new RecommendedPage();

    this.When(/^hogy a login oldalon állok$/, function () {
        return invitePage.getPage();
    });

    this.When(/^bejelentkezek az oldalra$/, function () {
        return invitePage.loginPage();
    });

    this.Then(/^látnom kell a Nexius logot$/, function () {
        expect(waitForElement(by.id('nexius-logo')))
    });

    this.Then(/^látom az ajánlott listát$/, function () {
        const recommendedList = element.all(by.css('.courseListItemContainer'));
        expect(recommendedList.count()).to.eventually.equal(1);
    });
    this.When(/^hogy az ajánlat oldalon állok$/, function () {
        return recommendedPage.navigatePage();

    });

    this.When(/^hogy rákattintok az első kurzus beiratkozó gombjára$/, function () {
        return recommendedPage.enrollmentClickHandler();
        // expect(recommendedPage.enrollment().getText()).to.eventually.equals('Beiratkozás');
    });
};
