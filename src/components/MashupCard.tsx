'use client';

import { Mashup } from '@/utils/types';
import Card from './Card';
import { usePlayerUtils, useMashupSideSheetUtils, PlaylistLike } from '@/hooks/utils';

export default function MashupCard({
    mashup,
    playlist
}: {
    mashup: Mashup;
    playlist?: PlaylistLike;
}) {
    const playerUtils = usePlayerUtils();
    const mashupSideSheetUtils = useMashupSideSheetUtils();

    return (
        <Card
            id={mashup.id}
            title={mashup.name}
            explicit={mashup.statuses.isExplicit()}
            author={mashup.authors.join(', ')}
            image={mashup.imageUrl + '_400x400.png'}
            onClick={() => mashupSideSheetUtils.open(mashup)}
            isPlaying={playerUtils.isPlaying(mashup, playlist)}
            playAction={() => playerUtils.playMashup(mashup, playlist)}
        ></Card>
    );
}
