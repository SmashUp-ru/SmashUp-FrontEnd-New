import HomeIcon from '@/components/icons/HomeIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: 'SmashUp',
    description: 'Самый лучший плеер для мэшапов',
    navItems: [
        {
            label: 'Home',
            href: '/',
            icon: HomeIcon
        },
        {
            label: 'Favorites',
            href: '/favorites',
            icon: HeartIcon
        },
        {
            label: 'Create Playlist',
            href: '/create-playlist',
            icon: PlusIcon
        },
        {
            label: 'Settings',
            href: '/test',
            icon: SettingsIcon
        }
    ],
    footer: {
        links: [
            { label: 'Правообладателям', href: '#' },
            {
                label: 'Пользовательское соглашение',
                href: '#'
            },
            { label: 'Контакты', href: '#' }
        ],
        text: 'Сервис smashup.ru может содержать информацию, не предназначенную для несовершеннолетних'
    }
};
