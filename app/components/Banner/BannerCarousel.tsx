"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { bannersData } from "@/app/data/BannersData";
import { useState, useEffect } from "react";

const BannerCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if screen width is <768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for screen size changes
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {bannersData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-[80vh] flex items-center justify-center  rounded-lg overflow-hidden shadow-lg">
              <Image
                src={isMobile ? item.imageSmall : item.imageLarge} 
                alt={item.title}
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
