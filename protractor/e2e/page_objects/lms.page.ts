import { browser, element, by, Key } from "protractor";
import { LoginPage } from "./login.page";

export class LmsPage{
    static getWithoutLogin() {
        browser.get('https://testhome.nexiuslearning.com/');
        return new LoginPage;
    };

    public launchcontentBtn;

    constructor(){
    }
    
    public playCourse(){
        this.getCourseBtn(2).click();

        browser.sleep(2000);

        this.getLaunchBtn(3).click();
    }
    
    private getCourseBtn(idx: number = 1) {
        return element.all(by.css('.activeContent .courseListItemContainer .dropdownSplitComponent .btn-left')).get(idx - 1);
    }

    private getLaunchBtn(idx: number = 1) {
        return element.all(by.css('[class="btnContent pointer launch_origin"]')).get(idx - 1);
    }
};