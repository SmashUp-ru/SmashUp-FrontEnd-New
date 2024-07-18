'use client';

import Modal from 'react-modal';
import { useState } from 'react';
import CloseIcon from '@/components/icons/CloseIcon';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useTranslations } from 'next-intl';
import { useApi } from '@/hooks/api';
import { Playlist } from '@/utils/types';
import Image from 'next/image';
import egor from '/public/dev/search/egor.png';
import EditIcon from '@/components/icons/EditIcon';

interface EditModalProps {
    modalIsOpen: boolean;
    // eslint-disable-next-line no-unused-vars
    setModalIsOpen: (value: boolean) => void;
    // eslint-disable-next-line no-unused-vars
    warning: (text: string, type: 'success' | 'error', className?: string) => string;
    playlist: Playlist;
    // eslint-disable-next-line no-unused-vars
    setPlaylist: (playlist: Playlist) => void;
}

export default function EditModal({
    modalIsOpen,
    setModalIsOpen,
    warning,
    playlist,
    setPlaylist
}: EditModalProps) {
    const transl = useTranslations('pages.playlist');

    const api = useApi();

    const [editName, setEditName] = useState(playlist.name);

    return (
        <Modal
            isOpen={modalIsOpen}
            className='absolute w-full h-full z-9999 flex justify-center items-center bg-transparent'
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                }
            }}
        >
            <div className='relative bg-surfaceVariant flex flex-col gap-4 items-center rounded-4xl p-7'>
                <div className='w-full flex justify-start'>
                    <h1 className='text-onSurface font-bold text-3xl'>Редактирование плейлиста</h1>
                </div>

                <div className='flex flex-row gap-8'>
                    <CloseIcon
                        width={28}
                        height={28}
                        className='w-8 h-8 cursor-pointer absolute top-6 right-6'
                        onClick={() => {
                            setModalIsOpen(false);
                        }}
                    ></CloseIcon>

                    <label className='relative cursor-pointer' htmlFor='update-avatar'>
                        <Image
                            src={egor}
                            alt='Аватарка профиля'
                            className='w-[216px] h-[216px] rounded-2xl brightness-50'
                        />
                        <EditIcon
                            width={70}
                            height={70}
                            className='absolute top-0 right-0 left-0 bottom-0 m-auto'
                        />
                        <input id='update-avatar' type='file' className='hidden' />
                    </label>

                    <div className='flex flex-col gap-1'>
                        <p className='text-onSurface'>Название</p>
                        <SmashUpInput
                            placeholder={transl('edit.name')}
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className='w-[400px]'
                        ></SmashUpInput>
                    </div>
                </div>

                <SmashUpButton
                    onClick={() => {
                        api.post(
                            '/playlist/edit',
                            {
                                name: editName,
                                description: ''
                            },
                            { id: playlist.id }
                        )
                            .then((response) => {
                                playlist.name = response.data.response.name;
                                setPlaylist({ ...playlist });
                                setModalIsOpen(false);
                                warning('Удачно', 'success');
                            })
                            .catch(() => {
                                warning('Что-то пошло не так...', 'error');
                            });
                    }}
                    className='w-full py-3'
                >
                    {transl('edit.edit')}
                </SmashUpButton>
            </div>
        </Modal>
    );
}
