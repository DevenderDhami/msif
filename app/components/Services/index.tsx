"use client";
import { CMP_TITLE } from "@/app/lib/constants";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { ourServicesData } from "@/app/data/ourServicesData";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className=" mx-auto">
        <h4 className="theme-clr text-4xl font-bold ">Our Services</h4>
        <p className="text-gray-700 w-full my-auto py-2 indent-10">
          At {CMP_TITLE}, we follow a structured approach to mobilize, train,
          and place candidates, ensuring they gain the right skills and secure
          meaningful employment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
          {ourServicesData?.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ServiceItem {
  title: string;
  desc: string;
  image: StaticImageData;
}

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedDesc = service.desc.slice(0, 120);
  const showReadMore = service.desc.length > 120;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
      <Image
        src={service.image}
        alt={service.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="pt-4">
        <p className="text-xl text-center font-semibold theme-clr hover:font-bold">
          {service.title}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          {isExpanded ? service.desc : `${truncatedDesc}...`}
        </p>
        {showReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-500 hover:underline focus:outline-none text-sm"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
