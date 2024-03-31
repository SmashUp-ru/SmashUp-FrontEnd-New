'use client';

import React, { createContext, useState } from 'react';

export const TrackContext = createContext<{
    track?: number;
    setTrack?: React.Dispatch<React.SetStateAction<number | undefined>>;
}>({});

export default function Providers({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<number | undefined>(undefined);

    return (
        <TrackContext.Provider value={{ track: track, setTrack: setTrack }}>
            {children}
        </TrackContext.Provider>
    );
}
