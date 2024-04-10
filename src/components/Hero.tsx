import Image from 'next/image';

interface HeroProps{
    imgData: string;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
    return(
        <div className="relative h-screen">
            <div className='absolute -z-10 inset-0'>
                <Image 
                src={props.imgData}
                alt={props.imgAlt}
                fill //this makes it so you don't need width and height props. If not fill, need those
                style={{objectFit: 'cover'}}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900" /> 
            </div>
            <div className="pt-48 flex justify-center items-center">
                <h1 className="text-white text-6xl">{props.title}</h1>
            </div>
            <div className="text-white text-m">
                {props.children}
            </div>
        </div>
    )
}