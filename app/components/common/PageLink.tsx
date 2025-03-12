import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { bannerImages } from "@/app/lib/constants";


const PageLinks = ({ items, title,imageUrl }:{items:any,title:any,imageUrl:any}) => {
  return (
    <section className="relative h-[200px] md:h-[400px] flex items-center justify-center w-full">
      {/* Swiper Carousel */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Swiper
          modules={[ Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {bannerImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={image?.imgSrc}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-fit" 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-0 opacity-50 "></div>

      <div className="relative text-white text-center ">
        <h3 className="text-4xl font-bold capitalize">{title}</h3>
        <div className="flex justify-center items-center gap-2 mt-2 text-lg font-semibold">
          {items.map((item:any, index:any) => (
            <div key={index} className="capitalize">
              <Link href={item.link} className="hover:underline">
                {item.name}
              </Link>
              {index < items.length - 1 && <span className="mx-1">{`//`}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageLinks;
