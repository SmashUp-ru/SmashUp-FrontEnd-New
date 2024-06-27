'use client';

import { Mashup } from '@/utils/types';
import React, { createContext, useState } from 'react';

export const TrackContext = createContext<{
    track?: Mashup;
    setTrack?: React.Dispatch<React.SetStateAction<Mashup | undefined>>;
}>({});

export default function Providers({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<Mashup | undefined>(undefined);

    return (
        <TrackContext.Provider value={{ track: track, setTrack: setTrack }}>
            {children}
        </TrackContext.Provider>
    );
}
