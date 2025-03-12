import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const sales = [
  {
    id: 11,
    name: "CryptoPunk #7804",
    price: "4,200 ETH",
    image: "/images/punk9.svg",
  },
  {
    id: 21,
    name: "CryptoPunk #3100",
    price: "3,200 ETH",
    image: "/images/punk10.svg",
  },
  {
    id: 31,
    name: "CryptoPunk #7804",
    price: "4,200 ETH",
    image: "/images/punk11.svg",
  },
];

const About = () => {
  return (
    <div className="mt-10 bg-white">
      <div className="bg-black text-white rounded-b-[50px]  pb-10" id="about">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <section className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl font-bold mb-4">Meet the Punks</h1>
              <p className="leading-relaxed text-lg">
                The CryptoPunks are 24x24 pixel art images generated
                algorithmically. Most are punky-looking guys and girls, but
                there are a few rarer types mixed in, including Apes, Zombies,
                and even the occasional Alien. Each punk has a dedicated profile
                page displaying its attributes, ownership details, and options
                for buying or selling.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start mt-6">
                <Button className="bg-gray-300 text-black shadow-md hover:bg-white hover:text-black px-6 py-3 font-medium cursor-pointer">
                  Buy a Punk
                </Button>
                <Button className="bg-blue-600 text-white shadow-md hover:bg-blue-500 px-6 py-3 font-medium  cursor-pointer">
                  View Full Collection
                </Button>
              </div>
            </section>
            <section className="lg:w-1/2 flex justify-center">
              <Image
                src="/images/punk.svg"
                alt="Crypto Punk"
                width={450}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </section>
          </div>
        </div>
      </div>
      <div className=" text-  py-10 " id="largest-collection">
        <div className="container mx-auto px-6 lg:px-12">
          <section className="flex justify-between">
            <h1 className=" text-xl  md:text-2xl">Largest sales </h1>
            <p className="border py-2 px-5 rounded-md ">View all</p>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {sales.map((sale) => (
              <div
                key={sale.id}
                className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center"
              >
                <Image
                  src={sale.image}
                  alt={sale.name}
                  width={200}
                  height={200}
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{sale.name}</h3>
                  <p className="text-gray-500 text-center">{sale.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
