

const COOKIE_NAME = 'notify-token';

/**
 *  Set cookie
 *  @param {Object} res
 *  @param {String} userId
 */
const setCookie = (res, userId) => {
    res.cookie(COOKIE_NAME, userId, { expire: 360000 + Date.now() });
};

/**
 *  Get cookie
 *  @param {Object} req
 *  @return {String}
 */
const getCookie = (req) => req.cookies[COOKIE_NAME];


/**
 *  Delete cookie
 *  @param {Object} res
 */
const clearCookie = (res) => {
    res.clearCookie(COOKIE_NAME);
};




export {
    setCookie,
    getCookie,
    clearCookie,
};
