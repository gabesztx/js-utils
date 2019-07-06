import NetworkError from 'utils/NetworkError';
import { API_BASE_URL } from './Config';

/**
 * @class HttpService
 * @classdesc Service for Http requests
 */
class HttpService {
  /**
   * Make API Request
   * @param {String} path - path to query
   * @param {Object} options - options config
   * @returns {Promise<any>}
   * @private
   */
  async _makeRequest(path, options) {
    try {
      const url = `${API_BASE_URL}${path}`;
      const response = await fetch(url, options);
      const text = await response.text(); // Parse it as text
      const data = text.length ? JSON.parse(text) : {}; // Try to parse it as json
      if (response.status >= 400 || response.status < 200) {
        throw new NetworkError(response.status, data);
      }
      return data;
    } catch (error) {
      // TODO: common error handling
      throw error;
    }
  }

  /**
   * Get from API endpoint
   * @param {String} path - path to query
   * @returns {Promise<any>}
   */
  async getRequest(path) {
    const options = {
      method: 'GET',
    };
    return this._makeRequest(path, options);
  }

  /**
   * Post to API endpoint
   * @param {String} path - path to query
   * @param {Object} data - data to send
   * @param headers
   * @returns {Promise<any>}
   */
  async postRequest(path, data, headers = null) {
    const options = {
      method: 'POST',
      headers: headers || {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return this._makeRequest(path, options);
  }

  /**
   * Post url encoded to API endpoint
   * @param {String} path - path to query
   * @param {Object} data - data to send
   * @returns {Promise<any>}
   */
  async postURLEncodedRequest(path, data) {
    // Encode the data
    const searchParams = Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: searchParams,
    };
    return this._makeRequest(path, options);
  }

  /**
   * Post to API endpoint
   * @param {String} path - path to query
   * @returns {Promise<any>}
   */
  async deleteRequest(path) {
    const options = {
      method: 'DELETE',
    };
    return this._makeRequest(path, options);
  }

  /**
   * Patch to API endpoint
   * @param {String} path - path to query
   * @param {Object} data - data to delete
   * @returns {Promise<any>}
   */
  async patchRequest(path, data) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return this._makeRequest(path, options);
  }
}

export const httpService = new HttpService();
