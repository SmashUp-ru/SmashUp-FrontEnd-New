import { IconComponentProps } from '@/models/icons';

export default function RepeatOneIcon({ width, height, color, onClick }: IconComponentProps) {
    // w: 24, h: 24
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            className={`text-${color} fill-current ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}
        >
            <path
                d='M9.01762669,16 L16.5,16 C18.4477153,16 19.5,14.9477153 19.5,13 C19.5,12.4477153 19.9477153,12 20.5,12 C21.0522847,12 21.5,12.4477153 21.5,13 C21.5,16.0522847 19.5522847,18 16.5,18 L9.01762669,18 L9.01762669,19.7507488 C9.01762669,20.0337334 8.84202743,20.1157182 8.62541477,19.9500732 L5.1598386,17.2999268 C4.95024387,17.1396484 4.94322594,16.8657182 5.1598386,16.7000732 L8.62541477,14.0499268 C8.8350095,13.8896484 9.01762669,13.9735224 9.01762669,14.2492512 L9.01762669,16 Z M15,8 L7.5,8 C5.55228475,8 4.5,9.05228475 4.5,11 C4.5,11.5522847 4.05228475,12 3.5,12 C2.94771525,12 2.5,11.5522847 2.5,11 C2.5,7.94771525 4.44771525,6 7.5,6 L15,6 L15,4.24925116 C15,3.97352236 15.1826172,3.88964844 15.3922119,4.04992676 L18.8577881,6.70007324 C19.0744007,6.86571822 19.0673828,7.13964844 18.8577881,7.29992676 L15.3922119,9.95007324 C15.1755993,10.1157182 15,10.0337334 15,9.75074884 L15,8 Z M13,9 L13,15 L11.5,15 L11.5,11 L10,11 L10,10 L12,9 L13,9 Z'
                id='Combined-Shape'
                fill='currentColor'
            ></path>
        </svg>
    );
}