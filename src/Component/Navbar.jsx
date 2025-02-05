import React from "react";

export default function Navbar() {
  const menuNav = [
    { label: "Accueil", link: "/" },
    { label: "Produits", link: "/products" },
    { label: "Promotions", link: "/promotions" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="container_global py-4 border-b border-gray-300">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Logo Amazon"
            className="h-12"
          />
        </div>

        {/* Menu Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 flex-grow text-sm md:text-base">
          {menuNav.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="cursor-pointer whitespace-nowrap hover:text-blue-500 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Search & Icons */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative flex items-center border rounded-md px-2 py-1">
            <i className="fa fa-search text-gray-500" title="Rechercher"></i>
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-2 py-1 w-[150px] md:w-[200px] outline-none placeholder-gray-400 text-sm focus:w-[200px] md:focus:w-[300px] transition-all"
            />
          </div>

          {/* User Icons */}
          <a
            href="/account"
            className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded-md"
            title="Mon compte"
          >
            <i className="fa-regular fa-user text-gray-700 text-lg"></i>
          </a>
          <a
            href="/wishlist"
            className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded-md"
            title="Favoris"
          >
            <i className="fa-regular fa-heart text-gray-700 text-lg"></i>
          </a>
          <a
            href="/cart"
            className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded-md"
            title="Panier"
          >
            <i className="fa fa-shopping-cart text-gray-700 text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
