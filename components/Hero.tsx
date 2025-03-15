import React from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  "/images/punk1.svg",
  "/images/punk2.svg",
  "/images/punk3.svg",
  "/images/punk4.svg",
  "/images/punk5.svg",
  "/images/punk6.svg",
  "/images/punk7.svg",
  "/images/punk8.svg",
];

const mobileImages = [
  "/images/punk1.svg",
  "/images/punk2.svg",
  "/images/punk8.svg",
];

const Hero = () => {
  return (
    <main className="flex flex-col items-center min-h-[90vh] w-full">
      {/* Content Section */}
      <div className="text-white flex flex-col items-center text-center gap-5 px-7 mt-20 flex-grow">
        <h1 className="text-base md:text-4xl font-bold">
          The project that inspired the modern cryptoArt movement
        </h1>
        <p className="text-[10px] md:text-base font-light">
          10,000 unique collectible characters with proof of ownership stored on
          the Ethereum blockchain.
        </p>
        <Link
          href={"https://opensea.io/collection/cryptopunks"}
          className="bg-gray-300 text-black hover:bg-white rounded-md py-2 px-5 "
        >
          Mint Now
        </Link>
      </div>

      {/* Desktop & iPad Landscape */}
      <section className="hidden sm:flex flex-wrap justify-center gap-4 w-full mb-5">
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`punk${index + 1}`}
            width={200}
            height={200}
            className="h-auto max-w-full sm:w-[100px] sm:h-[100px] lg:w-[171px] lg:h-[150px]"
          />
        ))}
      </section>

      {/* Mobile Only */}
      <section className="flex sm:hidden justify-center gap-4 w-full mb-5">
        {mobileImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`mobilepunk${index + 1}`}
            width={80}
            height={80}
            className="w-[80px] h-[80px] max-w-full"
          />
        ))}
      </section>
    </main>
  );
};

export default Hero;
