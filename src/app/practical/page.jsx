// "use server"
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Shop - Ecommerce",
    description: "Best Products is available",
    openGraph: {
        title: "Shop - Ecommerce",
        description: "Best Products is available",
        type: "website",
        images: ["/billing.jpg"]
    }
}

const page = async () => {
  const resp = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });
  const products = await resp.json();
  const limitedRes = products.slice(0, 10);
  console.log(limitedRes);
  
  return (
    <div className="container mt-24 px-8">
      <h2 className="text-3xl text-center font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {limitedRes?.map((product) => (
          <div className="border shadow-2xl rounded-md p-4" key={product.id}>
            <Image
              src={product.images[0]}
              alt={product.title}
              className="w-full object-cover rounded-md h-48"
              width={200}
              height={200}
            />
            <h2 className="text-lg font-bold my-2">{product.title}</h2>
            <p className="text-sm font-bold my-2">${product.price}</p>
            <Link href={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
