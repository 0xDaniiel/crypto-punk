import React from "react";
import { Jost } from "next/font/google";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const jost = Jost({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="text-white px-5   md:px-7  pb-5 pt-20 ">
      <section className=" flex justify-between items-center ">
        <h1 className={`${jost.className} md:text-2xl text-base md:font-bold`}>
          CryptoPunks
        </h1>
        <div className="flex gap-4">
          <Link
            href={"http://discordapp.com/users/1151028385108213760"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaDiscord />
          </Link>

          <Link
            href={"https://x.com/0xDaniiel"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <BsTwitterX />
          </Link>
        </div>{" "}
      </section>

      <p className="text-sm text-center pt-5">
        &copy; {new Date().getFullYear()} CryptoPunks. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
