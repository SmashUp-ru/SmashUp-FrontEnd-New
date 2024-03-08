import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

function SidebarPlaylist({ href, label }: { href: string; label: string }) {
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
        py-1`
            )}
        >
            <p className='truncate w-full'>{label}</p>
        </Link>
    );
}

export default SidebarPlaylist;
