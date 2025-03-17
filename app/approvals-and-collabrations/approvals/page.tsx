"use client";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import React, { useState, useEffect } from "react";
import PageLinks from "@/app/components/common/PageLink";
import { approvals, ourRecognitions } from "@/app/lib/constants";

const ApprovalsPage = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  useEffect(() => {
    if (selectedPdf) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPdf]);

  return (
    <>
      <PageLinks
        title="Our Approvals"
        imageUrl="/assets/pagelinks/approval.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Our Approvals",
            link: "/approvals-and-collabrations/approvals",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-5">
        <div className="certificates">
          <h2 className="text-4xl theme-clr font-bold mb-4 pl-6">
            Our Recogitions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 pb-10">
            {ourRecognitions?.map((doc, index) => (
              <div
                key={index}
                className="border p-2 rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-white text-center transition-all"
                onClick={() => setSelectedPdf(doc.url)}
              >
                <div className="flex items-center justify-center rounded-lg ">
                  <PictureAsPdfIcon
                    style={{ fontSize: 50 }}
                    className="text-red"
                  />
                </div>
                <p className="mt-2 theme-clr text-lg font-semibold">
                  {doc.name}
                </p>
                <p className="mt-2 text-blue-600 font-semibold">
                  View Document
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="bg-gray-900 pt-5 rounded-lg w-full max-w-4xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute -top-1 right-3 text-red hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            <iframe
              src={selectedPdf}
              className="w-full h-[90vh] rounded-lg border-none"
              title="PDF Preview"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ApprovalsPage;
