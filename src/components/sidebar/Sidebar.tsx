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
            <div className='hidden md:flex flex-col h-full bg-sidebar-gray  w-[282px] py-2 pl-2'>
                <div className='flex justify-center items-center h-[200px]'>
                    <SmashUpLogo width={82} height={42} color='primary' />
                </div>

                <div className='flex flex-col gap-y-12'>
                    <div className='flex flex-col gap-y-4 px-8'>
                        {routes.map((item: RouteType) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>

                    <div className='flex flex-col gap-y-4 px-8'>
                        <SidebarPlaylist href='/playlists/1' label='Плейлист 1' />
                        <SidebarPlaylist
                            href='/playlists/2'
                            label='Это лучший самый крутой плейлист'
                        />
                    </div>
                </div>
            </div>

            <main className='h-full flex-1 overflow-y-auto py-2 p-2'>{children}</main>
        </div>
    );
}

export default Sidebar;
