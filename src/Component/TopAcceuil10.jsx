import React from "react";

export default function TopAcceuil10() {
  return (
    <div className="container_global py-5">
      <div className="bg-black/5 w-full px-7 md:px-14 py-5 flex flex-1 items-start h-[400px] sm:h-[350px] md:h-[300px] lg:h-[350px] overflow-hidden relative">
        {/* Texte */}
        <div className="flex flex-col items-start justify-center gap-1 z-40">
          <span className="text-[14px] text-gray-500">Restez informé(e)</span>
          <h2 className="h2">ABONNEZ-VOUS AUX ACTUALITÉS</h2>
          <p className="font-medium text-black text-[18px]">
            Recevez les dernières nouvelles, mises à jour et offres exclusives
            directement dans votre boîte mail.
          </p>
          <button className="px-4 py-0.5 border-2 border-black rounded-md hover:bg-black hover:text-white transition-all duration-300 mt-4">
            Voir plus
          </button>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="image/sweat-couleur-camel-removebg-preview.png"
            alt="Un sweat de couleur camel"
            className="w-[200px] sm:w-[400px] md:w-[500px] h-full object-cover max-sm:absolute max-sm:-right-16 max-sm:-bottom-20"
          />
        </div>
      </div>
    </div>
  );
}
