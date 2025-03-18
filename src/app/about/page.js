import Hero from "@/components/Hero";
import React from "react";

async function getData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return resp.json();
}

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 mt-24 px-10">
        <Hero />
      <h1>Welcome to the About Page</h1>
      <p>{data.title}</p>
    </div>
  );
};

export default page;
