import { CampaignPage } from "../../page_objects/campaign.page";

export = function campaignSteps(){
    this.When(/a kampány regisztrációs oldalon állok bejelentkezés nélkül$/, function(){
        return CampaignPage.getWithoutLogin();
    });
};