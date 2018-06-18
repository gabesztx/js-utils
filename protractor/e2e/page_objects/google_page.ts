/**
 * filename: google_page.ts
 * original and more docs:
 * https://docs.google.com/document/d/1dV5xMrW5ZiALNgtSc5-7NDNqP1L6bAC5zjnprTs8rhI/edit#bookmark=id.pg8rb5ip2tt8
 *
 * A Page Object Model forrásai taralmazzák a tesztelés során használni
 * kívánt weboldal elemek definícióit.
 */
import { browser, element, by, Key } from "protractor";
import { BADFLAGS } from "dns";
import { S_IRGRP } from "constants";

/**
* === Osztálydefiníció ===
* Létrehozzuk a GooglePage statikus osztályt, ami tartalmazza azt az URL-t,
* amin a további page objecteket szeretnénk definiálni.
* A futtatáskor ezen az URL-en fogja keresni a definiált
* weboldal elemeket a protractor.
* Az osztály és objektum jellemzői:
* - az osztály: GooglePage
* - az objektum: az osztályból "new"-val létrehozott példány: new GooglePage();
* - az osztályból csak a statikus változók és metódusok érhetőek el.
* - az objektum képes saját adatokat eltárolni a belső változóiban.
*/
export class GooglePage {

   /**
    * Miért kell a static?
    * - Azért, mert az osztályban magában van eltárolva, hogyan jön létre
    *   belőle egy példány.
    * - Jelen esetben elnavigálunkt egy weboldalra, majd amikor ez
    *   megtörtént, akkor létrehozunk egy új objektum példányt az osztályból.
    */
   static get(){
       browser.get('https://www.google.com/')
       return new GooglePage();
   };

   /**
    * === Mezők, gombok ===
    * Az oldalon megjelenő gombokat, mezőket, drop-down-okat,
    * radio gombokat stb (tehát mindent, ami a weboldalon megjelenik)
    * a továbbiakban összefoglaló néven komponensként említjük.
    * A google.com weboldalról egy komponenst szeretnék használni
    * az automatizálás során.
    * Ez a google kereső mezője, ami itt inputField névvel hoztunk létre.
    */
   public inputField;
   public innerText;
   public valueText;

  /**
   * A komponenseket selectorokkal tudjuk "elkapni". Ennek egyik előnye,
   * hogy a tesztelés felbontás és böngésző független tud maradni
   * (nem koordináta/pixel szerint "kattintunk").
   * Egy komponens selektorját a böngésző DOM-jából tudjuk kinyerni
   * (Chrome böngészőben F12 megnyomása után az Element tabon látható
   * HTML kódból).
   * A azonosíthatjuk a komponenseket (id, name, css, xpath) segítségével.
   * Ha nincs id vagy name property-je egy komponensek, akkor a css javasolt.
   * Jelen példában a kereső mező rendelkezik id-val.
   */
   constructor(){
       this.inputField = element(by.id("lst-ib"));
       this.innerText = element(by.css('.Q8LRLc'));
       this.valueText = element(by.name("btnK"));
   }

   /**
    * === Az oldalon értelmezett funkciók metódusai ===
    * Ha definiáltuk az oldalon található számunkra fontos komponenseket,
    * akkor létrehozhatjuk azt a metódust [googleSearch], amiben a
    * komponenseken keresztül használjuk a tesztelni kívánt funkciókat.
    */
   public async googleSearch(){

       /**
        * Itt ez maga a keresés. Tehát a keresés mezőt [inputField] használjuk
        * a keresés megvalósítására. Ehhez létre kell hoznunk egy publikus
        * metódust, a googleSearch()-öt.
        * Ezen belül az inputField-re kiadunk egy utasítást: sendKeys(),
        * aminek segítségével karaktereket tudunk bevinni a mezőbe.
        * Ez itt a Cucumber.
        * A karakterlánc végén egy Enter lenyomását is megadjuk,
        * ezzel indítva a keresést.
        *
        * A komponensekre kiadható alaputasíatások:
        * - sendKeys() - szöveg bevitel, vagy billentyű(parancs) lenyomása
        * - click() - kattintás és azok típusai (bal, jobb, dupla)
        * Részletes lista a protractor webDriver action-ökről:
        * https://www.protractortest.org/#/api?view=webdriver.WebDriver.prototype.actions
        *
        * Lehetőségünk van az egyes komponensek értékeinek felolvasására.
        * - Egy inner text a getText(),
        * - egy value pedig a getAttribute() függvénnyel olvasható fel.
        */
       this.inputField.sendKeys('cucumber', Key.ENTER);
   }
};
