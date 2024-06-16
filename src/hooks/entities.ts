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
    imageUrl: string = 'default';
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
    imageUrl: string = 'default';
    backgroundColor: number = 0;
    mashups: number[] = [];
    likes: number = 0;
    strems: number = 0;
}

export function playlistFromObject(object: any): Playlist {
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
    mashups: Mashup[];
    playlists: Playlist[];
}

export class MockUser implements User {
    id: number = 0;
    username: string = 'Error';
    imageUrl: string = 'default';
    backgroundColor: number = 0;
    permissions: UserPermissions = new UserPermissions(0);
    mashups: Mashup[] = [];
    playlists: Playlist[] = [];
}

export function userFromObject(object: any): User {
    object.permissions = new UserPermissions(object.permissions);
    return object;
}
