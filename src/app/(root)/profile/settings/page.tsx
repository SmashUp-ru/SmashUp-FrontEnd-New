import Image from 'next/image';
import profile from '/public/dev/profile.png';
import SmashUpSlider from '@/components/smashup/Slider/Slider';
import SmashUpCheckBox from '@/components/smashup/Checkbox/Checkbox';

export default function Settings() {
    return (
        <div className='px-8 flex flex-col gap-6'>
            {/* Профиль */}
            <div className='flex flex-row bg-sidebar-gray w-full h-[238px] rounded-4xl px-6 py-6 gap-12'>
                <Image
                    src={profile}
                    width={188}
                    height={188}
                    alt='dmhd6219'
                    className='rounded-3xl'
                />

                <div className='flex flex-col justify-center'>
                    <h1 className='font-semibold text-5xl text-secondary-text'>dmhd6219</h1>
                </div>
            </div>

            {/* Настройки */}
            <div className='w-full flex flex-col gap-6'>
                <div className='py-4 px-6'>
                    <SmashUpCheckBox label='Проигрывать треки с пометкой Explicit (Мат)' />
                </div>

                <div className='py-4 px-6'>
                    <SmashUpCheckBox label='Разрешить мультисессии' />
                </div>

                <div className='py-4 px-6'>
                    <SmashUpSlider
                        amount={5}
                        label='Битрейт мэшапов'
                        markHints={['64кб', '96кб', '128кб', '160кб', 'Оригинал']}
                    />
                </div>
            </div>
        </div>
    );
}
