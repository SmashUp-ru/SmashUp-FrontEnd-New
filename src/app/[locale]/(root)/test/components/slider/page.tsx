import SmashUpSlider from '@/components/smashup/Slider/Slider';
import { useTranslations } from 'next-intl';

export default function SliderOverview() {
    const transl = useTranslations('test.slider');
    return (
        <div className='w-full h-1/2 flex flex-col justify-center items-center'>
            <div className='w-[500px] h-[100px] bg-surface rounded-2xl flex flex-col justify-center items-center'>
                <SmashUpSlider
                    amount={5}
                    label={transl('label')}
                    markHints={transl('marks')}
                />
            </div>
        </div>
    );
}
