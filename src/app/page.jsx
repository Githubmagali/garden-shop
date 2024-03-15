"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import { swiperPage } from '@/assets/about';



function HomePage(){


  return(
    <div className=''>
    <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
       
        >
        {swiperPage.map((item, index) => (
            <SwiperSlide key={index}>
                <div className='overflow-hidden flex items-center justify-center '>
                    <img src={item.img} alt={item.name} className='w-full h-96 object-cover'/>
                    <p className='absolute pt-48 text-3xl font-bold text-white'>{item.text}</p>
                </div>
            </SwiperSlide>

        ))}


    </Swiper>
</div>


  )
}

export default HomePage