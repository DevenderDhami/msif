import { CMP_TITLE } from "@/app/lib/constants";
import Image from "next/image";
import React from "react";
import servicesImg from "@/public/assets/about/services.png";

const WhoWeAre = () => {
  return (
    <div className="container text-start mx-auto ">
      <h4 className="theme-clr text-4xl font-bold ">Who We Are</h4>
      <div className="flex flex-col justify-center items-center  md:flex-row gap-5 ">
        <div className="div w-full md:w-2/3 ">
          <p className="text-gray-700  indent-10">
            {CMP_TITLE} is dedicated to empowering individuals through skill
            development, bridging the gap between education and industry needs.
            Our mission is to equip aspiring professionals with practical,
            job-ready skills through comprehensive training programs, industry
            collaborations, and innovative learning solutions. With a strong
            commitment to excellence, we focus on transforming careers,
            fostering entrepreneurship, and driving economic growth through
            skill-based education. Join us in shaping a future where skills open
            doors to limitless opportunities.
          </p>
          <p className="text-gray-700 indent-10 pt-4">
            With a strong commitment to excellence, we focus on transforming
            careers, fostering entrepreneurship, and driving economic growth in
            rural communities through skill-based education. Our programs are
            designed to be hands-on and industry-relevant, ensuring that
            learners acquire the knowledge and experience necessary to succeed
            in the workforce
          </p>
        </div>
        <div className=" w-full md:w-1/3">
          <Image
            src={servicesImg}
            width={200}
            height={200}
            alt="services"
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
