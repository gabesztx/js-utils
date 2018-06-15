import { browser, element, by, Key } from "protractor";
import { LoginPage } from "./login.page";

export class ContentListPage {

    static get() {
        return new ContentListPage();
    }

    static getWithoutLogin() {
        browser.get('https://testeditor.nexiuslearning.com/nxtest/app/contents/list');
        return new LoginPage;
    };

    public searchField;

    constructor(){
        this.searchField = element(by.css('[class="mat-input-element mat-form-field-autofill-control"]'));
    }

    public searchContent(){
        this.searchField.sendKeys('Jatszoter', Key.ENTER);
        browser.sleep(500);
    }
};