'use client';

import React, { useContext } from 'react';
import { TrackContext } from '@/providers/Providers';
import Header from '@/components/header/Header';
import Track from '@/components/Track';

export default function MainLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { track } = useContext(TrackContext);

    return (
        <div className='w-full h-full flex flex-row px-6'>
            <div className='w-full h-full'>
                <Header />
                {children}
            </div>
            {track && <Track />}
        </div>
    );
}
