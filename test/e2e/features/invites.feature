# language: hu
@smoke @focus
Jellemző: Kurzus meghvó beíratkozás elfogadása

  Forgatókönyv: Bejelentkezés a kurzus oldalra
    Adott hogy a login oldalon állok
    És bejelentkezek az oldalra
    Akkor látnom kell a Nexius logot

  Forgatókönyv: Ajánlott kurzusok
    Adott hogy az ajánlat oldalon állok
    Akkor látom az ajánlott listát

  Forgatókönyv: Ajánlott kurzus elutasítása
    Adott hogy rákattintok a lenyíló menüre
    És rákattintok az elutasít gombra
    És popupban rákattintok az igen gombra
    És meghívó státusz oldalon rákattintok a vissza a kurzusok gombra
    Akkor látom az ajánlott listát



#  Forgatókönyv: Ajánlott kurzus beíratás
#    Adott hogy rákattintok az első kurzus beiratkozó gombjára
#    És látom a sikeres oldalt
#    És rákattintk az elfogdásra
#    Akkor visszakerülök a kurzus lista oldalra
