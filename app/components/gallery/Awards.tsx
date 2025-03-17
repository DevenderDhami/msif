import React, { useState, useEffect } from "react";
import ImageModal from "../common/ImageModal";
import VisibilityIcon from "@mui/icons-material/Visibility";

const data = [
  { imgSrc: "/assets/awards/1.jpeg" },
  { imgSrc: "/assets/awards/2.jpeg" },
  { imgSrc: "/assets/awards/3.jpeg" },
  { imgSrc: "/assets/awards/4.jpeg" },
  { imgSrc: "/assets/awards/5.jpeg" },
  { imgSrc: "/assets/awards/6.jpeg" },
  { imgSrc: "/assets/awards/7.png" },
  { imgSrc: "/assets/awards/8.jpg" },
];

const Awards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Restore scrolling
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="container mx-auto py-8 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer group rounded-lg overflow-hidden"
            onClick={() => openModal(index)}
          >
            {/* Image */}
            <img
              src={item.imgSrc}
              alt={`Award ${index + 1}`}
              className="w-full max-h-[250px] object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-orange-600 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <VisibilityIcon style={{ fontSize: 40, color: "white" }} />
              <span className="text-white font-semibold text-lg">Awards</span>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ImageModal
          imgSrc={data[currentIndex].imgSrc}
          closeModal={closeModal}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
};

export default Awards;
