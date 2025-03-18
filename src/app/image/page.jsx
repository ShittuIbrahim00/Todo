"use client"
import Image from "next/image";
import React, { useState } from "react";
import bgimg from "@/images/bgimg.jpg";

const page = () => {
    const [product, setProduct] = useState("")
  return (
    <div className="mt-20 px-">
        <Image />
        <div className="bg-gradient-to-br from-yellow-300 to-red-500">
        <h1 className="text-center text-3xl font-bold text-white pt-5">Welcome to Image Optimization in NEXT JS</h1>
        <div className="w-full my-6 h-[500px]">
            <Image src={bgimg} alt="background" className="w-full object-cover h-full"/>
        </div>
        </div>
      <h1 className="text-center text-3xl font-bold mb-4">Our services</h1>

      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
        <div className="col-span-1 w-full h-fit">
          <Image src={bgimg} alt="background"  />
        </div>
        <div className="col-span-2 w-full h-fit">
          <Image src={bgimg} alt="background" className="h-[250px] w-full" />
        </div>
        <div className="col-span-1 w-full h-fit">
          <Image src={bgimg} alt="background"  />
        </div>
      </div>
    </div>
  );
};

export default page;
