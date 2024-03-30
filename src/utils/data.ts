import radio from '/public/dev/main/radio.png';
import news from '/public/dev/main/new.png';
import chart from '/public/dev/main/chart.png';
import selection1 from '/public/dev/main/selection1.png';
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
        title: 'Мэшап-Радио',
        description: 'SmashUp',
        image: radio
    },
    {
        id: 2,
        title: 'Новинки!!',
        description: 'SmashUp',
        image: news
    },
    {
        id: 3,
        title: 'Чарт 24 часа',
        description: 'SmashUp',
        image: chart
    },
    {
        id: 4,
        title: 'Подборка 1',
        description: 'SmashUp',
        image: selection1
    },
    {
        id: 5,
        title: 'Подборка 2',
        description: 'SmashUp',
        image: selection2
    },
    {
        id: 6,
        title: 'Подборка 3',
        description: 'SmashUp',
        image: selection3
    }
];

export const recently = [
    {
        id: 1,
        title: 'Лобби под подошвой',
        description: 'Утонул в пиве',
        image: track1
    },
    {
        id: 2,
        title: 'Crystal Maxim',
        description: 'tupa kiso4ka',
        image: track2
    },
    {
        id: 3,
        title: 'Around Skrillex',
        description: 'tupa kiso4ka',
        image: track3
    },
    {
        id: 4,
        title: 'EL РАНДЕВУ',
        description: 'Илья Муррка',
        image: track4
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

export const profile_popular = [
    {
        id: 1,
        image: track7,
        title: 'Доброе судно',
        author: 'dmhd6219',
        listened: 157,
        length: '3:44',
        explicit: false
    },
    {
        id: 2,
        image: track8,
        title: 'Развлекайтесь на 180db',
        author: 'dmhd6219',
        listened: 87,
        length: '3:44',
        explicit: false
    },
    {
        id: 3,
        image: track9,
        title: 'У моей девушки день рождения в Париже',
        author: 'dmhd6219',
        listened: 74,
        length: '3:44',
        explicit: false
    },
    {
        id: 4,
        image: track10,
        title: 'Без Парижа',
        author: 'dmhd6219',
        listened: 52,
        length: '3:44',
        explicit: true
    },
    {
        id: 5,
        image: track11,
        title: 'Свежие окна',
        author: 'dmhd6219',
        listened: 2,
        length: '3:44',
        explicit: true
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
