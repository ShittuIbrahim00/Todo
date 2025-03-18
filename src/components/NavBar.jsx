import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full z-10">
      <nav className="flex justify-between items-center gap-4 px-10 py-6 bg-white text-black shadow-md">
        <div className="text-3xl font-bold font-mono">
            <Link href="/">BillIT</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-sm font-bold">
            About
          </Link>
          <Link href="/product" className="text-sm font-bold">
            Product
          </Link>
          <Link href="/shop" className="text-sm font-bold">
            Shop
          </Link>
          <Link href="/todo" className="text-sm font-bold">
            ToDo
          </Link>
          <Link href="/image" className="text-sm font-bold">
            Image optimization
          </Link>
          <Link href="/data" className="text-sm font-bold">
            Data
          </Link>
          <Link href="/ssr" className="text-sm font-bold">
            SSR
          </Link>
          <Link href="/practical" className="text-sm font-bold">
            Practical
          </Link>
          <Link href="/cart" className="text-sm font-bold">
            Cart
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
