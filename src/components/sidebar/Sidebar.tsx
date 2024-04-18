'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import SidebarItem from '@/components/sidebar/SidebarItem';

import SidebarPlaylist from '@/components/sidebar/SidebarPlaylist';
import SmashUpLogo from '@/components/icons/SmashUpLogo';
import HomeIcon from '@/components/icons/HomeIcon';
import HeartIcon from '@/components/icons/HeartIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import { RouteType } from '@/models/sidebar';
import SettingsIcon from '@/components/icons/SettingsIcon';

function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const routes: RouteType[] = useMemo(
        () => [
            {
                icon: HomeIcon,
                label: 'Главная',
                active: pathname === '/',
                href: '/'
            },
            {
                icon: HeartIcon,
                label: 'Мне нравится',
                active: pathname === '/favorites',
                href: '/favorites'
            },
            {
                icon: PlusIcon,
                label: 'Создать плейлист',
                active: pathname === '/playlists/create',
                href: '/playlists/create'
            },
            {
                icon: SettingsIcon,
                label: 'Открыть дебаг меню',
                active: pathname === '/test',
                href: '/test'
            }
        ],
        [pathname]
    );

    return (
        <div className='flex h-full'>
            <div className='hidden md:flex flex-col h-full bg-surfaceVariant w-[282px] px-10 gap-5'>
                {/* Логотип */}
                <div className='px-15 py-17'>
                    <SmashUpLogo width={82} height={42} color='primary' />
                </div>

                <div className='flex flex-col gap-y-12'>
                    {/* Навигация */}
                    <div className='flex flex-col gap-y-4'>
                        {routes.map((item: RouteType) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>

                    {/* Плейлисты */}
                    <div className='flex flex-col gap-y-4'>
                        <SidebarPlaylist href='/playlists/1' label='Плейлист 1' />
                        <SidebarPlaylist
                            href='/playlists/2'
                            label='Это лучший самый крутой плейлист'
                        />
                    </div>
                </div>
            </div>

            <main className='h-full flex-1 overflow-y-auto'>{children}</main>
        </div>
    );
}

export default Sidebar;
