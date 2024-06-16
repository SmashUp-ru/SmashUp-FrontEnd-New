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
} from './entities';

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

    async load(id: number): Promise<T> {
        return this.loadMany([id]).then((r) => r[0]);
    }

    // eslint-disable-next-line no-unused-vars
    abstract loadMany(ids: number[]): Promise<T[]>;
}

export class ApiCachingRepository<T> extends AbstractCachingRepository<T> {
    api: Api;
    endpont: string;
    // eslint-disable-next-line no-unused-vars
    mapper: (object: any) => T;
    mockEntity: T;

    // eslint-disable-next-line no-unused-vars
    constructor(api: Api, endpont: string, mapper: (object: any) => T, mockEntity: T) {
        super();
        this.api = api;
        this.endpont = endpont;
        this.mapper = mapper;
        this.mockEntity = mockEntity;
    }

    async loadMany(ids: number[]): Promise<T[]> {
        let response = await this.api.get(this.endpont, { id: ids.join() });
        if (response.status == 200) {
            return response.data.response.map(this.mapper);
        }

        return Promise.resolve(ids.map(() => this.mockEntity));
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
export function useUserCache(): ApiCachingRepository<User> {
    let repository = new ApiCachingRepository(
        useApi(),
        'user/get_many',
        userFromObject,
        new MockUser()
    );
    repository.storage = staticUserStorage;
    return repository;
}
