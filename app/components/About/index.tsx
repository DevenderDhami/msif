import { aboutData } from '@/app/data/aboutData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About: React.FC = () => {
  return (
      <div className="wow fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div>
          <h4 className="theme-clr text-4xl font-semibold text-center py-3">About </h4>
          <p className="text-md text-center text-gray-700 my-3 ">
            At Eupraxis, we believe that continuous learning is the key to unlocking your potential. Our platform offers cutting-edge, industry-driven courses designed to help you develop essential skills for the digital age.
          </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
              {aboutData?.map((about, index) => (
                <div
                  key={index}
                  className="about-item p-2 hover:theme-bg hover:cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="">
                    <Image src={about?.image} alt={about.title} className="w-full h-48 object-cover rounded-md" />
                  </div>
                  <Link href="#" className="text-md text-center font-semibold theme-clr hover:font-bold block">
                    {about.title}
                  </Link>
                  {/* <p className="text-gray-700 text-xs text-center px-3">{about.desc}</p> */}
                </div>
              ))}
            </div>
            
        </div>
      </div>
  );
};

export default About;
