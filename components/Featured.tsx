import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const articles = [
  {
    title: "Mashable",
    description:
      "The ethereum-based project that can change how we think about digital art.",
  },
  {
    title: "CoinDesk",
    // description: "New DeFi strategies emerge as crypto lending evolves.",
    description:
      "CryptoKitties, CryptoPunks and the birth of a cottage industry.",
  },
  {
    title: "Decrypt",
    description:
      "How blockchain gaming is redefining ownership and mass adoption .",
  },
];

const Featured = () => {
  return (
    <div className="py-5">
      <h1 className="text-white text-center py-7 md:text-2xl text-xl font-semibold">
        Features in
      </h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="bg-black text-white border border-gray-300"
          >
            <CardHeader>
              <CardTitle className="font-bold text-center">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{article.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t border-gray-300 pt-2">
              <p>Read article</p>
              <RiArrowRightUpLine className="text-xl  text-white" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Featured;
