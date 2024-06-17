'use client';

import React from 'react';
import MailIcon from '@/components/icons/MailIcon';
import VkBlueIcon from '@/components/icons/VkBlueIcon';
import { v4 } from 'uuid';
import SmashUpButton from '@/components/smashup/Button/Button';
import SmashUpCheckBox from '@/components/smashup/Checkbox/Checkbox';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpPassword from '@/components/smashup/Password/Password';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Login() {
    const router = useRouter();

    const query = `uuid=${v4()}&app_id=${process.env.NEXT_PUBLIC_VK_APP_ID}&response_type=silent_token&redirect_uri=${process.env.NEXT_PUBLIC_VK_REDIRECT_URL}&redirect_state=smashup`;

    const transl = useTranslations('login');

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
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
                            />

                            {/* Пароль */}
                            <SmashUpPassword
                                showForgotButton
                                showPasswordButton
                                placeholder='12345qwerty'
                            />
                        </div>

                        <SmashUpCheckBox label={transl('remember')} />
                    </div>

                    <SmashUpButton>{transl('log-in')}</SmashUpButton>

                    {/* Разделитель */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-[25%] bg-onSurface h-[1px]'></div>
                        <span className='w-[35%]'>{transl('log-in-with')}</span>
                        <div className='w-[25%] bg-onSurface h-[1px]'></div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <SmashUpButton
                            category='stroke-default'
                            icon={
                                <VkBlueIcon width={25} height={25} color='vk' textColor='white' />
                            }
                            onClick={() => router.push(`https://id.vk.com/auth?${query}`)}
                        >
                            VK ID
                        </SmashUpButton>

                        <span>
                            {transl('no-account')}
                            <a className='text-primary' href='/register'>
                                {transl('register')}
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
