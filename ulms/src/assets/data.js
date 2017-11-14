// lms base configuration
var lmsConfiguration = (function () {
    'use strict';
    //TODO: varibles
    var baseUrlParam = 'http://localhost:4200/';
    // var baseUrlParam = 'https://devhome.nexiuslearning.com/ulms/dist/';
    var _baseUrl = baseUrlParam;
    var _idpBaseUrl = 'https://devaccount.nexiuslearning.com/';
    var _playerBaseUrl = 'https://devplayer.nexiuslearning.com/';
    var _idpApiBaseUrl = _idpBaseUrl + 'api/';
    var _baseApiUrl = 'https://devhome.nexiuslearning.com/' + 'api/';
    var _idpApiTokenUrl = _idpApiBaseUrl + 'usertoken?realm=' + _idpBaseUrl;
    var _idpApiRetryCount = '3';
    var _defaultPageSize = '10';
    var _urlCourseList = '/courses';
    var _urlCourseDetailPage = '/courses/details';
    var _urlApiCourseRegister = _baseApiUrl + 'courseregistrations';
    var _urlApiFeed = _baseApiUrl + 'feeds';
    var _urlLogout = _idpBaseUrl + 'account/logoff';
    var _playerAppId = '647DF46D-2630-45E7-B14A-550688351DF1';
    var _version = '17.10.0.0';
    var _versionStamp = '171000';
    var _localeCodes = 'hu-HU,en-US';
    var _defaultLocaleCode = 'hu-HU';
    var _adminResourcesPath = '/Scripts/admin/resources/';

    return {
        // current site original base url, with protocol
        baseUrl: _baseUrl,

        // current site original base url, with protocol and 'api/'
        baseApiUrl: _baseApiUrl,

        // idp server base url
        idpBaseUrl: _idpBaseUrl,

        // player base url
        playerBaseUrl: _playerBaseUrl,

        // idp api base url
        idpApiBaseUrl: _idpApiBaseUrl,

        // idp api user token url
        idpApiTokenUrl: _idpApiTokenUrl,

        // idp api retry count
        idpApiRetryCount: _idpApiRetryCount,

        // default page size
        defaultPageSize: _defaultPageSize,

        // course listing page
        urlCourseList: _urlCourseList,

        // course detail page
        urlCourseDetailPage: _urlCourseDetailPage,

        // course registration url
        urlApiCourseRegister: _urlApiCourseRegister,

        // feed url
        urlApiFeed: _urlApiFeed,

        // logut url
        logoutUrl: _urlLogout,

        // player application id
        playerAppId: _playerAppId,

        // application version number
        version: _version,

        // application version number stamp
        versionStamp: _versionStamp,

        // application supported l10n codes
        localeCodes: _localeCodes,

        // application default l10n code
        defaultLocaleCode: _defaultLocaleCode,

        // admin resources locataion
        adminResourcesPath: _adminResourcesPath
};
})();
