import React from 'react';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export interface RouteType {
    icon: IconType;
    label: string;
    active: boolean;
    href: string;
}

function SidebarItem({ icon: Icon, label, active, href }: RouteType) {
    return (
        <Link
            href={href}
            className={twMerge(
                `
                text-base
        flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1`,
                active && 'text-white'
            )}
        >
            <Icon size={26} className={twMerge('', active && `text-active-purple`)} />
            <p className='truncate w-full'>{label}</p>
        </Link>
    );
}

export default SidebarItem;
