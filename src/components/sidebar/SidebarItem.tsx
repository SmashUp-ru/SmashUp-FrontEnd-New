import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { RouteType } from '@/models/sidebar';

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
            <Icon width={18} height={18} color={active ? 'active-purple' : 'sidebar-gray'} />
            <p className='truncate w-full'>{label}</p>
        </Link>
    );
}

export default SidebarItem;
