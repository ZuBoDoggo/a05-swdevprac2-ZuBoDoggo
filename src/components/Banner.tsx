import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative w-screen h-[60vh] flex items-center justify-center !mt-[75px] p-[5px] overflow-hidden">
      <Image 
        src={'/img/banner.png'}
        alt="Venue Banner" 
        fill
        priority 
        className="object-cover" 
      />
      
      <div className="relative z-10 w-1/2 bg-black/60 p-5 text-center text-white">
        <h1 className="text-4xl font-semibold font-serif">where every event finds its venue</h1>
        <h3 className="text-base font-sans">
          Finding the perfect venue has never been easier. Whether it's a wedding, corporate events,<br></br> 
          or private party, we connect people to the perfect places.
        </h3>
      </div>
    </div>
  );
}