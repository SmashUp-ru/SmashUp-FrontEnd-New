import axios from 'axios';
import Cookies from 'js-cookie';

const apiBaseUrl = 'https://api.smashup.ru';

export class Api {
    async get(endpoint: string, queryParams: object = {}) {
        let token = Cookies.get('token');

        return axios.get(endpoint, {
            baseURL: apiBaseUrl,
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: queryParams,
            maxContentLength: 1024 * 1024
        });
    }

    async post(endpoint: string, data: any = {}, queryParams: object = {}) {
        let token = Cookies.get('token');

        console.log(apiBaseUrl, endpoint);

        return axios.post(endpoint, data, {
            baseURL: apiBaseUrl,
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: queryParams,
            maxContentLength: 1024 * 1024,
            maxBodyLength: 50 * 1024 * 1024
        });
    }
}

export function useApi(): Api {
    return new Api();
}
