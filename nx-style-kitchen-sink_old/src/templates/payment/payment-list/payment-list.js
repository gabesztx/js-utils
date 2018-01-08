$(function () {
    setTimeout(function () {
        var paymentItemNum = $('.list-item').length;
        var paymentItemHalf = paymentItemNum / 2;
        var paymentDesktopItems = $('.list-item').slice(0, paymentItemHalf);
        var paymentMobilItems = $('.list-item').slice(paymentItemHalf, paymentItemNum);
        var itemNumber = 0;
        var addItem = setInterval(function () {
            var itemDesktop = paymentDesktopItems.eq(itemNumber);
            var itemMobil = paymentMobilItems.eq(itemNumber);
            itemDesktop.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    const item = $(e.currentTarget);
                    item
                        .removeClass('animated fadeInUp')
                        .addClass('fadeInUpDown')
                        .off(e);
                });

            itemMobil.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function (e) {
                    const item = $(e.currentTarget);
                    item
                        .removeClass('animated fadeInUp')
                        .addClass('fadeInUpDown')
                        .off(e);
                });

            itemDesktop.addClass('animated fadeInUp');
            itemMobil.addClass('animated fadeInUp');
            itemNumber++;

            if (itemNumber == paymentItemHalf) {
                clearInterval(addItem)
            }
        }, 80)
    })
});
