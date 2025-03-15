import React from "react";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const recent = [
  {
    id: 11,
    name: "CryptoPunk #7804",
    price: "New bid of 16 ETH",
    image: "/images/punk12.svg",
  },
  {
    id: 12,
    name: "CryptoPunk #3100",
    price: "Offered for 27 ETH",
    image: "/images/punk13.svg",
  },
  {
    id: 13,
    name: "CryptoPunk #7804",
    price: "New bid 29 ETH",
    image: "/images/punk14.svg",
  },
];

const RecentTransactions = () => {
  return (
    <div className=" text-  py-10 " id="recent-collection">
      <div className="container mx-auto px-6 lg:px-12">
        <section className="flex justify-between">
          <h2 className=" text-xl  md:text-2xl">Recent transaction </h2>
          <Link
            href={"https://cryptopunks.app/cryptopunks/sales"}
            className="border py-2 px-5 rounded-md "
            target="_blank"
            rel="noopener noreferrer"
          >
            View all
          </Link>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {recent.map((sale) => (
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

export default RecentTransactions;
