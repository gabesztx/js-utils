import {browser, element, by} from 'protractor';
import { expect } from "../support/expect";
import {InvitesPage} from '../../page_objects/invites.page';

export = function invitesSteps() {
    let page;

/*    this.Given(/^hogy a Mailinator oldalán állok$/, function () {
        return page = InvitesPage.get()
    });
    this.When(/^beìrom a felhasználó email címét$/, function () {
        return page.typeEmailInput();
    });
    this.Then(/^belépek a Mailinator oldalára$/, function () {
        expect(element(by.css('.header_logo_text')).isDisplayed())
    });*/

    /* Felhasználó regisztrálás oldal */
  /*  this.Given(/^hogy a regisztrációs oldalon állok/, function () {
        // return registerPage = RegisterPage.get()
    });*/
/*    this.When(/^megadom a felhasználói adatokat$/, function () {
        // return registerPage.typeRegisterInput();
        // return registerPage = RegisterPage.get()
    });
    this.Then(/^látszódik a Nexius logo$/, function () {
        expect(element(by.css('#topLogo')).isDisplayed())
    });*/

    /* this.When(/^megadom a felhasználói adatokat$/, function () {
         return registerPage.typeRegisterInput();
     });*/
};

// return browser.get("http://vividcortex.github.io/angular-recaptcha/");