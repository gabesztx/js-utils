import NetworkError from 'utils/NetworkError';
import { UPLOAD_PROGRESS } from 'utils/Enums';
import { API_BASE_URL } from './Config';

/**
 * @class XMLHttpService
 * @classdesc Service for XMLHttp requests
 */
class XMLHttpService {
  /**
   * Make API Request
   * @param {String} path - path to query
   * @param {String} method - method, "GET", "POST", "PUT", "DELETE", etc.
   * @param {Blob} file - File to be uploaded
   * @returns {Promise<any>}
   * @private
   */
  async _makeRequest(path, method, file) {
    try {
      if (file.type !== 'application/zip') {
        throw new Error(`Wrong format, should be zip, and the file type is: ${file.type}`);
      }
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-undef
        const xhr = new XMLHttpRequest();
        // eslint-disable-next-line no-undef
        const formData = new FormData();
        const url = `${API_BASE_URL}${path}`;
        formData.append('model', file);
        xhr.open(method, url, true);
        xhr.upload.onprogress = this._progressHandler;
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(xhr.statusText);
            throw new NetworkError(xhr.status, xhr.statusText);
          }
        };
        xhr.onerror = () => {
          reject(xhr.statusText);
          throw new NetworkError(xhr.status, xhr.statusText);
        };
        xhr.send(formData);
      });
    } catch (error) {
      // TODO: common error handling
      throw error;
    }
  }

  /**
   * Handling upload progress
   * @param {Object} event - Progress event
   * @returns {boolean}
   * @private
   */
  _progressHandler(event) {
    const progress = Math.round((event.loaded / event.total) * 100);
    const uploadEvent = new CustomEvent(UPLOAD_PROGRESS, { detail: progress });
    return window.dispatchEvent(uploadEvent);
  }

  /**
   * Upload file via XMLHttp request
   * @param {String} path - Upload path
   * @param {Blob} file - File to be uploaded
   * @returns {Promise<any>}
   */
  uploadFile(path, file) {
    return this._makeRequest(path, 'POST', file);
  }
}

export const xmlHttpService = new XMLHttpService();
