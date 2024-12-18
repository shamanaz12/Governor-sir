import React from 'react';
import Image from 'next/image';

function Array() {
  return (
    <div className="flex w-full justify-between mt-0 pt-0">
      <div className="flex-1 h-[300px]">
        <Image 
          src="/image/pic2.png" 
          alt="picture 3" 
          width={0} 
          height={0} 
          sizes="100vw" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>
      <div className="flex-1 h-[300px]">
        <Image 
          src="/image/pic3.png" 
          alt="picture 4" 
          width={0} 
          height={0} 
          sizes="100vw" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>
      <div className="flex-1 h-[300px]">
        <Image 
          src="/image/pic4.png" 
          alt="picture 7" 
          width={0} 
          height={0} 
          sizes="100vw" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>
    </div>
  );
}

export default Array;
