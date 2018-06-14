import { DisplayGroupDetailPage } from "../../page_objects/display_group_detail.page";

export = function displayGroupDetailSteps(){
    this.When(/az ajánlati oldalon állok bejelentkezés nélkül$/, function(){
        return DisplayGroupDetailPage.getWithoutLogin();
    });

};