import { Card, Progress, Slider } from "@nextui-org/react";
import React from "react";

interface ActivityItemProps {
  title: string;
  src: string;
  altText: string;
  time: string;
}


// ActivityItem Component

const VerticalProgressBar: React.FC<{ progress: number; label: string }> = ({
  progress,
  label,
}) => (


  <Slider
    size="lg"
    hideThumb={true}
    step={0.01}
    maxValue={1}
    minValue={0}
    orientation="vertical"
    aria-label={label}
    defaultValue={0.01 * progress}
    value={0.01 * progress}
    onChange={(value) => { }}

    classNames={{ filler: "bg-gradient-to-l  from-red-600 to-pink-300", track: "bg-gray-400" }}
  />

);



//How to add rotate without changing the initial position of the progress bar



const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  src,
  altText,
  time,
}) => (
  <Card className="m-1 shadow-none bg-transparent">
    <div
      className="flex gap-5 justify-between px-4 py-4 w-full whitespace-nowrap rounded-2xl shadow-2xl bg-zinc-700/70 leading-[150%]"

    >
      <div className="flex gap-2">
        <img
          loading="lazy"
          src={src}
          alt={altText}
          className="shrink-0 aspect-square w-[50px]"
        />
        <div className="flex flex-col flex-1 my-auto">
          <div className="text-xs font-medium text-white">{title}</div>
          <div className="mt-2 text-xs text-zinc-400">{time}</div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eebc3d98a34364c68d3454d759c1e9ff8efd061d14308d20eb82b75fb0988b55?apiKey=2471e6abba594059a1b1e2ce6032627e&"
        alt=""
        className="shrink-0 self-start w-3.5 aspect-square"
      />
    </div>
  </Card>
);

const ActivityTrackerApp: React.FC = () => (
  <div className="flex flex-col gap-4 p-6 my-4 pb-8 rounded-[40px] md:max-h-[80vh] overflow-hidden"
    style={{
      background:
        "linear-gradient(274.42deg, rgb(96 106 153 / 20%) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
    }}>


    <Card
      className="m-2 p-2 w-full min-h-[50px]"
      style={{ background: "none", width: "90%", alignSelf: "center" }}
    >
      <div className="flex gap-5 justify-center px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap">

        <div className="my-auto">Activity</div>

      </div>
    </Card>


    <div className="flex flex-col gap-4 overflow-hidden  md:hover:overflow-y-scroll">
      <div
        className="flex gap-4 p-5 w-full"
        style={{

          background: "gray",
          borderRadius: "20px",
          alignSelf: "center",
         
          backgroundColor: "rgb(112 124 187 / 28%)",
        }}
      >
        <div className="flex flex-col flex-1 self-start mt-2 text-sm font-semibold leading-5 text-white">

          <div className="flex flex-row justify-between p-2">
            <div>
              <span>Today's target</span>
            </div>
            <div>

            </div>
          </div>

          <div
            className="flex flex-row content-center items-center"
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ae2e96e1ca910201d90df5452472f4ec2d130090f9474eb79d7e1649391b5c?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                alt="Today Target"
                className="self-center mt-5 aspect-[2.17] w-[131px]"
              />
            </div>

            <div className="">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1112220c8dfa96b711b62b09369557bb83e2d7bf0dde1bb0346027b3ad5dd7e?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                alt="Progress Indicator"
                className="self-center mt-4 aspect-[2.17] w-[130px]"
              />
            </div>
          </div>
        </div>
      </div>

      <Card className="p-3 dark md:min-h-[350px]" style={{ background: "rgba(112, 124, 187, 0.28)" }} >
        <div
          className="flex justify-between px-px mt-8 text-base font-semibold leading-6 text-white"
          style={{ width: "90%", alignSelf: "center", margin: "10px" }}
        >
          <div className="flex-auto my-auto">Activity Progress</div>

        </div>

        <div
          className="flex flex-col px-5 py-6 mt-4 w-full rounded-3xl shadow-2xl"
          style={{ background: "none" }}
        >
          <Card className="p-2 h-[200px]" style={{ background: "rgba(112, 124, 187, 0.28)" }} >
            <div
              className="flex flex-row w-full h-[180px] p-4"
              style={{ justifyContent: "space-between" }}
            >
              {/* Similar Images and Block Repeated with Different Sources */}
              {[
                50, 60, 75, 60, 85, 90
              ].map((ext, index) => (

                <VerticalProgressBar key={index} label="Progress bar" progress={ext} />
              ))}
            </div>
            {/* <div className="flex gap-5 justify-between mt-3 text-xs leading-5 whitespace-nowrap text-stone-500">
            <div className="grow">Sun</div>
            <div>Mon</div>
            <div className="text-center">Tue</div>
            <div className="text-center">Wed</div>
            <div className="text-center">Thu</div>
            <div className="text-center">Fri</div>
            <div className="grow text-center">Sat</div>
          </div> */}
          </Card>
        </div>
      </Card>

      <Card
        className="p-4 my-2 dark m-2 w-full md:min-h-[300px]"
        style={{
          alignSelf: "center",

          background: "none",
        }}
      >
        <div className="flex flex-col gap-5 justify-between mt-9 leading-[150%] ">
          <div className="flex mb-2">
            <div className="flex-auto text-base font-semibold text-white">
              Latest Activity
            </div>
            <div className="my-auto text-xs font-medium text-stone-400">
              See more
            </div>
          </div>

          <div>
            <Card className="p-0 bg-transparent shadow-none p-2 gap-2">
              {/* ActivityItem Component Usage */}
              <ActivityItem
                title="Drinking 300ml Water"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/092622b632c13022dabeea6907f5d6f6ae23b103b10df8d1c921b5810cf1ecb6?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                altText="Drinking Water"
                time="About 3 minutes ago"
              />
              <ActivityItem
                title="Eat Snack (Fitbar)"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/082fe06394a0977af8fe07e7f18a96a58f1b2c1735c26b314223159f0bfd7116?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                altText="Eating Snack"
                time="About 10 minutes ago"
              />
            </Card>
          </div>
        </div>
      </Card>
    </div>



  </div>
);

export default ActivityTrackerApp;
