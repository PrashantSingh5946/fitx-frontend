import React from "react";

type WaterIntakeInfoProps = {
  timeRange: string;
  amount: string;
};

const WaterIntakeInfo: React.FC<WaterIntakeInfoProps> = ({
  timeRange,
  amount,
}) => (
  <div className="mt-4 text-stone-400">
    {timeRange}
    <div className="mt-2 font-medium bg-clip-text bg-[linear-gradient(274deg,#C58BF2_0%,#EEA4CE_124.45%)]">
      {amount}
    </div>
  </div>
);

const WaterIntakeTracker: React.FC = () => {
  const intakeInfos = [
    { timeRange: "6am - 8am", amount: "600ml" },
    { timeRange: "9am - 11am", amount: "500ml" },
    { timeRange: "11am - 2pm", amount: "1000ml" },
    { timeRange: "2pm - 4pm", amount: "700ml" },
    { timeRange: "4pm - now", amount: "900ml" },
  ];

  return (
    <section className="flex flex-col justify-center max-w-[150px]">
      <div className="flex gap-2.5 py-5 pr-2.5 pl-5 w-full rounded-3xl shadow-2xl bg-neutral-600">
        <div className="flex flex-col pt-20 basis-0 bg-stone-50 rounded-[30px]"></div>
        <div className="flex flex-col flex-1 self-start mt-1 leading-[150%]">
          <h2 className="text-xs font-medium text-white whitespace-nowrap">
            Water Intake
          </h2>
          <div className="mt-3.5 text-sm font-semibold bg-clip-text bg-[linear-gradient(274deg,#92A3FD_0%,#9DCEFF_124.45%)]">
            4 Liters
          </div>
          <p className="mt-5 text-xs whitespace-nowrap text-stone-500">
            Real time updates
          </p>
          <div className="flex gap-2 mt-2.5 text-xs whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2ae222a75c379c16e15933ff578c17bebc78d074ae6a7a9a611d12e8928e92?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              alt=""
              className="shrink-0 self-start w-2.5 aspect-[0.06]"
            />
            <div className="flex flex-col flex-1">
              {intakeInfos.map((info) => (
                <WaterIntakeInfo
                  key={info.timeRange}
                  timeRange={info.timeRange}
                  amount={info.amount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterIntakeTracker;
