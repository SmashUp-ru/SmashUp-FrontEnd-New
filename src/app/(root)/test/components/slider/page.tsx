import SmashUpSlider from '@/components/smashup/Slider/Slider';

export default function SliderOverview() {
    return (
        <div className='w-full h-1/2 flex flex-col justify-center items-center'>
            <div className='w-[500px] h-[100px] bg-surface rounded-2xl flex flex-col justify-center items-center'>
                <SmashUpSlider
                    amount={5}
                    label='Битрейт мэшапов'
                    markHints={['64кб', '96кб', '128кб', '160кб', 'Оригинал']}
                />
            </div>
        </div>
    );
}
