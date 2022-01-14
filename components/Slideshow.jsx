import Image from 'next/image'
import React from 'react'
import pic from '../Assets/img-1.jpg'
const Slideshow = () => {
    return (
        <div className='w-full h-40 rounded-md'>
            <Image src={pic} sizes='11/12' width={'4000'} height={'1000'} className='w-full h-40' alt='bg'/>
        </div>
    )
}

export default Slideshow
