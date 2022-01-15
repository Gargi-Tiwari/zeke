import React from "react";
import Image from "next/image";
import chair from "../Assets/chair.jpg";
import soundbar from "../Assets/soundbar.jpg";
import mobile from "../Assets/mobile.jpg";
import laptop from "../Assets/laptop.jpg";
import console from "../Assets/consoles.jpg";
const Items = () => {
  return (
    <div className="mt-5   ">
      <div className="flex-row mt-5 p-5 flex flex-1 w-full items-center justify-center">
        <div className="p-5 m-5 eth-card white-glassmorphism">
          <Image
            src={console}
            alt="chair"
            className="w-80 h-40 p-5 white-glassMorphism mx-5 px-10 justify-center rounded-lg"
          />
        </div>
        <div className="p-5 m-5 eth-card white-glassmorphism">
          <Image
            src={soundbar}
            alt="chair"
            className=" p-5 white-glassMorphism  mx-5 px-10 justify-center rounded-lg"
          />
        </div>
        <div className="p-5 m-5 eth-card white-glassmorphism ">
          <Image
            src={chair}
            alt="chair"
            className="p-5 white-glassMorphism mx-5 px-10 justify-center rounded-lg"
          />
        </div>
      </div>
      <div className="flex-row flex  flex-1 justify-center">
        <div className="p-5 m-5 eth-card white-glassmorphism">
          <Image
            src={mobile}
            alt="chair"
            className="white-glassMorphism mx-5 px-10 justify-center rounded-lg"
          />
        </div>
        <div className="p-5 m-5 eth-card white-glassmorphism"> 
          <Image
            src={laptop}
            alt="chair"
            className="white-glassMorphism mx-5 px-10 justify-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Items;
