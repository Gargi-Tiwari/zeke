import React from "react";
import { AiFillTrophy } from "react-icons/ai";
import { FaShippingFast, FaAward } from "react-icons/fa";
// import

const Promise = () => {
  return (
    <div className=" flex flex-1 mt-3 flex-col ">
      <div className="flex flex-1 flex-row items-center justify-center ">
        <div className="blue-glassmorphism p-2 m-4 items-center justify-center text-white text-xl flex flex-1 flex-row">
          <FaShippingFast className="text-white text-3xl  " />
          <p className="p-2 font-semibold font-sans ">
            Free Shipping & Delivery
          </p>
        </div>
        <div className="blue-glassmorphism p-2 m-4 items-center justify-center text-white text-xl flex flex-1 flex-row">
          <FaAward className="text-white text-3xl " />
          <p className="p-2 font-semibold font-sans ">Lowest Price Guarantee</p>
        </div>
        <div className="blue-glassmorphism p-2 m-4 items-center justify-center text-white text-xl flex flex-1 flex-row">
          <AiFillTrophy className="text-white text-3xl " />
          <p className="p-2 font-semibold font-sans ">
            Longest warranties offer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promise;
