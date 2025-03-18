"use client";
import Link from "next/link";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 39.99,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    category: "Footwear",
    inStock: true,
  },
  {
    id: 4,
    name: "Backpack",
    price: 29.99,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 99.99,
    category: "Electronics",
    inStock: false,
  },
];

console.log(products);
const page = () => {
  const [name, setName] = useState([]);

  return (
    <div className="mt-24 px-10">
      <h1>Welcome to the Shop Page</h1>
      <div className="grid grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <h2>{product.category}</h2>
            <h2>{product.price}</h2>
            <h2>{product.inStock}</h2>
            <Link href={`shop/${product.id}`}>View product</Link>
          </div>
        ))}
      </div>
      {/* <p>{name}</p> */}
      {/* <Link href={`/shop/${products.id}`}>View Product</Link> */}
    </div>
  );
};

export default page;
