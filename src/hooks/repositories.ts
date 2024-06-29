import { Api, useApi } from './api';
import {
    Mashup,
    MockMashup,
    MockPlaylist,
    MockUser,
    Playlist,
    User,
    mashupFromObject,
    playlistFromObject,
    userFromObject
} from '../utils/types';
import { useState } from 'react';

export abstract class AbstractRepository<T> {
    async get(id: number): Promise<T> {
        return this.getMany([id]).then((r) => r[0]);
    }

    // eslint-disable-next-line no-unused-vars
    abstract getMany(ids: number[]): Promise<T[]>;
}

export abstract class AbstractCachingRepository<T> extends AbstractRepository<T> {
    storage: Map<number, T>;

    constructor() {
        super();
        this.storage = new Map<number, T>();
    }

    async getMany(ids: number[]): Promise<T[]> {
        let result: (T | null)[] = [];
        let load: number[] = [];

        for (let index in ids) {
            let id = ids[index];
            let entity: T | undefined = this.storage.get(id);
            if (entity !== undefined) {
                result.push(entity);
            } else {
                result.push(null);
                load.push(id);
            }
        }

        if (load.length === 0) {
            let a: any = result;
            let r: T[] = a;
            return Promise.resolve(r);
        }

        return this.loadMany(load).then((loaded) => {
            let loadedIndex = 0;
            for (let index in result) {
                if (result[index] === null) {
                    result[index] = loaded[loadedIndex];
                    loadedIndex++;
                }
            }

            let a: any = result;
            return a;
        });
    }

    getIfLoaded(ids: number[]): T[] | undefined {
        let result: T[] = [];

        for (let id of ids) {
            let entity: T | undefined = this.storage.get(id);
            if (entity !== undefined) {
                result.push(entity);
            } else {
                return undefined;
            }
        }

        return result;
    }

    async load(id: number): Promise<T> {
        return this.loadMany([id]).then((r) => r[0]);
    }

    // eslint-disable-next-line no-unused-vars
    abstract loadMany(ids: number[]): Promise<T[]>;
}

export class ApiCachingRepository<T> extends AbstractCachingRepository<T> {
    api: Api;
    endpoint: string;
    // eslint-disable-next-line no-unused-vars
    mapper: (object: any) => T;
    mockEntity: T;

    // eslint-disable-next-line no-unused-vars
    constructor(api: Api, endpont: string, mapper: (object: any) => T, mockEntity: T) {
        super();
        this.api = api;
        this.endpoint = endpont;
        this.mapper = mapper;
        this.mockEntity = mockEntity;
    }

    async loadMany(ids: number[]): Promise<T[]> {
        return this.api.get(this.endpoint, { id: ids.join() }).then((response) => {
            if (response.status == 200) {
                return response.data.response.map(this.mapper);
            }

            return ids.map(() => this.mockEntity);
        });
    }
}

export class UserApiCachingRepository extends ApiCachingRepository<User> {
    usernameStorage: Map<string, User>;

    constructor(api: Api, usernameStorage: Map<string, User>) {
        super(api, 'user/get_many', userFromObject, new MockUser());

        this.usernameStorage = usernameStorage;
    }

    async loadByUsername(username: string): Promise<User> {
        let user = this.usernameStorage.get(username);
        if (user !== undefined) {
            return Promise.resolve(user);
        }

        return this.api.get(this.endpoint, { username: username }).then((response) => {
            let mappedUser = this.mapper(response.data.response);
            this.usernameStorage.set(mappedUser.username, mappedUser);
            return mappedUser;
        });
    }

    async loadMany(ids: number[]): Promise<User[]> {
        return super.loadMany(ids).then((users) => {
            for (let user of users) {
                this.usernameStorage.set(user.username, user);
            }

            return users;
        });
    }
}

const staticMashupStorage = new Map<number, Mashup>();
export function useMashupCache(): ApiCachingRepository<Mashup> {
    let repository = new ApiCachingRepository(
        useApi(),
        'mashup/get',
        mashupFromObject,
        new MockMashup()
    );
    repository.storage = staticMashupStorage;
    return repository;
}

const staticPlaylistStorage = new Map<number, Playlist>();
export function usePlaylistCache(): ApiCachingRepository<Playlist> {
    let repository = new ApiCachingRepository(
        useApi(),
        'playlist/get',
        playlistFromObject,
        new MockPlaylist()
    );
    repository.storage = staticPlaylistStorage;
    return repository;
}

const staticUserStorage = new Map<number, User>();
const staticUserUsernameStorage = new Map<string, User>();
export function useUserCache(): UserApiCachingRepository {
    let repository = new UserApiCachingRepository(useApi(), staticUserUsernameStorage);
    repository.storage = staticUserStorage;
    return repository;
}

export interface RepositoryResponse<T> {
    data: T;
    loading: boolean;
    error: boolean;
}

export function useRepositoryRequest<R>(
    dataInitialValue: R,
    promise: Promise<R>
): RepositoryResponse<R> {
    const [data, setData] = useState<R>(dataInitialValue);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useState(() => {
        promise
            .then((result) => setData(result))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    });

    return {
        data,
        loading,
        error
    };
}

export function useRepositoryGetMany<T>(
    repository: AbstractRepository<T>,
    ids: number[]
): RepositoryResponse<T[]> {
    return useRepositoryRequest([], repository.getMany(ids));
}
