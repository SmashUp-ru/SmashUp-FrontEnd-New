import { recently, selections } from '@/utils/data';
import Card from '@/components/Card';
import Banner from '@/components/banners/Banner';
import IPadAd from '@/components/banners/IPadAd';

export default function Home() {
    return (
        <div className='flex flex-col gap-12'>
            {/* Реклама */}
            <Banner>
                <IPadAd />
            </Banner>

            {/* Подборки */}
            <div>
                <h2 className='font-semibold text-2xl text-onSurface pb-5'>Подборки</h2>
                <div className='flex flex-row gap-7 w-full h-[301px] overflow-visible'>
                    {selections.map((item) => (
                        <Card key={item.id} {...item} bg />
                    ))}
                </div>
            </div>

            {/* Недавно прослушано */}
            <div>
                <h2 className='font-semibold text-2xl text-onSurface pb-5'>Недавно прослушано</h2>
                <div className='w-full h-[301px] overflow-visible flex flex-row gap-7'>
                    {recently.map((item) => (
                        <Card key={item.id} {...item} bg />
                    ))}
                </div>
            </div>
        </div>
    );
}
