import React, { useEffect, useState } from "react";
import { HeartIcon, StarIcon } from "lucide-react";
const Item = ({ image, name, rating, category, reviews, time, onclick }) => {
  return (
    <div
      onClick={onclick}
      className="group hover:shadow-green-400/18 group-hover:shadow-sm cursor-pointer w-full max-w-75 overflow-hidden rounded-2xl border border-white/30 bg-black shadow-[0_0_25px_rgba(34,197,94,0.1)] "
    >
      <div className="relative border-b border-b-white">
        <img
          className=" group-hover:scale-110 transition ease-in-out h-55 w-full object-cover"
          src={image}
          alt="image"
        />

        {/* Heart Icon */}
        <div className="absolute top-2 right-2 p-1 rounded-full">
          <HeartIcon size={18} />
        </div>
      </div>

      {/* content */}
      <div className="p-3">
        <p className=" text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-400 ">{category}</p>
        <div className="flex items-center text-sm mt-2 gap-2">
          <span className=" flex items-center gap-1 text-white font-semibold">
            <StarIcon color="yellow" fill="yellow" size={18} /> {rating}
          </span>
          <span className="text-gray-400">({reviews})</span>
          <span className="text-gray-400">• {time} min</span>
        </div>
        <div className="mt-2">
          <span className="text-white bg-green-800 backdrop-blur-3xl rounded-lg p-[5px_8px] text-xs font-semibold">
            Free Delivery
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
