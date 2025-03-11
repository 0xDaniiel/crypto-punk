"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Hamburger and Close Icons

const links = [
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Collections", url: "/collections" },
  { id: 4, title: "FAQS", url: "/faqs" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 relative px-7">
      {/* Logo */}
      <Image src="/images/punkicon.svg" alt="logo" width={30} height={30} />

      {/* Hamburger Button - Only visible on mobile */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Desktop Navigation */}
      <section className="hidden md:flex items-center gap-10">
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-gray-300 hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <Button className="hover:bg-white hover:text-black cursor-pointer">
          Connect Wallet
        </Button>

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
        </div>
      </section>

      {/* Mobile Navigation - Shows when menuOpen is true */}
      {menuOpen && (
        <div className="absolute top-14 right-0 bg-black p-4 w-48 rounded-lg flex flex-col gap-4 md:hidden  shadow-md shadow-gray-600">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <Button
            className="hover:bg-white hover:text-black cursor-pointer w-full"
            onClick={() => setMenuOpen(false)}
          >
            Connect Wallet
          </Button>

          <div className="flex gap-4">
            <Link
              href={"http://discordapp.com/users/1151028385108213760"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <FaDiscord />
            </Link>

            <Link
              href={"https://x.com/0xDaniiel"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <BsTwitterX />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
