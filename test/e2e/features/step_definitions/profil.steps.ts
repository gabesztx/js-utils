import { browser, by, $$, element } from "protractor";
import { waitForElement } from "../../page_objects/nexius.page";
import { expect } from "../support/expect";
import { ProfilPage } from "../../page_objects/profil.page";
import { LoginPage } from "../../page_objects/login.page";

export = function profilSteps(){
    let page;

    this.When(/a profil oldalon állok$/, function(){
        return page = ProfilPage.get();
    });

    this.Then(/^látnom kell az adataimat$/, function(){
        expect(page.fullName.getAttribute('value')).to.eventually.equals('aaa aaaa ___ a 1');
        expect(element(by.id('EmailAddress')).getAttribute('value')).to.eventually.equals('aaaaa12@mailinator.com');
        expect(element(by.id('country')).getAttribute('value')).to.eventually.equals('Anguilla');
        expect($$('.form-group.col-sm-7.col-xs-12:not(.inlineFields)').count()).to.eventually.equals(2);
        return true;
    });
}