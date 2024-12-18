import React from 'react';
import Image from 'next/image';

function CoreCourse() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-blue-600 mb-12 mt-10">Core Course Sequence</h1>
      <div className="flex justify-between items-center">
        <div className="flex-1 px-4">
          <img 
            src="/image/core1.png" 
            alt="pic" 
            width={300} 
            height={200} 
            
          />
        </div>
        <div className="flex-1 px-4">
          <img 
            src="/image/core2.png" 
            alt="pics" 
            width={300} 
            height={200} 
           
          />
        </div>
        <div className="flex-1 px-4">
          <img 
            src="/image/core3.png" 
            alt="picture" 
            width={300} 
            height={200} 
          
          />
        </div>
      </div>
    </div>
  );
}

export default CoreCourse;
