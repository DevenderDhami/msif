import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ImageModal = ({ imgSrc, closeModal, nextImage, prevImage }: any) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute -top-7 right-0 text-white bg-red-600 p-2 rounded-full"
        >
          X
        </button>

        {/* Image */}
        <Image src={imgSrc} alt="img" height={550} width={550} className="h-full" />

        {/* Previous Arrow */}
        <button
          onClick={prevImage}
          className="absolute md:-left-10 left-5 top-1/2 transform -translate-y-1/2 text-white rounded-full"
        >
          ◀
        </button>

        {/* Next Arrow */}
        <button
          onClick={nextImage}
          className="absolute md:-right-10 right-5 top-1/2 transform -translate-y-1/2 text-white rounded-full"
        >
          ▶
        </button>
      </motion.div>
    </div>
  );
};

export default ImageModal;
