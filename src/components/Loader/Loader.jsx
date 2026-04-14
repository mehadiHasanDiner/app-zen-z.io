import React from "react";

const Loader = ({ src, size = 64 }) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <img
        className="bg-transparent"
        src={src}
        alt="Loading..."
        style={{ width: size, height: size }}
        // className="animate-spin"
      />
    </div>
  );
};

export default Loader;
