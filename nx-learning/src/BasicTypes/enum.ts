enum color {
    RED,
    GREEN,
    BLUE
}
let colorValue: color = color.GREEN;



enum Cities {
    VALLETTA,
    BUDAPEST = 'Magyarország',
    MDINA = 'Sziget'
}
let city:Cities = Cities.MDINA;
// Ha értéket adok neki, nem hivatkozhatok rá számmal []

console.log(Cities[0]);
console.log(Cities.BUDAPEST);