'use client';

import Image from 'next/image';
import profile from '/public/dev/profile.png';
import VkBlueIcon from '@/components/icons/VkBlueIcon';
import SmashUpPassword from '@/components/smashup/Password/Password';
import BackIcon from '@/components/icons/BackIcon';
import GoogleIcon from '@/components/icons/GoogleIcon';
import SmashUpSlider from '@/components/smashup/Slider/Slider';
import SmashUpToggle from '@/components/smashup/Toggle/Toggle';
import SmashUpButton from '@/components/smashup/Button/Button';
import EditIcon from '@/components/icons/EditIcon';
import Link from 'next/link';
import { usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Settings() {
    const router = useRouter();
    const pathname = usePathname();

    const t = useTranslations('pages.settings');

    return (
        <div className='h-[calc(100%_-_150px)]'>
            <h1 className='font-bold text-4xl text-onSurface mb-6'>{t('title')}</h1>
            <div className='flex items-start gap-12 h-full'>
                {/*Аватарка*/}
                <label className='relative cursor-pointer' htmlFor='update-avatar'>
                    <Image
                        src={profile}
                        alt='Аватарка профиля'
                        className='w-[200px] h-[200px] rounded-full brightness-50'
                    />
                    <EditIcon
                        width={70}
                        height={70}
                        className='absolute top-0 right-0 left-0 bottom-0 m-auto'
                    />
                    <input id='update-avatar' type='file' className='hidden' />
                </label>
                <div className='relative flex flex-col gap-18 h-full'>
                    {/*Настройки профиля*/}
                    <div className='flex flex-col gap-9'>
                        <h2 className='font-bold text-3xl'>{t('profile-settings')}</h2>

                        {/*Никнейм*/}
                        <div>
                            <h3 className='font-medium text-base text-onSurfaceVariant'>
                                {t('nickname')}
                            </h3>
                            <span className='font-bold text-2xl text-onSurface'>LeonidM</span>
                        </div>

                        {/*Почта*/}
                        <div>
                            <h3 className='font-medium text-base text-onSurfaceVariant'>
                                {t('mail')}
                            </h3>
                            <span className='font-bold text-2xl text-onSurface'>
                                leonidm@gmail.com
                            </span>
                        </div>

                        {/*Пароль*/}
                        <div className='flex flex-row gap-x-20 gap-y-2 flex-wrap'>
                            <SmashUpPassword
                                heading={t('password.current')}
                                className='w-[400px]'
                                showPasswordButton
                            />
                            <SmashUpPassword
                                heading={t('password.new')}
                                className='w-[400px]'
                                showPasswordButton
                            />
                            <SmashUpPassword
                                heading={t('password.again')}
                                className='w-[400px]'
                                showPasswordButton
                            />
                        </div>

                        {/*OAuth*/}
                        <div className='flex flex-row gap-x-20 gap-y-10 flex-wrap'>
                            {/*Google*/}
                            <Link className='w-[400px] flex justify-between items-center' href='#'>
                                <div className='flex flex-row gap-6 items-center'>
                                    <GoogleIcon width={32} height={32} />
                                    <div>
                                        <h3 className='font-medium text-base text-onSurfaceVariant'>
                                            {t('disabled')}
                                        </h3>
                                        <span className='font-bold text-2xl text-onSurface'>
                                            Google
                                        </span>
                                    </div>
                                </div>

                                <BackIcon width={32} height={32} className='transform rotate-180' />
                            </Link>

                            {/*VK*/}
                            <Link className='w-[400px] flex justify-between items-center' href='#'>
                                <div className='flex flex-row gap-6 items-center'>
                                    <VkBlueIcon width={32} height={32} />
                                    <div>
                                        <h3 className='font-medium text-base text-onSurfaceVariant'>
                                            {t('disabled')}
                                        </h3>
                                        <span className='font-bold text-2xl text-onSurface'>
                                            VK
                                        </span>
                                    </div>
                                </div>

                                <BackIcon width={32} height={32} className='transform rotate-180' />
                            </Link>
                        </div>
                    </div>

                    {/*Настройки аккаунта*/}
                    <div className='flex flex-col gap-9'>
                        <h2 className='font-bold text-3xl'>{t('account-settings')}</h2>
                        <div className='flex flex-row gap-x-20 gap-y-10 flex-wrap'>
                            <SmashUpSlider
                                amount={5}
                                label={t('bitrate.label')}
                                markHints={[
                                    '64' + t('bitrate.marks.kb'),
                                    '96' + t('bitrate.marks.kb'),
                                    '128' + t('bitrate.marks.kb'),
                                    '160' + t('bitrate.marks.kb'),
                                    t('bitrate.marks.original')
                                ]}
                            />

                            <SmashUpToggle label={t('multisessions')} />

                            <SmashUpToggle label={t('explicit')} />
                        </div>
                    </div>

                    <SmashUpButton onClick={() => router.replace(pathname, { locale: 'ru' })}>
                        Russian
                    </SmashUpButton>
                    <SmashUpButton onClick={() => router.replace(pathname, { locale: 'en' })}>
                        English
                    </SmashUpButton>

                    <div className='p-5 bg-surface rounded-2xl absolute bottom-4 flex flex-row gap-6'>
                        <SmashUpButton>{t('save')}</SmashUpButton>
                        <SmashUpButton category='fill-default' className='w-[230px]'>
                            {t('cancel')}
                        </SmashUpButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
