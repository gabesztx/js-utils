import {by, element, browser, $$} from 'protractor';
import {InvitesPage} from '../../page_objects/invites.page';
import {RecommendedPage} from '../../page_objects/recommended.page';
import {Invite_successPage} from '../../page_objects/invite_success.page';
import {expect} from '../support/expect';
import {waitForElement} from '../../page_objects/nexius.page';

export = function invitesSteps() {

    const invitePage = new InvitesPage();
    const recommendedPage = new RecommendedPage();
    const invite_successPage = new Invite_successPage();

    this.When(/^hogy a login oldalon állok$/, function () {
        console.log('----- hogy a login oldalon állok ------');
        return invitePage.getPage();
    });
    this.When(/^bejelentkezek az oldalra$/, function () {
        console.log('----- bejelentkezek az oldalra ------');
        invitePage.loginPage();
        return waitForElement(by.css('.nx-navbar__logo'));
    });
    this.Then(/^látnom kell a Nexius logot$/, function () {
        console.log('----- látnom kell a Nexius logot ------');
        expect(element(by.css('.nx-navbar__logo')).isPresent()).to.eventually.equals(true)
    });


    this.When(/^hogy az ajánlat oldalon állok$/, function () {
        console.log('----- hogy az ajánlat oldalon állok ------');
        recommendedPage.navigatePage();
        return waitForElement(by.css('.courseListItemContainer'));
    });
    this.Then(/^látom az ajánlott listát$/, function () {
        console.log('----- látom az ajánlott listát ------');
        expect(recommendedPage.courseListItems.isPresent()).to.eventually.equals(true)
    });


    this.When(/^hogy rákattintok az első kurzus beiratkozó gombjára$/, function () {
        console.log('----- hogy rákattintok az első kurzus beiratkozó gombjára ------');
        recommendedPage.enrollmentClickHandler();
        return waitForElement(by.id('topLogo'));
    });

    this.When(/^látom a sikeres oldalt$/, function () {
        console.log('----- látom a sikeres oldalt ------');
        return expect(invite_successPage.pageIcon.isPresent()).to.eventually.equals(true);
    });

    this.When(/^rákattintk az elfogdásra$/, function () {
        console.log('----- rákattintk az elfogdásra ------');
        invite_successPage.clickHandler();
        return waitForElement(by.css('.nx-navbar__logo'));
    });
    this.Then(/^visszakerülök a kurzus lista oldalra$/, function () {
        console.log('----- visszakerülök a kurzus lista oldalra ------');
        expect(element(by.css('.nx-navbar__logo')).isPresent()).to.eventually.equals(true);
        browser.sleep(2500);
        browser.get('https://testaccount.nexiuslearning.com/account/logoff');
        browser.sleep(3000);

        // invite_successPage.clickHandler();
        // return waitForElement(by.css('.nx-navbar__logo'));
    });



/*    this.When(/^hogy rákattintok a lenyíló menüre$/, function () {
        console.log('----- hogy rákattintok a lenyíló menüre ------');
        recommendedPage.dropDownClick();
        return waitForElement(by.css('.dropdownMenuContent'));
    });

    this.When(/^rákattintok az elutasít gombra/, function () {
        console.log('----- rákattintok az elutasít gombra ------');
        recommendedPage.refuseClick();
        return waitForElement(by.css('.modal-dialog'));
    });

    this.When(/^popupban rákattintok az igen gombra/, function () {
        console.log('----- popupban rákattintok az igen gombra ------');
        recommendedPage.refuseAccept();
        return waitForElement(by.id('topLogo'));
    });

    this.When(/^meghívó státusz oldalon rákattintok a vissza a kurzusok gombra/, function () {
        console.log('----- meghívó státusz oldalon rákattintok a vissza a kurzusok gombra ------');
        invite_successPage.clickHandler();
        return waitForElement(by.css('.nx-navbar__logo'));
    });*/

};

// Text: expect(element(by.css('.pageTitle')).getText()).to.eventually.equals('Aktuális kurzusaim')