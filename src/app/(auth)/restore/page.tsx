import React from 'react';
import MailIcon from '@/components/icons/MailIcon';
import Button from '@/components/Button/Button';

export default function Restore() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-9'>
            {/* Заголовок */}
            <div className='w-[90%] max-w-[580px] text-center'>
                <h1 className='text-4xl md:text-5xl text-primary font-semibold'>
                    Восстановление пароля
                </h1>
                <p className='text-secondary-text font-medium text-xl'>Чота тут</p>
            </div>

            {/* Форма */}
            <div className='text-center w-[90%] max-w-[460px]'>
                <form className='flex flex-col gap-6 w-full'>
                    {/* Почта */}
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
                        <Button className='h-[54px]'>Подтвердить</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
