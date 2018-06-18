import { browser } from "protractor";

export class DisplayGroupDetailPage{

    static getWithoutLogin(){
        browser.get('https://testhome.nexiuslearning.com/plans/detail/2a92431b-990a-479a-a835-8910bb1c77e0');
        return new DisplayGroupDetailPage;
    }
}