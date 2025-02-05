import React from "react";
import { dataTomas } from "../Constant";
import CardProduit from "./CardProduit";

export default function TopAcceuil8() {
  return (
    <div className="container_global relative py-5">
      {/* Header Section */}
      <div className="flex items-center justify-between py-2">
        <span className="text-lg font-semibold">
          Tomas, these are must-haves for you
        </span>
        <span className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline">
          All Categories <i className="fa fa-arrow-right" />
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {dataTomas.map((item) => (
          <CardProduit
            key={item.id}
            id={item.id}
            image={item.image}
            sous_titre={item.sous_titre}
            titre={item.titre}
            prix={item.prix}
            statu={item.statu}
          />
        ))}
      </div>
    </div>
  );
}
