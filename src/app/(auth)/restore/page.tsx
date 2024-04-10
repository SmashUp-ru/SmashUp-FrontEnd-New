import React from 'react';
import MailIcon from '@/components/icons/MailIcon';
import SmashUpInput from '@/components/smashup/Input/Input';
import SmashUpButton from '@/components/smashup/Button/Button';

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
                    <SmashUpInput
                        heading='Электронная почта'
                        placeholder='tapiri@example.com'
                        icon={<MailIcon width={20} height={17} />}
                    />

                    <SmashUpButton>Подтвердить</SmashUpButton>
                </form>
            </div>
        </div>
    );
}
