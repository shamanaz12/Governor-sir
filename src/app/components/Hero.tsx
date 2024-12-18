
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-full bg-gray-100 md:flex-row">
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left p-5 md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text sky to-blue-500 leading-snug">
          Governor Sindh <br />
          Kamran Khan Tessori
        </h1>
        <p className=" font-bold text mt-4 text-lg text-blue-800
         sm:text-xl">
          Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
        </p>
        <p className="mt-2 text-green-600 font-semibold text-xl">
          Earn up to $5,000 / month
        </p>
        <p className="mt-6 text-gray-700 text-lg">
          Now admissions are open in <strong>Hyderabad</strong>
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          APPLY NOW
        </button>
        <p className="mt-4 text-gray-500 text-sm">
          <strong className="text-gray-800">562,143</strong> Accepted Applications
        </p>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 h-full bg-gray-100">
        <Image
          src="/image/sir.png" 
          alt="Picture of sir"
          width={800} 
          height={600}
          className="rounded-lg object-cover" 
          priority 
        />
      
      </div>
    </section>
  );
};

export default Hero;
