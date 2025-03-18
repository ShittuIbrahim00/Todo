import React from "react";

const page = async () => {
    const resp = await fetch("https://api.escuelajs.co/api/v1/products?limit=10");
    const products = await resp.json();
    const limitedRes = products.slice(0,10)
  return (
    <div className="mt-24 px-10">
      <ul>
        {limitedRes.map((product) => (
          <li key={product.id}>
            {product.title} {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
