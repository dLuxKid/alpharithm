"use client";

import { useMemo, useRef, useState } from "react";
import "swiper/css";
import { A11y, Controller, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import {
  Analytics,
  Content,
  Customer,
  Finance,
  MarketPrediction,
} from "./cards";

export default function TabsCarousel() {
  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (index: number) => {
    setActive(index);

    if (swiper) {
      const currentIndex = swiper.realIndex;
      const totalSlides = swiper.slides.length;
      const diff = index - currentIndex;

      let direction;
      if (Math.abs(diff) <= totalSlides / 2) {
        direction = diff > 0;
      } else {
        direction = diff < 0;
      }

      swiper.slideToLoop(index, 600, direction);
    }
  };

  const tabs = useMemo(
    () => [
      {
        label: "Market Prediction",
        component: <MarketPrediction />,
      },
      {
        label: "Finance",
        component: <Finance />,
      },
      {
        label: "Analytics",
        component: <Analytics />,
      },
      {
        label: "Content Generation",
        component: <Content />,
      },
      {
        label: "Customer Support",
        component: <Customer />,
      },
    ],
    []
  );

  return (
    <>
      <div
        ref={tabsRef}
        className="hidden md:flex p-1 h-11 border border-[#E4E4E7] gap-1 items-center justify-center rounded-xl"
      >
        {tabs.map((item, i) => (
          <p
            key={i}
            onClick={() => handleTabClick(i)}
            className={`${
              active === i
                ? "bg-[#03217F] text-white delay-200"
                : "text-[#aaaaaa] hover:bg-[#aaaaaa]/20 transition-colors duration-400"
            } h-9 py-1.5 px-3.5 text-base font-semibold rounded-md cursor-pointer whitespace-nowrap`}
          >
            {item.label}
          </p>
        ))}
      </div>

      <div
        ref={tabsRef}
        className="flex md:hidden p-1 h-11 border border-[#E4E4E7] gap-1 items-center justify-center rounded-xl"
      >
        <p
          className={`bg-[#03217F] text-white delay-200 h-9 py-1.5 px-3.5 text-base font-semibold rounded-md cursor-pointer whitespace-nowrap`}
        >
          {tabs[active].label}
        </p>
      </div>

      <div className="w-[200%] 2xl:w-full md:mt-2">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          initialSlide={active}
          speed={600}
          loop={true}
          modules={[Controller, A11y, Thumbs, Pagination]}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
          }}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 8 },
            640: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {tabs.map((item, i) => (
            <SwiperSlide key={i} className={`pt-8`}>
              <div
                className={`${active === i ? "-mt-8" : ""}
                 transition-all duration-300 flex items-center justify-center`}
              >
                {item.component}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
