$(function () {
    var listenerPageHeight = function () {
        var mainContent = $('.nx-main-container');
        var footerContentHeight = $('.nx-footer-container').height();
        mainContent.css('padding-bottom', footerContentHeight + 'px' );
    };
    setTimeout(function () {
        listenerPageHeight()
    });
    $(window).resize(function () {
        listenerPageHeight()
    });
});