import React from "react";
import Image from "next/image";
import { ConnectWallet } from "./connect-wallet";
import config from "@/config";
import Link from "next/link";

const navlink = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "presale",
    link: "#presale",
  },
  {
    title: "How To Buy",
    link: "#how-to-buy",
  },
  {
    title: "roadmap",
    link: "#roadmap",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
];

const Navigation = () => {
  return (
    <nav className="glassCard max-w-[1440px] w-full z-20 mt-4 md:mt-10 px-6 py-4 sm:py-6 mx-4 sm:mx-16 grid grid-cols-2 lg:grid-cols-3 items-center">
      {/* logo */}
      <a
        href={config.socials.website}
        target="_blank"
        rel="noreferrer"
        className="justify-self-start flex gap-2 items-center"
      >
        <Image src="/logo-white.svg" alt="logo" width={36} height={36} />
        <p className="hidden xs:block text-[24px] font-medium">MinePro</p>
      </a>

      {/* links */}
      <div className="hidden lg:flex justify-self-center items-center gap-8 transition-all duration-200">
        {/* <a
          href="https://minepro-1.gitbook.io/minepro-documentation"
          target="_blank"
          rel="noreferrer"
          className="text-white/40 hover:text-white"
        >
          Whitepaper
        </a>
        <a
          href="https://discord.gg/dWtWJjwNYy"
          target="_blank"
          rel="noreferrer"
          className="text-white/40 hover:text-white"
        >
          Discord
        </a> */}
        {/* <a
          href="https://t.me/MineProBitcoin"
          target="_blank"
          rel="noreferrer"
          className="text-white/40 hover:text-white"
        >
          Telegram
        </a> */}
        {navlink.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="text-white/40 capitalize hover:text-white text-sm 2xl:text-base text-nowrap"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* wallet connect */}
      <div className="justify-self-end w-fit float-end">
        <ConnectWallet />
      </div>
    </nav>
  );
};

export default Navigation;
