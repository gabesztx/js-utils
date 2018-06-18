import { $, browser } from 'protractor';
import { NexiusPage } from '../../page_objects/nexius.page';
import { expect } from '../support/expect';



export = function peldaSteps() {

    // alapállapot beállítás
    this.Given(/^I am an example$/, function () {
        return this.NexiusPage = NexiusPage.get();
    });

    this.Given(/^valami változó: ([0-9]+)$/, function (param: number) {
        console.log(param);
        return;
    });

    this.Given(/^adott valami (.*)$/, function (param: string) {
        console.log(param);
        return;
    });

    this.Given(/^adattáblával:$/, function(data) {
        console.log(data.rows());
        return;
    });

    // a cselekvés amit tesztelni akarunk
    this.When(/^I say$/, function () {
        return this.globalVar = this.NexiusPage.getHeaderText();
    });
    
    this.When(/^another one$/, function () {
        return this.globalVar = this.NexiusPage.getHeaderText();
    });

    // ellenőrzése a dolgoknak
    this.Then(/^I see$/, function () {
        return expect(this.globalVar).to.eventually.equal('Út a tudáshoz');
    });

    this.Then(/^akkor (.*)$/, function (param: string) {
        console.log(param);
        return;
    });

}