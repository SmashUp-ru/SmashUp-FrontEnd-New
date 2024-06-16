import { Api } from './api';

export interface ICache<T> {
    // eslint-disable-next-line no-unused-vars
    get(id: number | number[]): Promise<T[]>;
}

export class UserCache implements ICache<object> {
    api: Api;

    constructor(api: Api) {
        this.api = api;
    }

    async get(id: number | number[]) {
        if (typeof id === 'number') {
            let response = await this.api.get('user/get', { id: id });
            if (response.status == 200) {
                return response.data.response;
            } else {
                // TODO: mock
                return undefined;
            }
        }

        let response = await this.api.get('user/get_many', { id: id.join() });
        if (response.status == 200) {
            return response.data.response;
        }

        return id.map(() => undefined);
    }
}
