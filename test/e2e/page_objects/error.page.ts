import { browser } from "protractor";
import { LoginPage } from "./login.page";

export class errorPage{

    static getIdpErrorPageWithoutLogin(){
        browser.get('https://testaccount.nexiuslearning.com/fsgdfagdfagadfg');
        return new errorPage;
    }

    static getLmsErrorPageWithoutLogin(){
        browser.get('https://testhome.nexiuslearning.com/fsgdfagdfagadfg');
        return new errorPage;
    }

    static get(){
        new LoginPage().login();
        browser.get('https://testhome.nexiuslearning.com/fsgdfagdfagadfg');
        return new errorPage;
    }
}