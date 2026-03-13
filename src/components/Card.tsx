import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card({venueName, imgSrc} : {venueName:string , imgSrc:string}) {
  return (
    <InteractiveCard>
      <div className='w-full h-[60%] relative rounded-t-lg'>
        <Image 
          src={imgSrc}
          alt='Venue Image'
          fill
          className='object-cover rounded-t-lg'
        />
      </div>
      <div className='w-full h-[40%] text-center text-[000000]'>
        {venueName}
      </div>
    </InteractiveCard>
  );
}