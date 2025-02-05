import React from "react";
import { dataPub } from "../Constant";

export default function PopCategorie() {
  return (
    <div className="container_global mb-5">
      <div className="py-3">
        {/* Grid des cartes publicitaires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {dataPub.map((item) => (
            <div
              key={item.id}
              className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 overflow-hidden relative bg-yellow-100/70 px-7 py-5 rounded-md shadow-md hover:shadow-lg transition-all"
            >
              {/* Contenu texte */}
              <div className="flex flex-col items-start gap-3 text-gray-800">
                <h2 className="text-xl font-semibold">{item.titre}</h2>
                <p className="text-sm">{item.desc}</p>
                <button className="text-base flex items-center gap-2 mt-3 font-medium text-blue-600 hover:underline">
                  En savoir plus <i className="fa fa-arrow-right" />
                </button>
              </div>
              {/* Image publicitaire */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={item.image}
                  className="object-cover rounded-md hover:scale-105 transition-all duration-300"
                  alt={item.titre}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
