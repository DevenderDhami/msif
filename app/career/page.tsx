"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";
import { CMP_TITLE } from "../lib/constants";
import Image from "next/image";
import careerImg from "@/public/assets/career/career.jpg";
import ContactForm from "../components/LandingPage/ContactForm";

const CareerPage = () => {
  return (
    <>
      <PageLinks
        title="Work With us"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Work With us", link: "/career" },
        ]}
      />
      <div className="container mx-auto py-8 px-5">
        <h3 className="theme-clr  text-3xl"> Work With Us</h3>

        <div className="flex flex-col justify-evenly  md:flex-row gap-5 py-5 ">
          <div className="w-full md:w-1/2">
          <ContactForm/>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={careerImg}
              width={400}
              height={400}
              alt="services"
              className="w-full object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
