import React from "react";

export default function Livraison() {
  return (
    <div className="container_global py-5">
      <div className="bg-gray-100 w-full px-7 md:px-14 py-5 flex flex-1 items-start h-[400px] sm:h-[350px] md:h-[300px] lg:h-[350px] overflow-hidden relative rounded-lg shadow-md">
        {/* Texte descriptif */}
        <div className="flex flex-col items-start justify-center gap-2 z-40">
          <span className="text-sm text-gray-600">Livraison à domicile</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            AMAZON VOUS LIVRE CHEZ VOUS
          </h2>
          <p className="font-medium text-gray-800 text-lg">
            Découvrez une large gamme de produits livrés directement à votre
            porte, rapidement et en toute simplicité.
          </p>
          <button className="px-4 py-2 border-2 border-gray-800 rounded-md hover:bg-gray-800 hover:text-white text-gray-800 transition-all mt-4">
            Voir Plus
          </button>
        </div>

        {/* Image illustrative */}
        <div className="w-full flex justify-center">
          <img
            src="image/11062b_b394d2e0c2884cb9b4637871e7c9ebb2_-removebg-preview.png"
            alt="Livraison Amazon"
            className="w-[200px] sm:w-[400px] md:w-[500px] h-full object-cover max-sm:absolute max-sm:-right-16 max-sm:-bottom-20"
          />
        </div>
      </div>
    </div>
  );
}
