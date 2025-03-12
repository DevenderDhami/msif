"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { bannerImages } from "@/app/lib/constants";

const BannerCarousel = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500 }}
        loop={true}
        className="w-full"
      >
        {bannerImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-[80vh] flex items-center justify-center  overflow-hidden ">
              <Image
                src={item?.imgSrc}
                alt={"banner"}
                layout="responsive"
                width={1000}
                height={1080}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
