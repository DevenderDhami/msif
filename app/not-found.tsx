import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! Page not found.</p>
      <p className="mt-2 text-lg text-gray-600">{`Sorry, the page you're looking for doesn't exist.`}</p>
      <Link href="/" className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
