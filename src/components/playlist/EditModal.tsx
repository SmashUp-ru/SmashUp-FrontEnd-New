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
    const transl = useTranslations('pages.playlist.edit');

    const api = useApi();

    const [editName, setEditName] = useState(playlist.name);
    const [editImageUrl, setEditImageUrl] = useState(playlist.imageUrl + '_800x800.png');

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
                    <h1 className='text-onSurface font-bold text-3xl'>{transl('title')}</h1>
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

                    <label className='relative cursor-pointer' htmlFor='update-playlist-cover'>
                        <Image
                            src={editImageUrl}
                            width={216}
                            height={216}
                            alt={editName}
                            className='w-[216px] h-[216px] rounded-2xl brightness-50'
                        />
                        <EditIcon
                            width={70}
                            height={70}
                            className='absolute top-0 right-0 left-0 bottom-0 m-auto'
                        />
                        <input
                            id='update-playlist-cover'
                            type='file'
                            accept='.png'
                            className='hidden'
                            onChange={(event) => {
                                let reader = new FileReader();

                                reader.addEventListener('load', () => {
                                    setEditImageUrl(reader.result as string);
                                });

                                let input = event.target;

                                if (input.files === null || !input.files[0]) {
                                    setEditImageUrl(playlist.imageUrl + '_800x800.png');
                                } else {
                                    reader.readAsDataURL(input.files[0]);
                                }
                            }}
                        />
                    </label>

                    <div className='flex flex-col gap-1'>
                        <p className='text-onSurface'>{transl('name')}</p>
                        <SmashUpInput
                            placeholder={transl('name')}
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className='w-[400px]'
                        ></SmashUpInput>
                    </div>
                </div>

                <SmashUpButton
                    onClick={() => {
                        let basedImageFile = undefined;

                        const prefix = 'data:image/png;base64,';
                        if (editImageUrl.startsWith(prefix)) {
                            basedImageFile = editImageUrl.slice(prefix.length);
                        }

                        if (!/^[а-яА-ЯёЁa-zA-Z0-9_$.,=+()*&^%$#@!\-?':| ]{4,48}$/.test(editName)) {
                            warning(
                                "Playlist name can contain only from 4 to 48  russian and latin letters, numbers and $\\.,=+()*&^%$#@!-?':|",
                                'error'
                            );
                            return;
                        }

                        api.post(
                            '/playlist/edit',
                            {
                                name: editName,
                                description: '',
                                basedImageFile
                            },
                            { id: playlist.id }
                        )
                            .then((response) => {
                                playlist.name = response.data.response.name;
                                playlist.imageUrl =
                                    'https://api.smashup.ru/uploads/playlist/' +
                                    response.data.response.imageUrl;
                                setPlaylist({ ...playlist });
                                setModalIsOpen(false);
                                warning(transl('messages.success'), 'success');
                            })
                            .catch((response) => {
                                if (
                                    response.response.data.message === 'upload.image.bad_image_size'
                                ) {
                                    warning(transl('messages.bad_image_size'), 'error');
                                } else if (
                                    response.response.data.message ===
                                    'upload.image.cant_be_transparent'
                                ) {
                                    warning(transl('messages.cant_be_transparent'), 'error');
                                } else {
                                    warning(transl('messages.something_went_wrong'), 'error');
                                }
                            });
                    }}
                    className='w-full py-3'
                >
                    {transl('edit')}
                </SmashUpButton>
            </div>
        </Modal>
    );
}
