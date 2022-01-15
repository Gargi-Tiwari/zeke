import Image from 'next/image'
import React from 'react'
import audio from '../Assets/icon-audio.jpg'
import camera from '../Assets/icon-camera.jpg'
import fridge from '../Assets/icon-fridge.jpg'
import game from '../Assets/icon-game.jpg'
import headphone from '../Assets/icon-headphone.jpg'
import kettle from '../Assets/icon-kettle.jpg'
import microwave from '../Assets/icon-microwave.jpg'
import pc from '../Assets/icon-pc.jpg'
import lap from '../Assets/icon-lap.jpg'
import phone from '../Assets/icon-phone.jpg'
import smart from '../Assets/icon-smart.jpg'
import tivi from '../Assets/icon-tivi.jpg'
const Categories = () => {
    return (
        <div className='text-white mt-5 '>
            <div className='text-center font-bold font-mono text-3xl capitalize border-b-2 p-3 '>
                <h1>Shop by Categories</h1>
            </div>

            <div className='flex flex-rows  w-full  items-center  justify-center p-5 flex-1 '>
            <div className=' items-center justify-center mx-2 p-5 white-glassmorphism '>
            <Image src={phone} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg '>Mobile Phones</p>
            </div>
            <div className=' items-center justify-center mx-2 p-5 white-glassmorphism'>
            <Image src={lap} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg '>Laptops & Tablets</p>
            </div>
            <div className=' items-center justify-center mx-2 p-5 white-glassmorphism'>
            <Image src={tivi} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg '>Television</p>
            </div>
            <div className=' items-center justify-center p-5 mx-2 white-glassmorphism'>
              <Image src={pc} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg '>PCs & Accessories</p>
            </div>
            <div className=' items-center justify-center p-5 mx-2 white-glassmorphism'>
            <Image src={audio} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg '>Audio & video</p>
            </div>
            <div className=' items-center justify-center p-5 mx-2 white-glassmorphism'>
            <Image src={game} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg '>Gaming</p>
            </div>

            
            </div>
            <div className='flex flex-rows items-center justify-center  p-5 flex-1 '>
            <div className=' items-center justify-center p-5 mx-2 white-glassmorphism '>
            <Image src={fridge} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg items-center '>Home Appliances</p>
            </div>
            <div className=' items-center justify-center  p-5 mx-2 white-glassmorphism'>
            <Image src={microwave} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-lg '>Kitchen Appliances</p>
            </div>
            <div className=' items-center justify-center  p-5 mx-2 white-glassmorphism'>
            <Image src={camera} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-xl '>Cameras</p>
            </div>
            <div className=' items-center justify-center p-5 mx-2 white-glassmorphism'>
              <Image src={kettle} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-xl '>Consumables</p>
            </div>
            <div className=' items-center justify-center p-5 mx-2 white-glassmorphism'>
            <Image src={smart} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-xl '>Smart Home</p>
            </div>
            <div className=' items-center justify-center p-5 mx-2 white-glassmorphism'>
            <Image src={headphone} alt='access' className='w-40 h-40 rounded-full items-center justify-center blue-glassmorphism '/>
              <p className='text-center font-normal text-xl '>Accessories</p>
            </div>

            
            </div>
        </div>
    )
}

export default Categories
