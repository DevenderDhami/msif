import Image from "next/image";
import { aboutSectionData } from "@/app/data/aboutData";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about-2" className="w-full">
      <div className="container mx-auto  text-justify">
        {aboutSectionData?.aboutSections.map((section: any, index: any) => (
          <div
            className={`flex flex-col md:flex-row items-center my-10  gap-5 md:gap-14 py-0 md:my-14 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            key={section.id}
          >
            <div className="w-full md:w-1/2">
              <Image
                className="w-full max-h-[300px] rounded-lg shadow-sm"
                src={section.image}
                alt={section.alt}
                width={300}
                height={300}
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl py-4 font-semibold text-gray-800 ">
                {section.title}
              </h3>
              <p className="text-md text-gray-600 ">{section.text}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {section.list.map((item:any, i:any) => (
                  <li key={i} className="text-md">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
