/**
 * @class NetworkError
 * @classdesc Network error class
 */
export default class NetworkError extends Error {
  /**
   * @constructor
   * @param {Number} status - Network status code
   * @param {String} response - Response string if available
   */
  constructor(status, response) {
    super();
    this.status = status;
    this.response = response;
    console.error(`Network error! Status: ${status}, Response: `, response);
  }
}
