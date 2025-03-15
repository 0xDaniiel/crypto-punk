import React from "react";
import Image from "next/image";
import Link from "next/link";

const sales = [
  {
    id: 11,
    name: "CryptoPunk #7804",
    price: "22 ETH",
    image: "/images/punk9.svg",
  },
  {
    id: 21,
    name: "CryptoPunk #3100",
    price: "32 ETH",
    image: "/images/punk10.svg",
  },
  {
    id: 31,
    name: "CryptoPunk #8094",
    price: "25.75 ETH",
    image: "/images/punk11.svg",
  },
];

const LargestCollections = () => {
  return (
    <div className=" text-  py-10 " id="largest-collection">
      <div className="container mx-auto px-6 lg:px-12">
        <section className="flex justify-between">
          <h2 className=" text-xl  md:text-2xl">Largest sales </h2>
          <Link
            href={"https://cryptopunks.app/cryptopunks/sales"}
            target="_blank"
            rel="noopener noreferrer"
            className="border py-2 px-5 rounded-md "
          >
            View all
          </Link>
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
  );
};

export default LargestCollections;
