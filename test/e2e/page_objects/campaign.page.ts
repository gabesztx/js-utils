import { browser } from "protractor";

export class CampaignPage{

    static getWithoutLogin(){
        browser.get('https://testhome.nexiuslearning.com/campaign/launch/?campaignId=1bbc5291-3dc8-4e14-b94d-4f753a9d12fd&isOrganizationRequired=True&orgFilter=JTI1NUIlMjU3QiUyNTIyb3BlcmF0b3IlMjUyMiUyNTNBJTI1MjJpbiUyNTIyJTI1MkMlMjUyMnZhbHVlJTI1MjIlMjUzQSUyNTIyQ2l2aWwlMjUyMCUyNUMzJTI1QTlzJTI1MjBlZ3klMjVDMyUyNUE5YiUyNTIwc3plcnZlemV0JTI1MjIlMjUyQyUyNTIycHJvcGVydHklMjUyMiUyNTNBJTI1MjJjYXRlZ29yeSUyNTIyJTI1N0QlMjU1RA==');
        return new CampaignPage();
    }
}