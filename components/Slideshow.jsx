import Image from "next/image";
import React from "react";
import pic from "../Assets/img-1.jpg";



const Slideshow = () => {
  return (
    <div className="w-full">
      
          <Image src={pic} className="w-full h-full bg-fixed z-0 " alt='banner'/>
        <div className="p-7 -mt-96  ml-20 items-center justify-center z-1 text-bold  text-white font-bold text-5xl  absolute  ">
        {/* <span className="text-bold  text-white font-bold text-5xl  absolute "> */}
        <p className="text-blue-300 p-1 text-5xl ">Huge Saving on</p>
        <p className="font-bold text-5xl p-1 ">UHD Televisions</p>
        <p className="text-xl mt-5 font-light ">Sale up to 70% off on selected items*</p>
        <button className="rounded-full px-7 py-2 text-xl border-2 mt-9 capitalize border-white items-center justify-center">shop now</button>
      {/* </span> */}
   
      </div>
      
     </div>
  );
};

export default Slideshow;
