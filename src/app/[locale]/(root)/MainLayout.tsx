'use client';

import React, { useContext } from 'react';
import Header from '@/components/header/Header';
import TrackSideSheet from '@/components/TrackSideSheet';
import TrackContext from '@/providers/track';
import PlayerBar from '@/components/player/PlayerBar';

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
                <PlayerBar />
                {children}
            </div>
            {track && <TrackSideSheet />}
        </div>
    );
}
