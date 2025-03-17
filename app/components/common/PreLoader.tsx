"use client";

import React from "react";
import { CircularProgress } from "@mui/material";

const PreLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <CircularProgress size={60} thickness={4} sx={{ color: "#FF9800" }} />
    </div>
  );
};

export default PreLoader;
