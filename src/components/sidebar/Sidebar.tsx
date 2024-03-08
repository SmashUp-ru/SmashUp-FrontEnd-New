'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { GoHeart, GoHome } from 'react-icons/go';
import { BsPlusSquare } from 'react-icons/bs';
import SidebarItem, { RouteType } from '@/components/sidebar/SidebarItem';

import SmashUpLogo from '/public/smashup.svg';
import SidebarPlaylist from '@/components/sidebar/SidebarPlaylist';

function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const routes: RouteType[] = useMemo(
        () => [
            {
                icon: GoHome,
                label: 'Главная',
                active: pathname === '/',
                href: '/'
            },
            {
                icon: GoHeart,
                label: 'Мне нравится',
                active: pathname === '/favorites',
                href: '/favorites'
            },
            {
                icon: BsPlusSquare,
                label: 'Создать плейлист',
                active: pathname === '/playlists/create',
                href: '/playlists/create'
            }
        ],
        [pathname]
    );

    return (
        <div className='flex h-full'>
            <div className='hidden md:flex flex-col gap-y-2 h-full bg-sidebar-gray  w-[282px] py-2 pl-2'>
                <div className='flex justify-center items-center h-[200px]'>
                    <Image src={SmashUpLogo} alt='SmashUp Logo' width={82} height={42}></Image>
                </div>

                <div className='flex flex-col gap-y-4 px-8 pb-5'>
                    {routes.map((item: RouteType) => (
                        <SidebarItem key={item.label} {...item} />
                    ))}
                </div>

                <div className='flex flex-col gap-y-1 px-8 py-5'>
                    <SidebarPlaylist href='/playlists/1' label='Плейлист 1' />
                    <SidebarPlaylist href='/playlists/2' label='Это лучший самый крутой плейлист' />
                </div>
            </div>

            <main className='h-full flex-1 overflow-y-auto py-2 p-2'>{children}</main>
        </div>
    );
}

export default Sidebar;
