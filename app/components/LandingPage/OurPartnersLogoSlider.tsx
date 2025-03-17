"use client";

import Image from "next/image";
import Slider from "react-slick";

const OurPartnersLogoSlider = ({ images, title }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto container ">
      {title && (
        <h2 className="theme-clr text-start text-4xl font-bold">{title}</h2>
      )}
      <div className="py-4 ">
        <Slider {...settings}>
          {images?.map(( item:any, index:number ) => (
            <div
              key={index}
              className="flex justify-center items-center h-full"
            >
              {item?.imgSrc && (
                <Image
                  src={item?.imgSrc}
                  alt={`Partner ${index + 1}`}
                  width={116}
                  height={50}
                  className="bg-white h-32 w-52 p-3 rounded-xl "
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
      <hr />
    </div>
  );
};

export default OurPartnersLogoSlider;
