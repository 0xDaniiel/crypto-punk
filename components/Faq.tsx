import React from "react";
import { TbSectionFilled } from "react-icons/tb";

const frequentQuestions = [
  {
    id: 1,
    title: "Where are the images for the punks stored?",
    content:
      "The images are stored on-chain and accessible via IPFS. This ensures decentralization and security. No central entity controls the storage.",
  },
  {
    id: 2,
    title: "Are the punks ERC-721 tokens?",
    content:
      "CryptoPunks use a custom contract but inspired ERC-721. They are considered the first major NFT project. Most modern NFTs use ERC-721.",
  },
  {
    id: 3,
    title: "Where does the market data on this site come from?",
    content:
      "Market data is sourced from on-chain transactions. APIs track sales, bids, and ownership changes. This ensures real-time accuracy.",
  },
  {
    id: 4,
    title: "Do you charge any fees for transactions?",
    content:
      "We do not charge any platform fees. However, Ethereum gas fees apply. These fees go to network validators, not us.",
  },
];

const Faq = () => {
  return (
    <div className="p-6 md:p-10 text-white" id="faqs">
      <h1 className="text-center py-5 md:py-7 text-xl md:text-2xl font-semibold">
        Details and FAQ
      </h1>

      <hr className="border-gray-500" />

      <div className="space-y-6 md:space-y-10">
        {frequentQuestions.map((item, index) => (
          <section
            key={item.id}
            className="flex flex-col md:flex-row md:justify-between py-5"
          >
            <p className="text-lg md:text-xl md:w-1/2 font-medium">
              {item.title}
            </p>
            <p className="text-base md:text-lg md:w-1/2 text-gray-300">
              {item.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Faq;
