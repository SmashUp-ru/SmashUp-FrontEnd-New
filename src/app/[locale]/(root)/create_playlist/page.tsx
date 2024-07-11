'use client';

import React, { useContext, useState } from 'react';
import { useTranslations } from 'next-intl';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useApi } from '@/hooks/api';
import AuthenticationContext from '@/providers/authentication';
import getWarningToast from '@/components/toast/Warning';
import { useRouter } from 'next/navigation';

export default function CreatePlaylist() {
    const transl = useTranslations('pages.playlist.create');

    const [name, setName] = useState<string>('');

    const api = useApi();
    const router = useRouter();

    const { user } = useContext(AuthenticationContext);

    const warning = getWarningToast;

    if (!user) {
        return <></>;
    }

    return (
        <div className='flex flex-row gap-4'>
            <SmashUpInput
                placeholder={transl('name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-[400px]'
            ></SmashUpInput>

            <SmashUpButton
                onClick={() => {
                    api.post('/playlist/create', { name, description: '' })
                        .then((response) => {
                            router.replace(`/playlist/${response.data.response.id}`);
                        })
                        .catch(() => {
                            warning('Что-то пошло не так...', 'error');
                        });
                }}
                className='w-[100px]'
            >
                {transl('create')}
            </SmashUpButton>
        </div>
    );
}
