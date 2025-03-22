"use client";

import Logo from "@/assets/logo";
import { CircleX, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="w-full max-w-screen-2xl mx-auto px-[5%] flex items-center justify-center">
      <div
        className={`w-full flex items-center justify-between gap-4 max-w-screen-3xl overflow-x-hidden z-50`}
      >
        <div className="flex-shrink-0">
          <Logo className="size-8 md:size-12" />
        </div>
        <nav className="hidden xl:flex gap-4 items-center justify-center">
          {["Models", "Pricing", "About Us", "Contact Us", "Custom Models"].map(
            (item, i) => (
              <p
                key={i}
                className="font-medium text-base cursor-pointer text-white"
              >
                {item}
              </p>
            )
          )}
        </nav>
        <div className="hidden xl:flex items-center gap-4">
          <button className="bg-transparent rounded-[4px] border text-white border-white p-2.5 px-4 font-medium cursor-pointer text-sm transition-all">
            Login
          </button>
          <button className="bg-white rounded-[4px] text-black p-2.5 px-4 font-medium text-sm transition-all cursor-pointer hover:bg-white/80">
            Get Started Now
          </button>
        </div>

        <span
          className="xl:hidden cursor-pointer"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <Menu className="size-8 md:size-12 text-white" />
        </span>

        <div
          className={`${
            showNav ? "translate-x-0" : "translate-x-[100%]"
          } xl:hidden transition-transform duration-500 transform fixed inset-0 z-40 flex flex-col gap-4 items-center w-full bg-[#04142B]`}
        >
          <span
            className="cursor-pointer self-end pr-[5%] pt-4"
            onClick={() => setShowNav((prev) => !prev)}
          >
            <CircleX className="size-8 md:size-10 text-white" />
          </span>
          <nav className="flex flex-col w-full items-center justify-center border-t border-t-white/20">
            {[
              "Models",
              "Pricing",
              "About Us",
              "Contact Us",
              "Custom Models",
            ].map((item, i) => (
              <p
                key={i}
                className="font-medium p-4 text-center border-b border-white/20 w-full text-base cursor-pointer text-white"
              >
                {item}
              </p>
            ))}
          </nav>
          <div className="flex xl:hidden flex-col items-center gap-4">
            <button className="bg-transparent rounded-[4px] border text-white border-white p-2.5 px-4 font-medium cursor-pointer text-sm transition-all">
              Login
            </button>
            <button className="bg-white rounded-[4px] text-black p-2.5 px-4 font-medium text-sm transition-all cursor-pointer hover:bg-white/80">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
