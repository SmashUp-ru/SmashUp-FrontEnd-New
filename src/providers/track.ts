import React, { createContext } from 'react';
import { Mashup } from '@/utils/types';

const TrackContext = createContext<{
    track?: Mashup;
    setTrack?: React.Dispatch<React.SetStateAction<Mashup | undefined>>;
}>({});

export default TrackContext;
