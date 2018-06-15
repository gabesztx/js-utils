# filename: google_demo.feature
# original and more docs: https://docs.google.com/document/d/1dV5xMrW5ZiALNgtSc5-7NDNqP1L6bAC5zjnprTs8rhI/edit#bookmark=id.qtj7c6c176to
#
# Az automata tesztek forráskódja 3 nagy részre osztható:
#
# 1: Feature fájlok, azaz user story-k vagy használati esetek
#    (Gherkin nyelv);
#
# 2: A tesztelendő weboldal elemeit és funkcióit definiáló forrásfájl,
#    un. Page Object Model azaz POM
#    (TypeScript + Protractor)
#
# 3: A két első pontot összekapcsoló un. Step Definition források
#    (TypeScript + Protractor)
#
# A három állomány kapcsolata:
# |Feature|--->|Step Definition|<---|Page Object Model|

# language: hu

# A "@focus" tag-el szelektíven futtathatjuk a kívánt feature-öket.
# Tetszőleges számú egyedi tag-et hozhatunk létre annak érdekében,
# hogy funkcióra vagy rendszerkomponensre szűkítve tudjuk futtatni
# az azonos tag-el ellátott teszteket.
# https://github.com/cucumber/cucumber/wiki/Tags



# A Jellemzőnek (Feauture) és a Forgatókönyvnek (Scenario) rendelkezni kell
# névvel. Ez lehet egy bővebb mondatban kifejtett funkció vagy teszt
# leírás/cél.
# Az itt megadott nevek (Google keresés automatizálása; Google keresés)
# a teszt futtatása után generált Serenity log-ban megjelennek.
# A logot megtalálod a target/index.html fájlban.
Jellemző: Google keresés automatizálása

    Forgatókönyv: Google keresés

# ADOTT = Given.
# Ez a mondat (az Adott utáni string) a google_search_steps-ben fog
# megjelenni a 10. sorban. Ida taroznak azok a lépések, amik a tesztelendő
# funkció elérésig szükségesek.
# Pl: tananyag publikálás tesztelés esetén ennek a résznek kell tartalmaznia
# a belépés, tananyaglista megnyitás, megfelelő tananyag kikeresése lépéseket.
# Ezek itt mind inicializálásnak tekinthetőek.
        Adott hogy a Google oldalán állok

# AMIKOR = When.
# A google_search_steps 35. sorában kerül összekötésre a metódusokkal.
# Ez a mondat fogja tartalmazni a tesztelendő funkció tesztelésének lépéseit.
# A fenti példánál maradva magát a publikálás folyamatához szükséges lépéseket.
        Amikor rákeresek egy kifejezésre

# AKKOR = Then.
# A google_search_steps 49. sorában jelenik meg.
# Ebben a mondatban nem végzzük tesztelépések végrehajtását,
# csak ellenőrzést (assert vagy expect).
# Az Adott és az Amikor sorok leírása, tesztelépései azt a célt szolgálják,
# hogy az Akkor sorban előállt állapotra már csak ellenőrzéseket írjunk.
        Akkor meg kell jelennie a találati listában