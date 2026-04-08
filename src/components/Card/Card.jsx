import React from "react";

const Card = () => {
  return (
    <div className="text-white bg-linear-to-r from-purple-700 to-pink-500 py-10">
      <h3 className="text-3xl font-bold text-center">
        Trusted by Millions, Built for You
      </h3>
      <div className="mt-8 max-w-4xl mx-auto flex justify-around ">
        <div className="text-center space-y-2">
          <p className="text-xs">Total Downloads</p>
          <h2 className="text-4xl font-bold">29.6M</h2>
          <p className="text-xs">21% more than last month</p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-xs">Total Reviews</p>
          <h2 className="text-4xl font-bold">906K</h2>
          <p className="text-xs">46% more than last month</p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-xs">Active Apps</p>
          <h2 className="text-4xl font-bold">132+</h2>
          <p className="text-xs">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
