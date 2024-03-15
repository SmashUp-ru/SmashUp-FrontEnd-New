import React from 'react';
import MailIcon from '@/components/icons/MailIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import PasswordIcon from '@/components/icons/PasswordIcon';
import Button from '@/components/Button/Button';
import VkIcon from '@/components/icons/VkIcon';
import OauthButton from '@/components/Button/OauthButton';

export default function Register() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            <div className='text-center'>
                <h1 className='text-primary font-semibold text-5xl'>Регистрация</h1>
                <p className='text-secondary-text font-medium text-xl'>Рады знакомству!</p>
            </div>

            <div className='text-center w-full max-w-[460px]'>
                <form className='flex flex-col gap-6 w-full'>
                    <div className='w-full flex flex-col gap-2.5'>
                        <label className='text-left'>Псевдоним</label>
                        <div className='w-full flex justify-start items-center relative'>
                            <input
                                type='text'
                                placeholder='Аркадий Гачибасов'
                                className='px-11 py-4 w-full rounded-2xl focus:outline-none'
                            />

                            <ProfileIcon width={24} height={25} className='absolute ml-4' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-2.5'>
                        <label className='text-left'>Электронная почта</label>
                        <div className='w-full flex justify-start items-center relative'>
                            <input
                                type='email'
                                placeholder='tapiri@smashup.ru'
                                className='px-10 py-4 w-full rounded-2xl focus:outline-none'
                            />

                            <MailIcon width={20} height={16} className='absolute ml-4' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-5'>
                        <div className='w-full flex flex-col gap-2.5'>
                            <div className='flex flex-row justify-between'>
                                <label className='text-left'>Пароль</label>
                                <a href='/restore' className='font-semibold text-base text-primary'>
                                    Забыли пароль?
                                </a>
                            </div>

                            <div className='w-full flex justify-start items-center relative'>
                                <input
                                    type='email'
                                    placeholder='tapiri@smashup.ru'
                                    className='px-10 py-4 w-full rounded-2xl focus:outline-none'
                                />

                                <PasswordIcon width={17} height={20} className='absolute ml-4' />
                            </div>
                        </div>

                        <div className='text-left flex flex-row items-center gap-4'>
                            <input className='w-[32px] h-[32px]' type='checkbox' />
                            <label>
                                Я принимаю{' '}
                                <a className='text-primary underline' href='#'>
                                    пользовательское соглашение
                                </a>{' '}
                                и{' '}
                                <a className='text-primary underline' href='#'>
                                    политику конфиденциальности
                                </a>
                            </label>
                        </div>

                        <Button className='h-[54px]'>Войти</Button>

                        <div className='flex flex-row justify-between items-center'>
                            <div className='w-[15%] bg-gray-header h-[1px]'></div>
                            <span className='w-[60%]'>Зарегистрироваться с помощью</span>
                            <div className='w-[15%] bg-gray-header h-[1px]'></div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <OauthButton className='h-[54px]'>
                            <VkIcon width={25} height={25} /> VK ID
                        </OauthButton>
                        <span>
                            Уже зарегистрированы?{' '}
                            <a className='text-primary' href='/login'>
                                Войдите
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
