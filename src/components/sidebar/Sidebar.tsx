'use client';

import { usePathname, useRouter } from '@/navigation';
import SidebarItem from '@/components/sidebar/SidebarItem';
import SmashUpLogo from '@/components/icons/SmashUpLogo';
import { RouteType } from '@/models/sidebar';
import { siteConfig } from '@/config/site';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import AuthenticationContext from '@/providers/authentication';
import SmashUpButton from '../smashup/Button/Button';
import Cookies from 'js-cookie';

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

    const router = useRouter();

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
            <div className='mt-4 hidden md:flex flex-col h-[97%] bg-surfaceVariant rounded-4xl w-[123px] gap-25 py-17.5'>
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

                        {Cookies.get('NEXT_LOCALE') === 'en' ? (
                            <SmashUpButton
                                className='w-[24px] h-[24px] text-xs'
                                onClick={() => router.replace(pathname, { locale: 'ru' })}
                            >
                                RU
                            </SmashUpButton>
                        ) : (
                            <SmashUpButton
                                className='w-[24px] h-[24px] text-xs'
                                onClick={() => router.replace(pathname, { locale: 'en' })}
                            >
                                EN
                            </SmashUpButton>
                        )}
                    </div>
                </div>
            </div>

            <main className='h-full flex-1 overflow-y-auto'>{children}</main>
        </div>
    );
}

export default Sidebar;
