import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const heroImages = [
  {
    path: "/images/punk1.svg",
    alt: "punk1",
  },
  {
    path: "/images/punk2.svg",
    alt: "punk2",
  },
  {
    path: "/images/punk3.svg",
    alt: "punk3",
  },
  {
    path: "/images/punk4.svg",
    alt: "punk4",
  },
  {
    path: "/images/punk5.svg",
    alt: "punk5",
  },
  {
    path: "/images/punk6.svg",
    alt: "punk6",
  },
  {
    path: "/images/punk7.svg",
    alt: "punk7",
  },
  {
    path: "/images/punk8.svg",
    alt: "punk8",
  },
];

const mobileImages = [
  {
    path: "/images/punk1.svg",
    alt: "mobilepunk1",
  },
  {
    path: "/images/punk2.svg",
    alt: "mobilepunk2",
  },
  {
    path: "/images/punk8.svg",
    alt: "mobilepunk8",
  },
];
const Hero = () => {
  return (
    <main className="flex flex-col items-center min-h-[90vh] w-full">
      {/* Content Section */}
      <div className="text-white flex items-center flex-col text-center gap-5 px-7 mt-20 flex-grow">
        <h1 className="md:text-4xl text-base font-bold">
          The project that inspired the modern cryptoArt movement
        </h1>
        <p className="md:text-base text-[10px] font-light">
          10,000 unique collectible characters with proof of ownership stored on
          the Ethereum blockchain.
        </p>
        <Button className="bg-white text-black hover:text-white">
          Mint Now
        </Button>
      </div>

      {/* Desktop & iPad Landscape */}
      <section className="hidden sm:flex gap-4 w-full mb-5 justify-center flex-wrap">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.alt}
            width={120} // Standard size for iPads & desktops
            height={120}
            className="lg:w-[150px] lg:h-[150px] sm:w-[100px] sm:h-[100px] max-w-full h-auto"
          />
        ))}
      </section>

      {/* Mobile Only */}
      <section className="flex sm:hidden gap-4 w-full mb-5 justify-center">
        {mobileImages.map((img, index) => (
          <Image
            key={index}
            src={img.path}
            alt={img.alt}
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
