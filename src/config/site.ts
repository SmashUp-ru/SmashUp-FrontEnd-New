import HomeIcon from '@/components/icons/HomeIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import PlusIcon from '@/components/icons/PlusIcon';
// import SettingsIcon from '@/components/icons/SettingsIcon';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    navItems: [
        {
            label: 'Home',
            href: '/',
            icon: HomeIcon
        }
    ],
    authorizedNavItems: [
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
            href: '/create_playlist',
            icon: PlusIcon
        }
        // {
        //     label: 'Settings',
        //     href: '/test',
        //     icon: SettingsIcon
        // }
    ]
};
