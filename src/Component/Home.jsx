import React from "react";

export default function Home() {
  return (
    <div className=" py-10 overflow-x-hidden relative bg-gray-800 text-gray-100">
      <div className="container_global bg-gray-600 w-full px-6 lg:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 rounded-lg">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              Découvrez Nos Offres <br />
              <span className="text-yellow-400">
                Exceptionnelles sur la Tech
              </span>
            </h1>
          </div>
          <p className="text-gray-300 text-lg sm:w-3/4">
            Achetez les derniers ordinateurs, casques, équipements gaming, et
            bien plus encore à des prix imbattables. Faites évoluer votre tech
            avec les meilleures offres d'Amazon !
          </p>
          <div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-md transition-all">
              Explorer Maintenant
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-900 lg:w-4/5 w-full p-6 rounded-xl shadow-lg flex flex-col gap-3 lg:absolute lg:-bottom-8">
            <p className="text-gray-400 text-sm">Produit Vedette</p>
            <h3 className="text-2xl font-bold text-white">JBL TUNE 750BTNC</h3>
            <h4 className="text-lg text-yellow-400">
              Casque Réduction de Bruit
            </h4>
            <span className="flex items-center text-sm text-gray-300 gap-1">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star-half-alt text-yellow-400"></i>
              <span>(4.5)</span>
            </span>
            <h1 className="text-2xl font-semibold text-white">
              <span className="text-yellow-400">125€</span>
            </h1>
            <div className="text-gray-400 text-sm flex items-center gap-2 mt-2">
              <span>Stock Limité</span>
              <div className="bg-gray-600 w-16 h-1"></div>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>

          <img
            className="absolute lg:-top-16 lg:-right-8 h-[220px] lg:h-[300px] top-20 right-10"
            src="/image/casque.png"
            alt="Casque JBL"
          />
          <span className="hidden lg:flex absolute -top-4 right-6 w-12 h-12 rounded-full bg-yellow-400 text-gray-900 font-bold items-center justify-center">
            -50%
          </span>
        </div>
      </div>
    </div>
  );
}
