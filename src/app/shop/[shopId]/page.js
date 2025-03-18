// import { useParams } from 'next/navigation'
import { notFound } from "next/navigation";
import React from "react";

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
const page = ({ params }) => {
  const product = products.find((prod) => prod.id == params.shopId);
  if (!product) {
    return notFound();
  }
  return (
    <div className="mt-24 px-8">
      <h2>This is a dynamic page</h2>
      <h1>{product.name}</h1>
    </div>
  );
};

export default page;
