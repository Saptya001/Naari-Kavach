import React from "react";

const Loader = ({ size = "md", message = "Loading..." }) => {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        className={`animate-spin rounded-full border-t-transparent border-white ${sizeClasses[size]} `}
        style={{ borderTopColor: "#6200ea" }} // Purple accent
      ></div>
      {message && <p className="mt-3 text-gray-600">{message}</p>}
    </div>
  );
};

export default Loader;
