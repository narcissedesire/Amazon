import React from "react";

export default function CardPub({ image, titre, desc }) {
  return (
    <div className="cardPub flex flex-col justify-between bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 text-gray-800 cursor-pointer">
        <img
          src={image}
          alt={titre}
          className="w-[80px] h-[80px] object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{titre}</span>
          <p className="text-sm text-gray-600 leading-snug">{desc}</p>
        </div>
      </div>
    </div>
  );
}
