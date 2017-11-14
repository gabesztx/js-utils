import path from 'path';
import jsonfile from 'jsonfile';

const PATH = path.resolve(__dirname, '../data/user-data.json');

/**
 *  Write data in JSON file
 *  @param {Object} data
 *  @return {Promise}
 */
const writeFile = (data) => {
    return new Promise((resolve, reject) => {
        jsonfile.writeFile(PATH, data, {spaces: 2}, (err) => {
            resolve(data);
        });
    });
};

/**
 *  Return JSON file data
 *  @return {Promise} data
 */
const readFile = () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile(PATH, (err, data) => {
            resolve(data);
        });
    });
};


export { writeFile, readFile };

