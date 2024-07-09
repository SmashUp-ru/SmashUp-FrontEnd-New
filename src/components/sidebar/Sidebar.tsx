'use client';

import { usePathname } from 'next/navigation';

import SidebarItem from '@/components/sidebar/SidebarItem';

import SmashUpLogo from '@/components/icons/SmashUpLogo';
import { RouteType } from '@/models/sidebar';
import { siteConfig } from '@/config/site';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import AuthenticationContext from '@/providers/authentication';

function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const [routes, setRoutes] = useState<RouteType[]>(
        siteConfig.navItems.map((item) => {
            return {
                label: item.label,
                active: pathname === item.href,
                href: item.href,
                icon: item.icon
            };
        })
    );

    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        if (user) {
            setRoutes(
                siteConfig.authorizedNavItems.map((item) => {
                    return {
                        label: item.label,
                        active: pathname === item.href,
                        href: item.href,
                        icon: item.icon
                    };
                })
            );
        }
    }, [user]);

    return (
        <div className='flex h-full px-4'>
            <div className='mt-4 hidden md:flex flex-col h-full bg-surfaceVariant rounded-4xl w-[123px] gap-25 py-17.5'>
                {/* Логотип */}
                <Link className='px-7' href='/'>
                    <SmashUpLogo width={66} height={34} color='primary' />
                </Link>

                <div className='flex flex-col gap-y-12 px-12'>
                    {/* Навигация */}
                    <div className='flex flex-col gap-y-12'>
                        {routes.map((item: RouteType) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            <main className='h-full flex-1 overflow-y-auto'>{children}</main>
        </div>
    );
}

export default Sidebar;
