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
        flex
        flex-row
        items-center
        gap-x-4
        font-medium
        text-base
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1`,
                active && 'text-white'
            )}
        >
            <Icon width={18} height={18} color={active ? 'primary' : 'text-neutral-400'} />
            <p className='truncate'>{label}</p>
        </Link>
    );
}

export default SidebarItem;
