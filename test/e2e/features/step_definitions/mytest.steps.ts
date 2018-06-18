/*
 * filename: google_search_steps.ts
 * original and more docs:
 * https://docs.google.com/document/d/1dV5xMrW5ZiALNgtSc5-7NDNqP1L6bAC5zjnprTs8rhI/edit#bookmark=id.mx5tt4qa14ic
 *
 * A step definiton osztályokban kötjük össze a feature-öket a page
 * object modelekkel.
 */

import { $$, by, browser, $ } from "protractor";
import { expect } from "../../../../protractor/e2e/features/support/expect";
import { waitForElement } from "../../../../protractor/e2e/features/support/wait_for_element";
import { GooglePage } from "../../../../protractor/e2e/page_objects/google_page";
import {MytestPage} from '../../page_objects/mytest.page';

export = function myTestSteps() {

    /**
     * A feature első sora lesz az inicializálás.
     */
    let page;

    this.Given(/^hogy a Google oldalán állok Mailinator$/, function() {

        /**
         * A gherkin kifejezésnek adjuk át a google kereső oldalának
         * megnyitását, azaz a GooglePage meghívását.
         */
        return (page = MytestPage.get());
    });

    /**
     * A feature második sorában megfogalmazzuk, hogy rákeresünk egy
     * kifejezésre, tehát ez maga tesztelendő funkció tesztlépése.
     */
    this.When(/^rákeresek egy kifejezésre Mailinator$/, function() {

        /**
         * Ez logikailag a page object osztályben megírt googleSearch()
         * metódusnak felel meg.
         * - A keresendő kifejezés beíródik a keresőmezőbe,
         * - és az enter lenyomásával lefut a keresés.
         */
        return page.googleSearchMytestPage();
    });

    /**
     * A feature utolsó sora tartalmazza az elvárt eredmény megfogalmazását.
     * Ezért a Then szekcióba kerülnek a tesztlépések utáni ellenőrzések.
     */
    this.Then(/^meg kell jelennie a találati listában Mailinator$/, function() {

        /**
         * Egy expect-et készítettünk a teszthez, amelyben a google találati
         * lista első elemének szövegét (innerTest) olvassuk fel, majd
         * hasonlítjuk össze az általunk várt szöveggel (ami a Cucumber).
         * Ha a találati lista első elemének szövege megegyezik az általunk
         * elvárttal, akkor sikeres tesztfutást könyvelhetünk el.
         * Ha a két szöveg nem egyezik, a teszt sikertelen lesz.
         * A log hibaüzenetből megtudhatjuk, hogy mit is találtunk a google
         * találati első elemén a Cucumber helyett.
         */
        expect($(".rc .r").getText()).to.eventually.equal("Cucumber");
    });
};
