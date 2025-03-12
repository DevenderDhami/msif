"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";
import { CMP_TITLE, ourExpertiesImages } from "../lib/constants";
import Image from "next/image";
import aboutImg1 from "@/public/assets/about/about.png";
import aboutImg2 from "@/public/assets/about/services.png";
import AchievementsSection from "../components/Projects/Achievement";
import useRandomImages from "../lib/hooks/useRandomImages";
import Skeleton from "@mui/material/Skeleton";
import AboutSection from "../components/LandingPage/AboutSection";
import Testimonials from "../components/Testimonials";
import OurTeam from "../components/LandingPage/OurTeam";

const AboutUsPage = () => {
  const { images, loading, error } = useRandomImages(ourExpertiesImages);
  return (
    <>
      <PageLinks
        title="About MSIF"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "About MSIF", link: "/about-us" },
        ]}
      />
      <div className="container mx-auto py-8 px-4 md:px-8 text-justify">
        <h3 className="theme-clr  font-bold text-4xl"> About MSIF</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center py-5">
          <div className="indent-10 flex flex-col gap-2 h-full text-gray-700  ">
            <p>
              {`
      MSIF is dedicated to empowering individuals in rural areas by
      bridging the gap between education and industry needs. Our mission
      is to provide aspiring professionals in underserved communities
      with practical, job-ready skills that align with the demands of
      today's job market. Through comprehensive training programs,
      industry collaborations, and innovative learning solutions, we aim
      to create pathways to employment and entrepreneurship in rural
      regions.
    `}
            </p>
            <p>
              {`
      With a strong commitment to excellence, we focus on transforming
      careers, fostering entrepreneurship, and driving economic growth
      in rural communities through skill-based education.
    `}
            </p>
          </div>

          <div className="flex justify-center items-center w-full order-2  md:order-1">
            {loading ? (
              <Skeleton
                variant="rectangular"
                className="w-full h-[300px] rounded-lg"
              />
            ) : (
              <Image
                src={images?.firstImage}
                width={800}
                height={450}
                alt="About Us"
                className="w-full max-h-[300px] h-auto rounded-lg object-cover"
              />
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className=" container mx-auto px-8 py-10">
          <Testimonials />
        </div>
      </div>
      <div className="">
        <div className=" container mx-auto px-8 py-10">
          <AboutSection />
        </div>
      </div>
      <div className="bg-gray-50">
        <div className=" container mx-auto px-8 py-10">
          <OurTeam />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
