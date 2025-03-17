"use client";
import React, { useState } from "react";
import PageLinks from "../components/common/PageLink";
import Awards from "../components/gallery/Awards";
import Gallery from "../components/gallery/Gallery";
import NoDataFound from "../components/common/NoDataFound";

const GalleryPage = () => {
  const [currentTab, setCurrentTab] = useState("Awards");

  return (
    <>
      <PageLinks
        title="Gallery"
        imageUrl="/assets/pagelinks/gallery.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Gallery", link: "/gallery" },
        ]}
      />

      <div className="container mx-auto py-8 px-5">
        <div className="mb-5 flex justify-center">
          <ul className="flex space-x-4 border-b">
            <li
              onClick={() => setCurrentTab("Awards")}
              className={`cursor-pointer pb-2 px-4 ${
                currentTab === "Awards"
                  ? "border-b-2 border-orange-500 font-semibold"
                  : ""
              }`}
            >
              Awards
            </li>
            <li
              onClick={() => setCurrentTab("Gallery")}
              className={`cursor-pointer pb-2 px-4 ${
                currentTab === "Gallery"
                  ? "border-b-2 border-orange-500 font-semibold"
                  : ""
              }`}
            >
              Gallery
            </li>
            <li
              onClick={() => setCurrentTab("Videos")}
              className={`cursor-pointer pb-2 px-4 ${
                currentTab === "Videos"
                  ? "border-b-2 border-orange-500 font-semibold"
                  : ""
              }`}
            >
              Videos
            </li>
          </ul>
        </div>

        <div className="py-5">
          {currentTab === "Awards" && (
            <div>
              <Awards />
            </div>
          )}

          {currentTab === "Gallery" && (
            <div>
              <Gallery />
            </div>
          )}

          {currentTab === "Videos" && (
            <div>
              <NoDataFound/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
