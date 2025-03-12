import React from "react";

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-16 h-16 text-gray-400 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l.01-.011M15 9l.01-.011M9 15l.01-.011M15 15l.01-.011M12 3v.01M12 21v.01M3 12h.01M21 12h.01M5.636 5.636l.01.01M18.364 18.364l.01.01M5.636 18.364l.01-.01M18.364 5.636l.01-.01"
        />
      </svg>

      <h2 className="text-xl font-semibold text-gray-700">No Data Found</h2>
      <p className="text-gray-500 mt-1">
       {` Sorry, we couldn’t find any results`}
      </p>
    </div>
  );
};

export default NoDataFound;
