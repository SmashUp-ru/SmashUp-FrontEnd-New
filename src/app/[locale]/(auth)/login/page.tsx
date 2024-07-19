'use client';

import React, { useState } from 'react';
import MailIcon from '@/components/icons/MailIcon';
// import VkBlueIcon from '@/components/icons/VkBlueIcon';
import SmashUpButton from '@/components/smashup/Button/Button';
import SmashUpCheckBox from '@/components/smashup/Checkbox/Checkbox';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpPassword from '@/components/smashup/Password/Password';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useApi } from '@/hooks/api';
import Cookies from 'js-cookie';
import getWarningToast from '@/components/toast/Warning';
import { Toaster, ToastBar } from 'react-hot-toast';

export default function Login() {
    const router = useRouter();

    const transl = useTranslations('pages.login');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const api = useApi();

    const warning = getWarningToast;

    const handleSubmit = (event: any) => {
        event.preventDefault();
        api.post('/login', { username: email, password: password })
            .then((response) => {
                if (response.status === 200) {
                    Cookies.set('token', response.data.response.token);
                    router.push('/');
                }
            })
            .catch((response) => {
                warning(response.response.data.message, 'error');
            });
    };
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            <Toaster>{(t) => <ToastBar toast={t} />}</Toaster>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center flex flex-col gap-2.5'>
                <h1 className='text-primary font-semibold text-5xl'>{transl('title')}</h1>
                <p className='text-onSurface font-medium text-xl'>{transl('welcome')}</p>
            </div>

            {/* Форма */}
            <div className='text-center w-[90%] max-w-[460px]'>
                <form className='flex flex-col gap-8 w-full'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-6'>
                            {/* Почта */}
                            <SmashUpInput
                                heading={transl('email')}
                                placeholder='tapiri@smashup.ru'
                                icon={<MailIcon width={20} height={16} />}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            {/* Пароль */}
                            <SmashUpPassword
                                // showForgotButton
                                showPasswordButton
                                placeholder='12345qwerty'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <SmashUpCheckBox label={transl('remember')} />
                    </div>

                    <SmashUpButton onClick={handleSubmit}>{transl('log-in')}</SmashUpButton>

                    {/* Разделитель */}
                    {/* <div className='flex flex-row justify-between items-center'>
                        <div className='w-[25%] bg-onSurface h-[1px]'></div>
                        <span className='w-[35%]'>{transl('log-in-with')}</span>
                        <div className='w-[25%] bg-onSurface h-[1px]'></div>
                    </div> */}

                    <div className='flex flex-col gap-4'>
                        {/* <SmashUpButton
                            category='stroke-default'
                            icon={<VkBlueIcon width={25} height={25} color='vk' />}
                            onClick={() => {
                                api.get('/vk/authorize/url').then((response) => {
                                    router.push(response.data.response);
                                });
                            }}
                        >
                            VK ID
                        </SmashUpButton> */}

                        <span>
                            {transl('no-account')}
                            <Link className='text-primary' href='/register'>
                                {transl('register')}
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
