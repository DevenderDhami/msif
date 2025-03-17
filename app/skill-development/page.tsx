"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";
import SkillDevelopment from "../components/skill-development/SkillDevelopment";

const OurExpertisePage = () => {
  return (
    <>
      <PageLinks
        title="Skill Development"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Skill Development", link: "/skill-development" },
        ]}
      />
      <div className="container mx-auto px-6  py-5">
        <div className="">
          <SkillDevelopment />
        </div>
      </div>
    </>
  );
};

export default OurExpertisePage;
