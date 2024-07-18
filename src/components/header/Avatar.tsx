'use client';

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { twMerge } from 'tailwind-merge';
import ProfileIcon from '@/components/icons/ProfileIcon';
import ExitIcon from '@/components/icons/ExitIcon';
// import ModerationIcon from '@/components/icons/ModerationIcon';
import Link from 'next/link';
import AuthenticationContext from '@/providers/authentication';

export default function Avatar() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const [isAvatarHovered, setIsAvatarHovered] = useState(false);
    const [isPopoverHovered, setIsPopoverHovered] = useState(false);

    useEffect(() => {
        setIsPopoverOpen(isAvatarHovered || isPopoverHovered);
    }, [isAvatarHovered, isPopoverHovered]);

    const { user } = useContext(AuthenticationContext);

    if (!user) {
        return (
            <Link href='/login'>
                {/* TODO: login icon */}
                <ExitIcon width={32} height={32} />
            </Link>
        );
    }

    return (
        <Popover
            isOpen={isPopoverOpen}
            positions={['bottom']}
            align='center'
            content={
                <div
                    className='bg-surface flex flex-col gap-6 pt-8 px-2 pb-2 rounded-b-3xl'
                    onMouseEnter={() => setIsPopoverHovered(true)}
                    onMouseLeave={() => setIsPopoverHovered(false)}
                >
                    {/* <Link href='/profile/moderation'>
                        <ModerationIcon width={32} height={32} />
                    </Link> */}
                    <Link href='/login'>
                        <ExitIcon width={32} height={32} />
                    </Link>
                </div>
            }
            padding={-15}
        >
            <div
                className='relative cursor-pointer z-30'
                onMouseEnter={() => setIsAvatarHovered(true)}
                onMouseLeave={() => setIsAvatarHovered(false)}
            >
                <Image
                    width={48}
                    height={48}
                    src={user.imageUrl + '_100x100.png'}
                    alt='Фото профиля'
                    className={twMerge(
                        'text-onSurface h-12 w-12 rounded-full',
                        isPopoverOpen ? 'brightness-50' : ''
                    )}
                />
                <Link href={`/profile/${user.username}`}>
                    <ProfileIcon
                        width={32}
                        height={32}
                        className={twMerge(
                            'absolute top-0 right-0 left-0 bottom-0 m-auto',
                            isPopoverOpen ? '' : 'hidden'
                        )}
                    />
                </Link>
            </div>
        </Popover>
    );
}
