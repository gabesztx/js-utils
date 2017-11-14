import randomstring from 'randomstring'

import { readFile, writeFile } from './fileHandler';
import { getCookie, setCookie } from './cookieHandler';

/**
 *  Generate user id
 *  @returns {String}
 */
const generateUserId = () => randomstring.generate();

/**
 *  Get userData from JSON file
 *  @return Promise userData
 */
const getUserDataFromJSON = () => {
    return new Promise((resolve, reject) => {
        readFile().then(
            (userData) => resolve(userData),
            () => console.log('Error')
        );
    });
};

/**
 *  Set userData in JSON file
 *  @param userDataObj
 *  @return Promise userData
 */
const setUserDataToJSON = (userDataObj) => {
    //TODO: user object szerkezet létrehozázsa
    return new Promise((resolve, reject) => {
        writeFile(Object.assign(userDataObj, {[generateUserId()]: {}})).then(
            (userData) => resolve(userData),
            () => console.log('Error')
        );
    });
};

/**
 *  Check user
 *  @param req
 *  @param res
 */
const checkUser = (req, res) => {
    if (!getCookie(req)) {
        console.log('Nincs cookie');
        registerUser();
        // console.log(`"${tag}"`)
        return;
    }

    console.log('Van cookie')
    // console.log('checkUser', )
};

/**
 *  Register user
 */
async function registerUser() {
    const userDataObj = await getUserDataFromJSON();
    console.log('userDataObj: ', userDataObj);
    const userDataObjNext = await setUserDataToJSON(userDataObj);
    console.log('userDataObjNext: ', userDataObjNext)
    //TODO: cookiet lerakni
}

export {
    checkUser,
    getUserDataFromJSON,
    setUserDataToJSON
};