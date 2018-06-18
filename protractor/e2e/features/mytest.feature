# language: hu
@focus
Jellemző: Google keresés automatizálása Mailinator

  Forgatókönyv: Google keresés Mailinator

# ADOTT = Given.
# Ez a mondat (az Adott utáni string) a google_search_steps-ben fog
# megjelenni a 10. sorban. Ida taroznak azok a lépések, amik a tesztelendő
# funkció elérésig szükségesek.
# Pl: tananyag publikálás tesztelés esetén ennek a résznek kell tartalmaznia
# a belépés, tananyaglista megnyitás, megfelelő tananyag kikeresése lépéseket.
# Ezek itt mind inicializálásnak tekinthetőek.
    Adott hogy a Google oldalán állok Mailinator

# AMIKOR = When.
# A google_search_steps 35. sorában kerül összekötésre a metódusokkal.
# Ez a mondat fogja tartalmazni a tesztelendő funkció tesztelésének lépéseit.
# A fenti példánál maradva magát a publikálás folyamatához szükséges lépéseket.
    Amikor rákeresek egy kifejezésre Mailinator

# AKKOR = Then.
# A google_search_steps 49. sorában jelenik meg.
# Ebben a mondatban nem végzzük tesztelépések végrehajtását,
# csak ellenőrzést (assert vagy expect).
# Az Adott és az Amikor sorok leírása, tesztelépései azt a célt szolgálják,
# hogy az Akkor sorban előállt állapotra már csak ellenőrzéseket írjunk.
    Akkor meg kell jelennie a találati listában Mailinator