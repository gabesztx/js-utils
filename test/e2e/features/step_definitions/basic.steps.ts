import { by, $$, element, browser } from "protractor";
import { expect } from "../support/expect";

export = function basicSteps(){

    this.Then(/^látnom kell az új adatkezelési linket a láblécben$/, function(){
        return expect(element(by.css('a[href$="/profile/privacystatement"]')).isPresent()).to.eventually.equals(true);
    });
}