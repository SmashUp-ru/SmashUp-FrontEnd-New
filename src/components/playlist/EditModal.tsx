'use client';

import Modal from 'react-modal';
import { useContext, useState } from 'react';
import CloseIcon from '@/components/icons/CloseIcon';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useTranslations } from 'next-intl';
import { useApi } from '@/hooks/api';
import AuthenticationContext from '@/providers/authentication';
import { Playlist } from '@/utils/types';

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

    const { user } = useContext(AuthenticationContext);

    return (
        <Modal isOpen={modalIsOpen} contentLabel='Example Modal'>
            <div className='flex flex-row gap-4 items-center'>
                <CloseIcon
                    width={28}
                    height={28}
                    className='w-8 h-8 cursor-pointer'
                    onClick={() => {
                        setModalIsOpen(false);
                    }}
                ></CloseIcon>
                <SmashUpInput
                    placeholder={transl('edit.name')}
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className='w-[400px]'
                ></SmashUpInput>

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
                            })
                            .catch(() => {
                                warning('Что-то пошло не так...', 'error');
                            })
                            .finally(() => {
                                warning('Что-то пошло так...', 'success');
                            });
                    }}
                    className='w-[100px]'
                >
                    {transl('edit.edit')}
                </SmashUpButton>

                <SmashUpButton
                    onClick={() => {
                        api.post('/playlist/delete', {}, { id: playlist.id })
                            .then(() => {
                                if (user) {
                                    let index = user.playlists.indexOf(playlist.id);
                                    user.playlists.splice(index, 1);
                                    setModalIsOpen(false);
                                }
                            })
                            .catch(() => {
                                warning('Что-то пошло не так...', 'error');
                            });
                    }}
                    className='w-[100px]'
                >
                    {transl('edit.delete')}
                </SmashUpButton>
            </div>
        </Modal>
    );
}
