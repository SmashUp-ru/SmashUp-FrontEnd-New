import React, { createContext } from 'react';
import { Mashup } from '@/utils/types';

// TODO: rename to MashupContext and fields inside
export interface TrackContextType {
    track?: Mashup;
    setTrack: React.Dispatch<React.SetStateAction<Mashup | undefined>>;
}

const TrackContext = createContext<TrackContextType>({
    setTrack: () => {}
});

export default TrackContext;
