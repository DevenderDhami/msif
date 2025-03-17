"use client";
import React from "react";
import {
  School,
  Work,
  AccessTime,
  SupervisedUserCircle,
  Code,
  Groups,
  Verified,
  Person,
  Update,
} from "@mui/icons-material";

const SkillDevelopment = () => {
  // Skill Data with JSX Icons
  const skillData = [
    {
      id: 1,
      title: "Practical Skill Learning",
      description: "Master practical skills with hands-on projects.",
      icon: <School fontSize="large" className="text-blue-500 h-16 w-16" />,
    },
    {
      id: 2,
      title: "Industry-Driven Courses",
      description: "Stay ahead with courses meeting industry demands.",
      icon: <Work fontSize="large" className="text-green-500 h-16 w-16" />,
    },
    {
      id: 3,
      title: "Flexible Learning Paths",
      description: "Learn at your own pace with flexible schedules.",
      icon: (
        <AccessTime fontSize="large" className="text-purple-500 h-16 w-16" />
      ),
    },
    {
      id: 4,
      title: "Personalized Mentorship",
      description: "Get guidance from experienced mentors.",
      icon: (
        <SupervisedUserCircle
          fontSize="large"
          className="text-red-500 h-16 w-16"
        />
      ),
    },
    {
      id: 5,
      title: "Real-World Projects",
      description: "Work on projects that simulate real-world challenges.",
      icon: <Code fontSize="large" className="text-indigo-500 h-16 w-16" />,
    },
    {
      id: 6,
      title: "Community Learning",
      description: "Engage with a community of learners.",
      icon: <Groups fontSize="large" className="text-yellow-500 h-16 w-16" />,
    },
    {
      id: 7,
      title: "Skill Certification",
      description: "Earn industry-recognized certifications.",
      icon: <Verified fontSize="large" className="text-teal-500 h-16 w-16" />,
    },
    {
      id: 8,
      title: "Expert Guidance",
      description: "Learn from seasoned professionals.",
      icon: <Person fontSize="large" className="text-pink-500 h-16 w-16" />,
    },
    {
      id: 9,
      title: "Continuous Updates",
      description: "Stay updated with the latest industry trends.",
      icon: <Update fontSize="large" className="text-gray-500 h-16 w-16" />,
    },
  ];

  return (
    <section id="about-3" className="">
      <div className="container mx-auto ">
        <div className=" mb-12">
          <h3 className="text-3xl font-bold text-gray-800">
            Empower Your Journey with Skill Development
          </h3>
          <p className="text-lg text-gray-600 mt-2">
            Explore our core offerings designed to elevate your skills and
            transform your future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillData.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200 transition-transform transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">{skill.icon}</div>
              <h5 className="text-xl font-semibold text-gray-800 mb-2">
                {skill.title}
              </h5>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopment;
