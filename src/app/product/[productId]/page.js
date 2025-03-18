import { notFound } from "next/navigation";
import React from "react";


const product = [
  {
    id: 1,
    name: "Google Pixel",
    price: 799,
    descp: "This is a google cell phone",
  },
  {
    id: 2,
    name: "IPhone 16 Pro Max",
    price: 999,
    descp: "This is an Apple cell phone",
  },
];
const page = ({ params }) => {
  const products = product.find((p) => p.id == params.productId);

  if (!products) {
    return notFound();
  }

  return (
    <div className="flex flex-col justify-between items-center mt-24 px-10">
      <h2>Welcome to the dynamic page</h2>
      <p>{products.name}</p>
      <p>{products.descp}</p>
      <p>${products.price}</p>
    </div>
  );
};

export default page;
