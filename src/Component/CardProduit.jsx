import React from "react";

export default function CardProduit({
  id,
  image,
  sous_titre,
  titre,
  prix,
  statu,
}) {
  return (
    <div
      key={id}
      className="flex flex-col items-center gap-4 bg-gray-100 rounded-md p-5 relative shadow-md hover:shadow-lg transition-all"
    >
      {/* Image */}
      <div className="w-full">
        <img className="w-full h-full object-contain" src={image} alt={titre} />
      </div>

      {/* Informations sur le produit */}
      <div className="flex flex-col items-start w-full">
        <span className="text-sm text-gray-600">{sous_titre}</span>
        <h3 className="text-lg font-bold text-gray-800 mb-1 leading-none max-sm:text-base">
          {titre}
        </h3>
        <span className="text-yellow-500 text-sm">★ ★ ★ ★ ☆</span>
        <h2 className="text-xl font-semibold text-gray-900">{prix} €</h2>
      </div>

      {/* Étiquette pour le statut */}
      {statu === "Nouveau" && (
        <span className="absolute top-2 left-3 px-2 rounded-md bg-orange-500 text-white text-xs">
          Nouveau
        </span>
      )}
    </div>
  );
}
