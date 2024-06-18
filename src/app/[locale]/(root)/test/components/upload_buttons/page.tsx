import SmashUpUploadButton from '@/components/smashup/UploadButton/UploadButton';
import { useTranslations } from 'next-intl';

export default function UploadButtonOverview() {
    const transl = useTranslations('upload_button');
    return (
        <div className='flex flex-col gap-5'>
            <SmashUpUploadButton label={transl('title')}></SmashUpUploadButton>
            <SmashUpUploadButton label={transl('progress')} loading={98}></SmashUpUploadButton>
        </div>
    );
}
