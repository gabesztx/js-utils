import jsdom from 'jsdom';
const {JSDOM} = jsdom;

// const url = 'https://ingatlan.com/szukites/kiado+lakas';
const url = 'http://ingatlan.com/lista/elado+lakas+xviii-ker+100-150-mFt+50-m2-felett';
request(url, (error, response, body) => {
    const dom = new JSDOM(body);
    const $ = require('jquery')(dom.window);

    const id = $('.listing');
    const price = $('.listing .price');
    const adress = $('.listing .listing__address');
    const link = $('.listing .listing__link');

    $.each(link, (i, val) => {
        const link = $(val).attr('href');
        console.log('LINK: ', link)
    });


    $.each(id, (i, val) => {
        const id = $(val).data('id');
        console.log('ID: ', id)
    });

    $.each(price, (i, val) => {
        const price = $(val).text();
        console.log('TITLE: ', price)
    });

    $.each(adress, (i, val) => {
        const adress = $(val).text();
        console.log('ADRESS: ', adress)
    });

    // const data = JSON.parse(body);
    // const dataString = body.toString();

});