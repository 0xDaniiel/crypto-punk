import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const recent = [
  {
    id: 11,
    name: "CryptoPunk #7804",
    price: "New bid of 1,600 ETH",
    image: "/images/punk12.svg",
  },
  {
    id: 12,
    name: "CryptoPunk #3100",
    price: "Offered for 2,700 ETH",
    image: "/images/punk13.svg",
  },
  {
    id: 13,
    name: "CryptoPunk #7804",
    price: "New bid 2,900 ETH",
    image: "/images/punk14.svg",
  },
];

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

const WebContent = () => {
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
                <Button className="bg-gray-300 text-black  hover:text-black  hover:bg-white  px-6 py-3 font-medium cursor-pointer">
                  Buy a Punk
                </Button>
                <Button className="px-6 py-3 font-medium cursor-pointer">
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
            <h2 className=" text-xl  md:text-2xl">Largest sales </h2>
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

      <div className=" text-  py-10 " id="recent-collection">
        <div className="container mx-auto px-6 lg:px-12">
          <section className="flex justify-between">
            <h2 className=" text-xl  md:text-2xl">Recent transaction </h2>
            <p className="border py-2 px-5 rounded-md ">View all</p>
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

      <div
        className="bg-black text-white rounded-t-[50px] py-10 "
        id="get-started"
      >
        <div className="flex flex-col lg:flex-row  gap-10">
          <section className="lg:w-1/2 ">
            <h2 className=" text-xl text-center py-10 md:text-2xl">
              {" "}
              How do i get a punk ?
            </h2>
          </section>

          <section className="lg:w-1/2 px-5 md:px-7">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-500"></div>

              {/* Step 1 */}
              <section className="relative flex items-start gap-4 pb-5">
                <div className="flex flex-col items-center">
                  <p className="w-10 h-10 flex items-center justify-center rounded-full border bg-black text-white text-lg font-bold relative z-10">
                    1
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      alt="metamask"
                      height={30}
                      width={30}
                      src="/images/metamask.svg"
                    />
                  </div>
                  <p className="md:text-xl text-lg py-1">
                    Download and install Metamask
                  </p>
                  <p className="text-md">
                    Download and install a Chrome browser plugin called
                    Metamask. This will allow websites (that you authorize)
                    access to your Ethereum account.
                  </p>
                  <Link
                    href="https://metamask.io/download.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-none my-3 px-4 py-4 cursor-pointer hover:bg-white text-gray-300 border hover:text-black">
                      Download Metamask
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Step 2 */}
              <section className="relative flex items-start gap-4 pb-5">
                <div className="flex flex-col items-center">
                  <p className="w-10 h-10 flex items-center justify-center rounded-full border bg-black text-white text-lg font-bold relative z-10">
                    2
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      alt="ethereum"
                      height={30}
                      width={30}
                      src="/images/eth-icon.svg"
                    />
                  </div>
                  <p className="md:text-xl text-lg py-1">Buy some Ethereum</p>
                  <p className="text-md">
                    If you made a new account, buy some Ethereum. The Metamask
                    plugin has a button that allows you to buy Ethereum from
                    Coinbase.
                  </p>
                </div>
              </section>

              {/* Step 3 */}
              <section className="relative flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <p className="w-10 h-10 flex items-center justify-center rounded-full border bg-black text-white text-lg font-bold relative z-10">
                    3
                  </p>
                </div>
                <div>
                  <p className="md:text-xl text-lg py-1">
                    Start bidding, buying, and selling
                  </p>
                  <p className="text-md">
                    Once you have the plugin installed, this website will
                    recognize it and add buttons that allow you to bid on, buy,
                    and sell directly in the interface.
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WebContent;
