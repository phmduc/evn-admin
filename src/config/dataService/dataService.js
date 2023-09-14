import axios from 'axios';
import { getItem } from '../../utility/localStorageControl';

const API_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}`;

const client = axios.create({
  baseURL: API_ENDPOINT,
});

class DataService {
  static get(path = '') {
    return client({
      method: 'GET',
      url: path,
    });
  }

  static post(path = '', data = {}) {
    return client({
      method: 'POST',
      url: path,
      data,
    });
  }

  static patch(path = '', data = {}) {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
    });
  }

  static put(path = '', params = {}, data = {}) {
    return client({
      method: 'PUT',
      url: path,
      params: params,
      data,
    });
  }

  static delete(path = '') {
    return client({
      method: 'DELETE',
      url: path,
    });
  }
}

/**
 * axios interceptors runs before and after a request, letting the developer modify req,req more
 * For more details on axios interceptor see https://github.com/axios/axios#interceptors
 */
client.interceptors.request.use((config) => {
  // do something before executing the request
  // For example tag along the bearer access token to request header or set a cookie
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = { ...headers, Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXNlcnZlci5xdXlkYXV0dW5vaWJvZXZuLmNvbSIsImlhdCI6MTY5Mzg4MzAzNiwibmJmIjoxNjkzODgzMDM2LCJleHAiOjE4NTE1NjMwMzYsImRhdGEiOnsidXNlciI6eyJpZCI6MSwiZGV2aWNlIjoiIiwicGFzcyI6ImIwMDVjZTNkZWJmZDkyYTZiNzRjZTg4MTEwMmEyNWE1In19fQ.lFGZzbNxhV688-Rykl7grewCcepnhrwBMkYwRlpqrmE` };

  return requestConfig;
});


export { DataService };
