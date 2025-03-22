import ellipse from "@/assets/ellipse.png";
import CompaniesCarousel from "@/components/companies-carousel";
import Navbar from "@/components/navbar";
import TabsCarousel from "@/components/tabs-carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col min-h-screen">
      <div className="bg-[#04142B] w-full pt-6 md:py-10 md:h-screen relative">
        <Navbar />
        <div className="absolute top-[20%] inset-0">
          <Image
            className="size-full object-center object-cover"
            src={ellipse}
            alt="hero background img"
          />
        </div>
        <div className="px-[5%] py-16 md:py-0 max-w-screen-2xl mx-auto flex items-center justify-center size-full flex-col gap-6 relative slide-up-fade-in">
          <h4 className="plus-jakarta capitalize text-[#7191FF] text-center font-bold text-sm md:text-base tracking-[-2%]">
            Leverage on automation
          </h4>
          <h1 className="font-semibold text-white text-center text-2xl sm:text-4xl md:text-[76px]/[82px] tracking-[-2%]">
            AI Models for <br className="hidden lg:block" />
            Business Solutions
          </h1>
          <p className="plus-jakarta font-medium text-white text-center text-lg md:text-[22px]/[38px] tracking-[-2%]">
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our <br className="hidden lg:block" /> specialized models
            are designed are designed to fit different business needs.
          </p>
          <button className="bg-white rounded-xl text-black py-3.5 px-[26px] font-semibold text-lg transition-all cursor-pointer hover:bg-white/80">
            Get Started Now
          </button>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <CompaniesCarousel />
        <div className="h-full py-6 md:py-12 flex flex-col items-center justify-center gap-4 md:gap-8 overflow-hidden">
          <h2 className="mx-[2.5%] text-3xl sm:text-4xl md:text-[50px]/[62px] text-[#22263F] font-semibold tracking-[-2%] text-center">
            AI Models tailored for your <br className="hidden md:block" />{" "}
            business needs
          </h2>
          <p className="mx-[2.5%] font-medium text-[#828282] text-center text-lg md:text-[22px]/[38px] tracking-[-2%] plus-jakarta">
            Leverage the power of AI to automate, analyze, and optimize your
            workflows. Our <br className="hidden lg:block" /> specialized models
            are designed are designed to fit different business needs.
          </p>
          <TabsCarousel />
        </div>
      </div>
    </div>
  );
}
