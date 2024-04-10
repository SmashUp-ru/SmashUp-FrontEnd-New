'use client';

import React from 'react';
import MailIcon from '@/components/icons/MailIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import VkIcon from '@/components/icons/VkIcon';
import { v4 } from 'uuid';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpPassword from '@/components/smashup/Password/Password';
import SmashUpCheckBox from '@/components/smashup/Checkbox/Checkbox';
import SmashUpButton from '@/components/smashup/Button/Button';
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();

    const query = `uuid=${v4()}&app_id=${process.env.NEXT_PUBLIC_VK_APP_ID}&response_type=silent_token&redirect_uri=${process.env.NEXT_PUBLIC_VK_REDIRECT_URL}&redirect_state=smashup`;

    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center'>
                <h1 className='text-primary font-semibold text-5xl'>Регистрация</h1>
                <p className='text-secondary-text font-medium text-xl'>Рады знакомству!</p>
            </div>

            {/* Форма */}
            <div className='text-center w-[90%] max-w-[460px]'>
                <form className='flex flex-col gap-6 w-full'>
                    {/* Ник */}
                    <SmashUpInput
                        heading='Псевдоним'
                        placeholder='Аркадий Гачибасов'
                        icon={<ProfileIcon width={24} height={25} />}
                    />

                    {/* Почта */}
                    <SmashUpInput
                        heading='Электронная почта'
                        placeholder='tapiri@example.com'
                        icon={<MailIcon width={20} height={17} />}
                    />

                    {/* Пароль */}
                    <SmashUpPassword
                        showForgotButton
                        showPasswordButton
                        placeholder='12345qwerty'
                    />

                    {/* Соглашения и бла бла бла */}
                    <SmashUpCheckBox
                        label={
                            <span className=''>
                                Я принимаю{' '}
                                <a className='text-primary underline' href='#'>
                                    пользовательское соглашение
                                </a>{' '}
                                и{' '}
                                <a className='text-primary underline' href='#'>
                                    политику конфиденциальности
                                </a>
                            </span>
                        }
                    />

                    <SmashUpButton>Зарегистрироваться</SmashUpButton>

                    {/* Разделитель */}
                    <div className='flex flex-row justify-between items-center'>
                        <div className='w-[15%] bg-gray-header h-[1px]'></div>
                        <span className='w-[60%]'>Зарегистрироваться с помощью</span>
                        <div className='w-[15%] bg-gray-header h-[1px]'></div>
                    </div>

                    <SmashUpButton
                        category='stroke-default'
                        icon={<VkIcon width={25} height={25} color='vk' />}
                        onClick={() => router.push(`https://id.vk.com/auth?${query}`)}
                    >
                        VK ID
                    </SmashUpButton>

                    <span>
                        Уже зарегистрированы?{' '}
                        <a className='text-primary' href='/login'>
                            Войдите
                        </a>
                    </span>
                </form>
            </div>
        </div>
    );
}
