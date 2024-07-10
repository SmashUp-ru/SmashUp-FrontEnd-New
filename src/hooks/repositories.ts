import { Api, useApi } from './api';
import {
    Mashup,
    MockMashup,
    MockPlaylist,
    MockTrack,
    MockTrackAuthor,
    MockUser,
    Playlist,
    Track,
    TrackAuthor,
    User,
    mashupFromObject,
    playlistFromObject,
    trackAuthorFromObject,
    trackFromObject,
    userFromObject
} from '../utils/types';
import React, { useEffect, useState } from 'react';

export abstract class AbstractRepository<T> {
    async get(id: number): Promise<T> {
        return this.getMany([id]).then((r) => r[0]);
    }

    // eslint-disable-next-line no-unused-vars
    abstract getMany(ids: number[]): Promise<T[]>;
}

export abstract class AbstractHolder<T> {
    abstract get(): Promise<T>;
}

export class Holder<T> extends AbstractHolder<T> {
    readonly value: T;

    constructor(value: T) {
        super();
        this.value = value;
    }

    get(): Promise<T> {
        return Promise.resolve(this.value);
    }
}

export class LoadingHolder<T> extends AbstractHolder<T> {
    readonly promise: Promise<T>;

    constructor(promise: Promise<T>) {
        super();
        this.promise = promise;
    }

    get(): Promise<T> {
        return this.promise;
    }
}

export abstract class AbstractCachingRepository<T> extends AbstractRepository<T> {
    storage: Map<number, AbstractHolder<T>>;

    constructor() {
        super();
        this.storage = new Map();
    }

    async getMany(ids: number[]): Promise<T[]> {
        if (ids.length === 0) {
            return Promise.resolve([]);
        }

        let result: (Promise<T> | null)[] = [];
        let load: number[] = [];

        for (let index in ids) {
            let id = ids[index];
            let entity: AbstractHolder<T> | undefined = this.storage.get(id);
            if (entity !== undefined) {
                result.push(entity.get());
            } else {
                result.push(null);
                load.push(id);
            }
        }

        if (load.length === 0) {
            return Promise.all(result as Promise<T>[]);
        }

        // eslint-disable-next-line no-unused-vars
        let loadPromises: ((value: T) => void)[] = [];

        for (let id of load) {
            let promise = new Promise<T>((onFulfilled) => {
                loadPromises.push(onFulfilled);
            });

            this.storage.set(id, new LoadingHolder(promise));
        }

        return this.loadMany(load).then((loaded) => {
            let loadedIndex = 0;
            for (let index in result) {
                if (result[index] === null) {
                    let value: T = loaded[loadedIndex];

                    loadPromises[loadedIndex](value);
                    result[index] = Promise.resolve(value);
                    this.storage.set(ids[index], new Holder(value));

                    loadedIndex++;
                }
            }

            return Promise.all(result as Promise<T>[]);
        });
    }

    getIfLoaded(ids: number[]): T[] | undefined {
        let result: T[] = [];

        for (let id of ids) {
            let entity: AbstractHolder<T> | undefined = this.storage.get(id);
            if (entity instanceof Holder) {
                result.push(entity.value);
            } else {
                return undefined;
            }
        }

        return result;
    }

    protected async load(id: number): Promise<T> {
        return this.loadMany([id]).then((r) => r[0]);
    }

    // eslint-disable-next-line no-unused-vars
    protected abstract loadMany(ids: number[]): Promise<T[]>;
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

    protected async loadMany(ids: number[]): Promise<T[]> {
        if (ids.length > 100) {
            let promise1 = this.getMany(ids.slice(0, 100));
            let promise2 = this.getMany(ids.slice(100));

            return Promise.all([promise1, promise2]).then((entities) => {
                return [...entities[0], ...entities[1]];
            });
        }

        return this.api.get(this.endpoint, { id: ids.join() }).then((response) => {
            if (response.status == 200) {
                return response.data.response.map(this.mapper);
            }

            return ids.map(() => this.mockEntity);
        });
    }
}

export class UserApiCachingRepository extends ApiCachingRepository<User> {
    // TODO: use AbstractHolder<User>
    usernameStorage: Map<string, User>;

    constructor(api: Api, usernameStorage: Map<string, User>) {
        super(api, 'user/get_many', userFromObject, new MockUser());

        this.usernameStorage = usernameStorage;
    }

    async getByUsername(username: string): Promise<User> {
        let user = this.usernameStorage.get(username);
        if (user !== undefined) {
            return Promise.resolve(user);
        }

        return this.api.get('/user/get', { username: username }).then((response) => {
            let mappedUser = this.mapper(response.data.response);
            this.usernameStorage.set(mappedUser.username, mappedUser);
            return mappedUser;
        });
    }

    protected async loadMany(ids: number[]): Promise<User[]> {
        return super.loadMany(ids).then((users) => {
            for (let user of users) {
                this.usernameStorage.set(user.username, user);
            }

            return users;
        });
    }
}

const staticTrackAuthorStorage = new Map<number, AbstractHolder<TrackAuthor>>();
export function useTrackAuthorCache(): ApiCachingRepository<TrackAuthor> {
    let repository = new ApiCachingRepository(
        useApi(),
        'track_author/get',
        trackAuthorFromObject,
        new MockTrackAuthor()
    );
    repository.storage = staticTrackAuthorStorage;
    return repository;
}

const staticTrackStorage = new Map<number, AbstractHolder<Track>>();
export function useTrackCache(): ApiCachingRepository<Track> {
    let repository = new ApiCachingRepository(
        useApi(),
        'track/get',
        trackFromObject,
        new MockTrack()
    );
    repository.storage = staticTrackStorage;
    return repository;
}

const staticMashupStorage = new Map<number, AbstractHolder<Mashup>>();
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

const staticPlaylistStorage = new Map<number, AbstractHolder<Playlist>>();
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

const staticUserStorage = new Map<number, AbstractHolder<User>>();
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
    promise: Promise<T>;
}

export function useRepositoryRequest<R>(
    dataInitialValue: R,
    promise: () => Promise<R>,
    failVailue: R = dataInitialValue
): RepositoryResponse<R> {
    const [data, setData] = useState<R>(dataInitialValue);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    // eslint-disable-next-line no-unused-vars
    let complete: (r: R) => void;
    let returnPromise = new Promise<R>((onFulfilled) => {
        complete = onFulfilled;
    });

    useState(() => {
        promise()
            .then((result) => {
                setData(result);
                setLoading(false);
                complete(result);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
                complete(failVailue);
            });
    });

    return {
        data,
        loading,
        error,
        promise: returnPromise
    };
}

export function useRepositoryGetMany<T>(
    repository: AbstractRepository<T>,
    idsPromise: Promise<number[]>
): RepositoryResponse<T[]> {
    return useRepositoryRequest([], () => idsPromise.then((ids) => repository.getMany(ids)));
}

export function useRepositoryStateSet<T>(
    response: RepositoryResponse<T>,
    stateSetter:
        | React.Dispatch<React.SetStateAction<T>>
        | React.Dispatch<React.SetStateAction<T | undefined>>,
    errorData: () => T
) {
    useEffect(() => {
        if (response.loading) {
            return;
        }

        if (!response.error) {
            stateSetter(response.data);
        } else {
            stateSetter(errorData());
        }
    }, [response.data, response.error]);
}
