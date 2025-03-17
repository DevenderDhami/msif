"use client";
import Slider from "react-slick";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { testimonialData } from "@/app/data/testimonialsData";

const settings = {
  dots: true,
  dotsClass: "slick-dots",
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Testimonials: React.FC = () => {
  return (
    <div className="mx-auto container ">
      <h4 className="theme-clr text-4xl font-bold ">Testimonials</h4>
      <Slider {...settings}>
        {testimonialData?.map((items, i) => (
          <div key={i}>
            <div
              className={`bg-white m-4 p-5 relative ${
                i % 2 ? "middleDiv" : "testimonial-shadow"
              }`}
            >
              <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                  <Image
                    src={items.imgSrc}
                    alt={items.name}
                    width={100}
                    height={100}
                    className="inline-block rounded-full mx"
                  />
                  <div>
                    <h3 className="text-lg  text-center font-medium text-darkbrown">
                      {items.name}
                    </h3>
                    <h3 className="text-sm font-normal text-center text-lightgray">
                      {items.profession}
                    </h3>
                  </div>
                </div>
              </div>
              <h4 className="text-base font-normal text-darkgray my-4">
                {items.comment}
              </h4>
              <hr style={{ color: "#D7D5D5" }} />
              <div className="flex justify-between">
                {/* <div className="flex">
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-gold" />
                  <StarIcon width={20} className="text-lightgray" />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
