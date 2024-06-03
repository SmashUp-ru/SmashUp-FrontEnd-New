'use client';

import { usePathname } from 'next/navigation';

import SidebarItem from '@/components/sidebar/SidebarItem';

import SidebarPlaylist from '@/components/sidebar/SidebarPlaylist';
import SmashUpLogo from '@/components/icons/SmashUpLogo';
import { RouteType } from '@/models/sidebar';
import { siteConfig } from '@/config/site';
import React from 'react';

function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const routes: RouteType[] = siteConfig.navItems.map((item) => {
        return {
            label: item.label,
            active: pathname === item.href,
            href: item.href,
            icon: item.icon
        };
    });

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
