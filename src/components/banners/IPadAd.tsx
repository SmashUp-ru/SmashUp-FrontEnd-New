import SmashUpButton from '@/components/smashup/Button/Button';
import banner from '/public/dev/banner.png';
import Image from 'next/image';

export default function IPadAd() {
    return (
        <div className='w-full h-full bg-black flex flex-col gap-8 justify-end items-center'>
            <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-5xl'>IPad Pro</h1>
                <p className='text-lg'>Unbelievably thin. Incredibly powerful.</p>
            </div>
            <div className='flex flex-row gap-5'>
                <SmashUpButton className='w-[150px] h-[40px]'>Learn more</SmashUpButton>
                <SmashUpButton className='w-[150px] h-[40px]' category='stroke'>
                    Buy
                </SmashUpButton>
            </div>
            <Image src={banner} alt='IPad Photo' />
        </div>
    );
}
