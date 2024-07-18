import React from 'react';
import RepeatIcon from './RepeatIcon';
import RepeatOneIcon from './RepeatOneIcon';

export default function PlayerRepeatIcon({
    repeat,
    setRepeat
}: {
    repeat: 'no' | 'playlist' | 'one';
    setRepeat: React.Dispatch<React.SetStateAction<'no' | 'playlist' | 'one'>>;
}) {
    let onClick = () => {
        if (repeat === 'no') {
            setRepeat('playlist');
        } else if (repeat === 'playlist') {
            setRepeat('one');
        } else {
            setRepeat('no');
        }
    };

    if (repeat === 'one') {
        return (
            <RepeatOneIcon
                width={32}
                height={32}
                color='secondary'
                onClick={onClick}
            ></RepeatOneIcon>
        );
    }

    return (
        <RepeatIcon
            width={32}
            height={32}
            color={repeat === 'no' ? 'onSurfaceVariant' : 'secondary'}
            onClick={onClick}
        ></RepeatIcon>
    );
}
