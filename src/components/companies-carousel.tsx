"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import catalog from "../assets/catalog.png";
import circooles from "../assets/circooles.png";
import layers from "../assets/layers.png";
import quotient from "../assets/quotient.png";
import sisyphus from "../assets/sisyphus.png";

export default function CompaniesCarousel() {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clonedUl = ul.cloneNode(true) as HTMLElement;
      ul.parentNode?.insertBefore(clonedUl, ul.nextSibling);
      clonedUl.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="py-4 md:py-6 max-w-screen-2xl mx-auto flex items-center justify-center flex-col w-full gap-4 sm:gap-8">
      <p className="text-[#667085] text-sm md:text-base font-medium w-full text-center">
        Join 4,000+ companies already growing
      </p>

      <div className="w-full mx-auto inline-flex flex-nowrap overflow-hidden 2xl:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex infinite-scroll-right">
          <ul
            ref={logosRef}
            className="flex items-center md:justify-start justify-center shrink-0"
          >
            <li className="mx-4 md:mx-8 xl:mx-12 flex items-center gap-4 justify-center">
              <Image className="size-[80%] sm:size-auto" src={layers} alt="" />
              <p className="text-xl font-bold text-black">Layers</p>
            </li>
            <li className="mx-4 md:mx-8 xl:mx-12 flex items-center gap-4 justify-center">
              <Image
                className="size-[80%] sm:size-auto"
                src={sisyphus}
                alt=""
              />
              <p className="text-xl font-bold text-black">Sisyphus</p>
            </li>
            <li className="mx-4 md:mx-8 xl:mx-12 flex items-center gap-4 justify-center">
              <Image
                className="size-[80%] sm:size-auto"
                src={circooles}
                alt=""
              />
              <p className="text-xl font-bold text-black">Circooles</p>
            </li>
            <li className="mx-4 md:mx-8 xl:mx-12 flex items-center gap-4 justify-center">
              <Image className="size-[80%] sm:size-auto" src={catalog} alt="" />
              <p className="text-xl font-bold text-black">Catalog</p>
            </li>
            <li className="mx-4 md:mx-8 xl:mx-12 flex items-center gap-4 justify-center">
              <Image
                className="size-[80%] sm:size-auto"
                src={quotient}
                alt=""
              />
              <p className="text-xl font-bold text-black">Quotient</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
