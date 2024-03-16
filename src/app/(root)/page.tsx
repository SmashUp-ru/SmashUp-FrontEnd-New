import { recently, selections } from '@/utils/data';
import Card from '@/components/main/Card';

export default function Home() {
    return (
        <div className='flex flex-col px-8 gap-12'>
            <div>
                <h2 className='font-semibold text-2xl text-gray-header pb-5'>Подборки</h2>
                <div className='flex flex-row gap-7'>
                    {selections.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className='font-semibold text-2xl text-gray-header pb-5'>Недавно прослушано</h2>
                <div className='flex flex-row gap-7'>
                    {recently.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
