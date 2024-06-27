import radio from '/public/dev/main/radio.png';
import selection2 from '/public/dev/main/selection2.png';
import selection3 from '/public/dev/main/selection3.png';
import track1 from '/public/dev/main/track1.png';
import track2 from '/public/dev/main/track2.png';
import track3 from '/public/dev/main/track3.png';
import track4 from '/public/dev/main/track4.png';
import track5 from '/public/dev/main/track5.png';
import track6 from '/public/dev/main/track6.png';
import cover from '/public/dev/main/cover.png';
import track7 from '/public/dev/profile/track1.png';
import track8 from '/public/dev/profile/track2.png';
import track9 from '/public/dev/profile/track3.png';
import track10 from '/public/dev/profile/track4.png';
import track11 from '/public/dev/profile/track5.png';
import track12 from '/public/dev/upload/track1.png';
import track13 from '/public/dev/upload/track2.png';
import track14 from '/public/dev/upload/track3.png';

export const selections = [
    {
        id: 1,
        title: 'Новинки',
        author: 'SmashUp',
        // TODO: unhardcode
        image: 'https://api.smashup.ru/uploads/playlist/55cc15adaadcd2360a3ffcf3209dd801b09b44e5681ad25531fda294ad104773_800x800.png'
    },
    {
        id: 2,
        title: 'Чарт | 24 часа',
        author: 'SmashUp',
        // TODO: unhardcode
        image: 'https://api.smashup.ru/uploads/playlist/355116314c66c5eca2e309ff2228460b339443ed282e6e1687f5c01fe52359f8_800x800.png'
    },
    {
        id: 3,
        title: 'Чарт | 7 дней',
        author: 'SmashUp',
        // TODO: unhardcode
        image: 'https://api.smashup.ru/uploads/playlist/0d622dd3e7eab5bb3b3a755e0811ebd33c7ce18fa958e4eb0b08498042f8bc42_800x800.png'
    },
    {
        id: 4,
        title: 'Мэшап-Радио',
        author: 'SmashUp',
        image: radio
    },
    {
        id: 5,
        title: 'Подборка 1',
        author: 'SmashUp',
        image: selection2
    },
    {
        id: 6,
        title: 'Подборка 2',
        author: 'SmashUp',
        image: selection3
    }
];

export const premier = [
    {
        id: 1,
        title: 'Лобби под подошвой',
        author: 'Утонул в пиве',
        image: track1,
        length: '3:44'
    },
    {
        id: 2,
        title: 'Crystal Maxim',
        author: 'tupa kiso4ka',
        image: track2,
        length: '3:44'
    },
    {
        id: 3,
        title: 'Around Skrillex',
        author: 'tupa kiso4ka',
        image: track3,
        length: '3:44'
    },
    {
        id: 4,
        title: 'EL РАНДЕВУ',
        author: 'Илья Муррка',
        image: track4,
        length: '3:44'
    },
    {
        id: 5,
        title: 'Ненавижу SugarCrash',
        author: 'Citicrazi',
        image: track5,
        length: '3:44'
    },
    {
        id: 6,
        title: 'Робот Rammstein',
        author: 'Ramzes Govnomes',
        image: track6,
        length: '3:44'
    }
];

export const search = [
    {
        id: 1,
        title: 'EL Leonid',
        description: 'LeonidM',
        image: track4
    },
    {
        id: 2,
        title: 'LeonidM лох',
        description: 'Утонул в пиве',
        image: track1
    },
    {
        id: 3,
        title: 'Crystal LeonidM',
        description: 'tupa kiso4ka',
        image: track2
    },
    {
        id: 4,
        title: 'Around Skrillex',
        description: 'LeonidM',
        image: track3
    },
    {
        id: 5,
        title: 'Ненавижу SugarCrash',
        description: 'Citicrazi',
        image: track5
    },
    {
        id: 6,
        title: 'Робот Rammstein',
        description: 'Ramzes Govnomes',
        image: track6
    }
];

export const mashups_search = [
    {
        id: 1,
        image: cover,
        title: 'Название мэшапа',
        author: 'dmhd6219'
    },
    {
        id: 2,
        image: cover,
        title: 'Название мэшапа',
        author: 'dmhd6219'
    },
    {
        id: 3,
        image: cover,
        title: 'Название мэшапа',
        author: 'dmhd6219'
    },
    {
        id: 4,
        image: cover,
        title: 'Название мэшапа',
        author: 'dmhd6219'
    }
];

export const profile_popular_tracks = [
    {
        id: 1,
        image: track7,
        title: 'Доброе судно',
        author: 'dmhd6219',
        length: '3:44',
        explicit: false,
        liked: false
    },
    {
        id: 2,
        image: track8,
        title: 'Развлекайтесь на 180db',
        author: 'dmhd6219',
        length: '3:44',
        explicit: false,
        liked: false
    },
    {
        id: 3,
        image: track9,
        title: 'У моей девушки день рождения в Париже',
        author: 'dmhd6219',
        length: '3:44',
        explicit: false,
        liked: false
    },
    {
        id: 4,
        image: track10,
        title: 'Без Парижа',
        author: 'dmhd6219',
        length: '3:44',
        explicit: true,
        liked: true
    },
    {
        id: 5,
        image: track11,
        title: 'Свежие окна',
        author: 'dmhd6219',
        length: '3:44',
        explicit: true,
        liked: false
    }
];

export const profile_popular_playlists = [
    {
        id: 1,
        image: radio,
        title: 'Плейлистик мой',
        author: 'LeonidM',
        visible: true
    },

    {
        id: 2,
        image: radio,
        title: 'Черновички',
        author: 'LeonidM',
        visible: false
    }
];

export const upload = [
    {
        id: 1,
        image: track12,
        title: 'Вечер у бабушки',
        author: 'КУКЕБУРЕ',
        explicit: false,
        chosen: false
    },
    {
        id: 2,
        image: track13,
        title: 'Вечер у бабушки',
        author: 'КУКЕБУРЕ',
        explicit: false,
        chosen: false
    },
    {
        id: 3,
        image: track14,
        title: 'Вечер у бабушки',
        author: 'КУКЕБУРЕ',
        explicit: false,
        chosen: true
    }
];

export const genres = [
    {
        id: 1,
        title: 'Электро',
        chosen: false
    },
    {
        id: 2,
        title: 'Классика',
        chosen: false
    },
    {
        id: 3,
        title: 'Фонк',
        chosen: false
    },
    {
        id: 4,
        title: 'Поп',
        chosen: false
    },
    {
        id: 5,
        title: 'Мегамэшап',
        chosen: false
    },
    {
        id: 6,
        title: 'Мемы',
        chosen: false
    },
    {
        id: 7,
        title: 'Shitpost',
        chosen: false
    },
    {
        id: 8,
        title: 'Рок',
        chosen: true
    },
    {
        id: 9,
        title: 'Cover',
        chosen: false
    },
    {
        id: 10,
        title: 'SoundClown',
        chosen: false
    },
    {
        id: 11,
        title: 'Rip',
        chosen: false
    },
    {
        id: 12,
        title: 'Morph',
        chosen: false
    }
];

export const coauthors = [
    {
        id: 1,
        title: 'Дора',
        chosen: true
    },
    {
        id: 2,
        title: 'Дора',
        chosen: false
    },
    {
        id: 3,
        title: 'Дора',
        chosen: false
    }
];
