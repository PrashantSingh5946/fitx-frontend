import * as React from "react";

export default function SleepTracker() {
  return (
    <div className="flex flex-col justify-center font-medium max-w-[150px]">
      <div className="flex overflow-hidden relative flex-col p-4 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62e746c1ff0c04ca66714ae68babe9a09599a86ed766d08170e2111a759b922f?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative text-xs leading-5 text-white">Sleep</div>
        <div
          className="relative mt-3 text-sm leading-5 bg-clip-text bg-[linear-gradient(274deg,#92A3FD_0%,#9DCEFF_124.45%)]"
          style={{ zIndex: 11 }}
        >
          <span className="font-semibold">8</span>
          <span className="text-xs font-semibold">h</span>{" "}
          <span className="font-semibold">20</span>
          <span className="text-xs font-semibold">m</span>
        </div>
        <img
          loading="lazy"
          style={{ zIndex: 10 }}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81ad1a591383edb1ca6cf6aaba225e6ad2a5d5b1c01773640e89c9f4766e3fd5?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="self-center mt-3 aspect-[1.41] w-[110px]"
        />
      </div>
    </div>
  );
}
