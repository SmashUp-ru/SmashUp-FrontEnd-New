import SearchIcon from '@/components/icons/SearchIcon';
import SmashUpInput from '@/components/smashup/Input/Input';

export default function Search() {
    return (
        <div onClick={() => {}} className='py-[1px] flex-grow'>
            <SmashUpInput
                placeholder='Поиск'
                icon={<SearchIcon width={16} height={16} color='onSurface' />}
                className=''
                onClick={() => {}}
            />
        </div>
    );
}
