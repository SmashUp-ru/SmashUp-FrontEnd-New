import React, { createContext } from 'react';
import { Mashup } from '@/utils/types';

// TODO: rename to MashupContext and fields inside
const TrackContext = createContext<{
    track?: Mashup;
    setTrack: React.Dispatch<React.SetStateAction<Mashup | undefined>>;
}>({
    setTrack: () => {}
});

export default TrackContext;
