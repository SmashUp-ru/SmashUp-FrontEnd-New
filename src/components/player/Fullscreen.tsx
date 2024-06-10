import { twMerge } from 'tailwind-merge';
import SmashUpLogo from '@/components/icons/SmashUpLogo';
import Image from 'next/image';
import track from '/public/dev/moderation/picture.png';
import BackIcon from '@/components/icons/BackIcon';

export default function Fullscreen() {
    return (
        <div className={twMerge('absolute top-0 left-0 w-[100vw] h-[100vh] bg-black z-9999', '')}>
            <div className='w-full h-full bg-[#8F8FAB33]/[0.2] flex flex-col justify-center items-center relative'>
                <div className='absolute top-10 px-10 w-full flex flex-row justify-between items-center'>
                    <SmashUpLogo width={66} height={34} color='onSurface' />
                    <div className='flex flex-row gap-4 items-center'>
                        <span>Вы находитесь в полноэкранном режиме</span>
                        <div className='w-[40px] h-[40px] flex flex-col items-center justify-center rounded-full cursor-pointer bg-onSurfaceVariant -rotate-90'>
                            <BackIcon width={11} height={18} color='surface' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-6'>
                    <Image src={track} alt='track' className='w-[350px] h-[350px] rounded-8xl' />
                    <div className='flex flex-col items-center'>
                        <h1 className='text-lg font-bold text-onSurface'>Леонид, дай денег</h1>
                        <span className='text-lg font-bold text-onSurfaceVariant'>Soroka</span>
                    </div>
                    <div className='w-full h-[5px] bg-onSurfaceVariant rounded-8xl relative'>
                        <div className='w-1/2 h-[5px] bg-onSurface rounded-8xl absolute'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
