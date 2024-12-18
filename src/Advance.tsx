import React from 'react';
import Image from 'next/image';

function CoreCourse() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-blue-600 mb-12 mt-10">Advance Course Sequence</h1>
      <div className="flex justify-between items-center">
        <div className="flex-1 px-4">
          <img 
            src="/image/advance1.png" 
            alt="advance1" 
            width={350} 
            height={350} 
          />
        </div>
        <div className="flex-1 px-4">
          <img 
            src="/image/advance2.png" 
            alt="advance2" 
            width={350} 
            height={350} 
          />
        </div>
        <div className="flex-1 px-4">
          <img 
            src="/image/advance3.png" 
            alt="advance3" 
            width={350} 
            height={350} 
          />
        </div>
        <div className="flex-1 px-4">
          <img 
            src="/image/advance4.png" 
            alt="advance4" 
            width={350} 
            height={350} 
          />
        </div>
        <div className="flex-1 px-4">
          <img 
            src="/image/advance5.png" 
            alt="advance5" 
            width={350} 
            height={350} 
          />
        </div>
      </div>
    </div>
  );
}

export default CoreCourse;
