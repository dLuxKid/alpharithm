import analytics from "@/assets/analytics.png";
import content from "@/assets/content.png";
import customer from "@/assets/customer.png";
import finance from "@/assets/finance.png";
import market from "@/assets/market-prediction.png";
import Image from "next/image";

export function MarketPrediction() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] pl-4 sm:pl-8 md:pl-16 pt-4 sm:pt-8 flex flex-col md:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <p className="text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] inter">
          Market Prediction
        </p>
        <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-2%] text-[#22263F]">
          Use AI insights for smarter business decisions and stay competitive.
        </h4>
        <div>
          <button className="border border-[#22263F] bg-[#03217F] p-2.5 px-4 rounded-[4px] text-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 size-full max-w-[520px] max-h-[520px] aspect-square">
        <Image src={market} alt="" className="object-fill object-center" />
      </div>
    </div>
  );
}

export function Finance() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] pl-4 sm:pl-8 md:pl-16 pt-4 sm:pt-8 flex flex-col md:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <p className="text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] inter">
          Finance
        </p>
        <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-2%] text-[#22263F]">
          Our AI models analyze financial data for confident investments.
        </h4>
        <div>
          <button className="border border-[#22263F] bg-[#03217F] p-2.5 px-4 rounded-[4px] text-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 size-full max-w-[520px] max-h-[520px] aspect-square">
        <Image src={finance} alt="" className="object-fill object-center" />
      </div>
    </div>
  );
}

export function Analytics() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] pl-4 sm:pl-8 md:pl-16 pt-4 sm:pt-8 flex flex-col md:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <p className="text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] inter">
          Data Analytics
        </p>
        <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-2%] text-[#22263F]">
          Transform data into insights with AI analytics that enhance decisions.
        </h4>
        <div>
          <button className="border border-[#22263F] bg-[#03217F] p-2.5 px-4 rounded-[4px] text-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 size-full max-w-[520px] max-h-[520px] aspect-square">
        <Image src={analytics} alt="" className="object-fill object-center" />
      </div>
    </div>
  );
}

export function Content() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] pl-4 sm:pl-8 md:pl-16 pt-4 sm:pt-8 flex flex-col md:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <p className="text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] inter">
          Content Generation
        </p>
        <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-2%] text-[#22263F]">
          Create quality content easily with AI that knows your brand and
          audience.
        </h4>
        <div>
          <button className="border border-[#22263F] bg-[#03217F] p-2.5 px-4 rounded-[4px] text-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 size-full max-w-[520px] max-h-[520px] aspect-square">
        <Image src={content} alt="" className="object-fill object-center" />
      </div>
    </div>
  );
}

export function Customer() {
  return (
    <div className="rounded-xl bg-[#F6FAF3] pl-4 sm:pl-8 md:pl-16 pt-4 sm:pt-8 flex flex-col md:flex-row items-center md:justify-between gap-4 overflow-hidden">
      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <p className="text-base md:text-xl font-semibold tracking-[-2%] text-[#828282] inter">
          Customer Support
        </p>
        <h4 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-semibold tracking-[-2%] text-[#22263F]">
          Use AI chatbots for instant, personalized customer support.
        </h4>
        <div>
          <button className="border border-[#22263F] bg-[#03217F] p-2.5 px-4 rounded-[4px] text-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end mt-4 md:mt-0 size-full max-w-[520px] max-h-[520px] aspect-square">
        <Image src={customer} alt="" className="object-fill object-center" />
      </div>
    </div>
  );
}
