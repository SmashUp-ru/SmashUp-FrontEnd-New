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
                    this.storage.set(ids[index], loaded[loadedIndex]);

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

const staticTrackAuthorStorage = new Map<number, TrackAuthor>();
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

const staticTrackStorage = new Map<number, Track>();
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
