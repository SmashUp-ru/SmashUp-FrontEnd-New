export class Bitmask {
    bitmask: number;

    constructor(bitmask: number) {
        this.bitmask = bitmask;
    }

    read(bit: number): boolean {
        return ((this.bitmask >> bit) & 1) == 1;
    }

    toString(): string {
        return 'Bitmask{' + this.bitmask + '}';
    }
}

export interface TrackAuthor {
    id: number;
    name: string;
    imageUrl: string;
    backgroundColor: number;
}

export class MockTrackAuthor implements TrackAuthor {
    id: number = 0;
    name: string = 'Error';
    imageUrl: string = 'https://api.smashup.ru/uploads/track_author/default';
    backgroundColor: number = 0;
}

export function trackAuthorFromObject(object: any): TrackAuthor {
    if (!object.imageUrl.startsWith('https://')) {
        object.imageUrl = 'https://api.smashup.ru/uploads/track_author/' + object.imageUrl;
    }
    return object;
}

export interface Track {
    id: number;
    name: string;
    authors: string[];
    authorsIds: number[];
    imageUrl: string;
    backgroundColor: number;
    link: string;
}

export class MockTrack implements Track {
    id: number = 0;
    name: string = 'Error';
    authors: string[] = ['SmashUp'];
    authorsIds: number[] = [0];
    imageUrl: string = 'https://api.smashup.ru/uploads/track/default';
    backgroundColor: number = 0;
    link: string = '';
}

export function trackFromObject(object: any): Track {
    if (!object.imageUrl.startsWith('https://')) {
        object.imageUrl = 'https://api.smashup.ru/uploads/track/' + object.imageUrl;
    }
    return object;
}

export class MashupStatuses extends Bitmask {
    constructor(bitmask: number) {
        super(bitmask);
    }

    isExplicit(): boolean {
        return this.read(0);
    }

    isMashup(): boolean {
        return this.read(1);
    }

    isAlt(): boolean {
        return this.read(2);
    }
}

export interface Mashup {
    id: number;
    name: string;
    authors: string[];
    authorsIds: number[];
    genres: string[];
    tracks: number[];
    imageUrl: string;
    backgroundColor: number;
    statuses: MashupStatuses;
    albumId: number;
    likes: number;
    streams: number;
    bitrate: number;
    duration: number;
}

export class MockMashup {
    id: number = 0;
    name: string = 'Error';
    authors: string[] = ['SmashUp'];
    authorsIds: number[] = [0];
    genres: string[] = ['рок'];
    tracks: number[] = [1, 2];
    imageUrl: string = 'https://api.smashup.ru/uploads/mashup/default';
    backgroundColor: number = 0;
    statuses: MashupStatuses = new MashupStatuses(0);
    albumId: number = -1;
    likes: number = 0;
    streams: number = 0;
    bitrate: number = 64000;
    duration: number = 10000;
}

export function mashupFromObject(object: any): Mashup {
    object.statuses = new MashupStatuses(object.statuses);
    if (!object.imageUrl.startsWith('https://')) {
        object.imageUrl = 'https://api.smashup.ru/uploads/mashup/' + object.imageUrl;
    }
    return object;
}

export interface Playlist {
    id: number;
    name: string;
    description: string;
    authors: string[];
    imageUrl: string;
    backgroundColor: number;
    mashups: number[];
    likes: number;
    strems: number;
}

export class MockPlaylist {
    id: number = 0;
    name: string = 'Error';
    description: string = 'Error';
    authors: string[] = ['SmashUp'];
    imageUrl: string = 'https://api.smashup.ru/uploads/playlist/default';
    backgroundColor: number = 0;
    mashups: number[] = [];
    likes: number = 0;
    strems: number = 0;
}

export function playlistFromObject(object: any): Playlist {
    if (!object.imageUrl.startsWith('https://')) {
        object.imageUrl = 'https://api.smashup.ru/uploads/playlist/' + object.imageUrl;
    }
    return object;
}

export class UserPermissions extends Bitmask {
    constructor(bitmask: number) {
        super(bitmask);
    }

    isAdmin(): boolean {
        return this.read(0);
    }

    isModerator(): boolean {
        return this.read(1);
    }

    isVerified(): boolean {
        return this.read(2);
    }

    isMashuper(): boolean {
        return this.read(3);
    }

    isBanned(): boolean {
        return this.read(4);
    }
}

export interface User {
    id: number;
    username: string;
    imageUrl: string;
    backgroundColor: number;
    permissions: UserPermissions;
    mashups: number[];
    playlists: number[];
}

export class MockUser implements User {
    id: number = 0;
    username: string = 'Error';
    imageUrl: string = 'https://api.smashup.ru/uploads/user/default';
    backgroundColor: number = 0;
    permissions: UserPermissions = new UserPermissions(0);
    mashups: number[] = [];
    playlists: number[] = [];
}

export function userFromObject(object: any): User {
    object.permissions = new UserPermissions(object.permissions);
    if (!object.imageUrl.startsWith('https://')) {
        object.imageUrl = 'https://api.smashup.ru/uploads/user/' + object.imageUrl;
    }
    return object;
}
