import React from "react";
import { dataCategorie } from "../Constant";

export default function Categorie() {
  return (
    <div className="container_global relative py-5">
      {/* Section Header */}
      <div className="flex items-center justify-between py-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Parcourir par catégorie
        </h2>
        <button className="flex items-center gap-2 text-blue-500 font-medium cursor-pointer hover:underline">
          Toutes les catégories <i className="fa fa-arrow-right" />
        </button>
      </div>
      {/* Categories Grid */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        {dataCategorie.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 flex flex-col items-center justify-between gap-3 py-7 
            rounded-lg hover:shadow-lg transition-all group overflow-hidden"
          >
            {/* Category Image */}
            <div className="w-full px-3 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.titre}
                className="group-hover:scale-110 transition-all duration-300"
              />
            </div>
            {/* Category Title */}
            <div className="text-lg font-semibold text-gray-800">
              {item.titre}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
