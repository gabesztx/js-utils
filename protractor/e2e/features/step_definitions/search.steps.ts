import { LoginPage } from "../../page_objects/login.page";
import { $, $$, by, browser } from "protractor";
import { expect } from "../support/expect";
import { LmsPage } from "../../page_objects/lms.page";
import { LcmsPage } from "../../page_objects/lcms.page";
import { ContentListPage } from "../../page_objects/contentlist.page";
import { waitForElement } from "../../features/support/wait_for_element";

export = function searchSteps(){
    let page;

    this.Given(/^hogy a tananyag lista oldalon állok$/, function(){
        let idpPage = LcmsPage.getWithoutLogin();
        idpPage.login();
        
        waitForElement(by.css('.ag-body-container .ag-row .ag-cell'));

        return page = new ContentListPage();
    });
    
    this.When(/^a keresőmezőben rákeresek egy tananyag nevére$/, function(){
        return page.searchContent();
    });
    
    this.Then(/^a keresett tananyagnak kell megjelennie a listában$/, function(){
        
        waitForElement(by.css('.ag-body-container .ag-row .ag-cell'));
        
        // $$('.ag-body-container .ag-row').count().then(function(number) {
        //     expect(number).to.equal(1);
        // })

        expect($$('.ag-body-container .ag-row').count()).to.eventually.equal(1);
        expect($('.ag-body-container .ag-row .ag-cell').getText()).to.eventually.equal("Jatszoter");
    });
};







