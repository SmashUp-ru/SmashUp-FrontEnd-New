import SmashUpUploadButton from '@/components/smashup/UploadButton/UploadButton';

export default function UploadButtonOverview() {
    return (
        <div className='flex flex-col gap-5'>
            <SmashUpUploadButton label='Загрузить мэшап'></SmashUpUploadButton>
            <SmashUpUploadButton label='Загрузить мэшап' loading={98}></SmashUpUploadButton>
        </div>
    );
}
