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
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        `
            )}
        >
            <p className='truncate'>{label}</p>
        </Link>
    );
}

export default SidebarPlaylist;
