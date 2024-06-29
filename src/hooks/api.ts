import axios from 'axios';

const apiBaseUrl = 'https://api.smashup.ru';
const token = 'null';

export class Api {
    async get(endpoint: string, queryParams: object) {
        return axios.get(endpoint, {
            baseURL: apiBaseUrl,
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: queryParams,
            maxContentLength: 1024 * 1024
        });
    }

    async post(endpoint: string, queryParams: object, data: any) {
        return axios.post(endpoint, {
            baseURL: apiBaseUrl,
            data: data,
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
