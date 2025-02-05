import React from "react";

export default function TopAcceuil7() {
  return (
    <div className="container_global py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-[#ff179717] p-4 md:py-14 md:px-10 rounded-md flex flex-col-reverse md:flex-row gap-3 h-[500px] md:h-[330px] overflow-hidden">
          {/* Text Content */}
          <div className="flex flex-col gap-7 items-start">
            <div className="flex flex-col items-start gap-1">
              <h3 className="h3">Comfy styles for her</h3>
              <p className="text-[#333333] text-[16px] leading-tight">
                Discover stylish and comfortable outfits for every occasion.
                Perfectly tailored for her.
              </p>
              <span className="flex items-center gap-2 text-[16px] text-[#333333] mt-2 cursor-pointer">
                See more <i className="fa fa-arrow-right" />
              </span>
            </div>
            {/* Product Highlight */}
            <div className="flex items-center gap-4">
              <img
                className="w-[80px]"
                src="image/sac-cuir.png"
                alt="Sac à main naturel"
              />
              <div>
                <h4 className="font-semibold">Top modèle sac</h4>
                <span className="text-gray-500">Nouveau design</span>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full h-full bg-top bg-cover bg-[url('../../public/image/fille.png')]"></div>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-100 p-4 md:py-14 md:px-10 rounded-md flex flex-col-reverse md:flex-row gap-3 h-[500px] md:h-[330px] overflow-hidden">
          {/* Text Content */}
          <div className="flex flex-col gap-7 items-start">
            <div className="flex flex-col items-start gap-1">
              <h3 className="h3">Stylish picks for him</h3>
              <p className="text-[#333333] text-[16px] leading-tight">
                Discover the latest trends in menswear, crafted for style and
                comfort.
              </p>
              <span className="flex items-center gap-2 text-[16px] text-[#333333] mt-2 cursor-pointer">
                See more <i className="fa fa-arrow-right" />
              </span>
            </div>
            {/* Product Highlight */}
            <div className="flex items-center gap-4">
              <img
                className="w-[80px]"
                src="image/Chemises-carreaux-manches-longues-pour-hommes-100-coton-affaires-Oxford-d-contract-hommes-bureau-en-Y-removebg-preview.png"
                alt="Chemise à carreaux pour hommes"
              />
              <div>
                <h4 className="font-semibold">Chemise à carreaux</h4>
                <span className="text-gray-500">Édition spéciale</span>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full h-full bg-top bg-cover bg-[url('../../public/image/sweat-couleur-camel-removebg-preview.png')]"></div>
        </div>
      </div>
    </div>
  );
}
