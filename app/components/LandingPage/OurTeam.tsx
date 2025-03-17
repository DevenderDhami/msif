"use client";
import React from "react";
import "swiper/css";
import { ourTeamData } from "@/app/data/ourTeamData";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="container mx-auto">
      <h4 className="theme-clr text-4xl font-bold ">Our Team</h4>
      <div className="flex  justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3 ">
          {ourTeamData?.map((member: any, i: number) => (
            <div
              key={i}
              className="flex  flex-col  justify-center p-2 border rounded-lg gap-3"
            >
              <Image
                src={member?.image}
                alt={member?.name}
                width={200}
                height={200}
                className="w-full h-auto rounded-sm object-cover"
              />
              <div className="text-center">
                <p className="font-bold">{member?.name}</p>
                <p>{member?.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
