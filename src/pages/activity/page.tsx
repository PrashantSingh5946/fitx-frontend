import { Card } from "@nextui-org/react";
import React from "react";

interface ActivityItemProps {
  title: string;
  src: string;
  altText: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  src,
  altText,
  time,
}) => (
  <Card className="mt-2">
    <div
      className="flex gap-5 justify-between px-4 py-4 w-full whitespace-nowrap rounded-2xl shadow-2xl bg-zinc-700 leading-[150%]"
      style={{ marginTop: "10px" }}
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
  <div className="flex flex-col space-between h-full">
    <Card
      className="m-2 p-2"
      style={{ background: "none", width: "90%", alignSelf: "center" }}
    >
      <div className="flex gap-5 mt-2 justify-between px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e4b5c64979f7b79b1d2be80b885f9ad03ed4723e1a1f2835d21945d29ba888b?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="shrink-0 w-8 aspect-square"
        />
        <div className="my-auto">Activity Tracker</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a6fbc5223c59f105bbf3ea19b0d0860de5c6961f1c8ff64f71a5d789034b87?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="shrink-0 w-8 aspect-square"
        />
      </div>
    </Card>

    <div
      className="flex gap-4 p-5 "
      style={{
        width: "90%",
        background: "gray",
        borderRadius: "20px",
        margin: "20px",
        alignSelf: "center",
        padding: "20px",
        backgroundColor: "rgb(112 124 187 / 28%)",
      }}
    >
      <div className="flex flex-col flex-1 self-start mt-2 text-sm font-semibold leading-5 text-white">
        <div className="flex flex-row justify-between p-2">
          <div>
            <span>Today Target</span>
          </div>
          <div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b43be451851947744e13c67b8e281f0f5648fe3d7069f661b4aae6b0e7d5e2?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              alt="Achievement Badge"
              className="self-end w-6 aspect-square"
            />
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

    <Card className="p-3 mx-2 dark my-2">
      <div
        className="flex justify-between px-px mt-8 text-base font-semibold leading-6 text-white"
        style={{ width: "90%", alignSelf: "center", margin: "10px" }}
      >
        <div className="flex-auto my-auto">Activity Progress</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0afcafc86d28e845cfa1d610d1c41ae5a44dfafb88e0d058190835bc8bec2891?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          alt="Activity Progress Graph"
          className="shrink-0 aspect-[2.56] w-[76px]"
        />
      </div>

      <div
        className="flex flex-col px-5 py-6 mt-4 w-full rounded-3xl shadow-2xl"
        style={{ background: "none" }}
      >
        <Card className="p-2" style={{ background: "gray" }}>
          <div
            className="flex flex-row w-full p-4"
            style={{ justifyContent: "space-between" }}
          >
            {/* Similar Images and Block Repeated with Different Sources */}
            {[
              "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd3718797e808da5d8702a977e1ff6b277c33e1b5f12c28831b19f5c2a8ff73?apiKey=2471e6abba594059a1b1e2ce6032627e&",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/76edf77a6229a8a4dbb8daa4cf5c1a18a52b9df4c9be01b75e5f202968e4998f?apiKey=2471e6abba594059a1b1e2ce6032627e&",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/4038372d61d5ea77fb2c659f0c9a53f5d16fec8f2840819d564f5d2cf48e9ecd?apiKey=2471e6abba594059a1b1e2ce6032627e&",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/2b43efc8ff913beab37b7eb6390e47f94c922e2ee7ee2778053aafcd991800cd?apiKey=2471e6abba594059a1b1e2ce6032627e&, https://cdn.builder.io/api/v1/image/assets/TEMP/f9b8e0b454c6f6817bc09b346524a10adc47012419948a875eb04727525d027e?apiKey=2471e6abba594059a1b1e2ce6032627e&",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/fe99820a89663d5378a2e07635f2fb87e6a3c8916998996b5d9e4dee1889476c?apiKey=2471e6abba594059a1b1e2ce6032627e&",
              "https://cdn.builder.io/api/v1/image/assets/TEMP/226b379c1bcf9f8450423050ce6563c58b8837691223713842959bf0f475bb91?apiKey=2471e6abba594059a1b1e2ce6032627e&",
            ].map((ext) => (
              <img
                loading="lazy"
                src={ext}
                alt=""
                className="shrink-0 aspect-[0.16] w-[22px]"
              />
            ))}
          </div>
          <div className="flex gap-5 justify-between mt-3 text-xs leading-5 whitespace-nowrap text-stone-500">
            <div className="grow">Sun</div>
            <div>Mon</div>
            <div className="text-center">Tue</div>
            <div className="text-center">Wed</div>
            <div className="text-center">Thu</div>
            <div className="text-center">Fri</div>
            <div className="grow text-center">Sat</div>
          </div>
        </Card>
      </div>
    </Card>

    <Card
      className="p-4 my-2 dark m-2"
      style={{
        width: "90%",
        alignSelf: "center",
        margin: "10px",
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
          <Card className="p-0" style={{ background: "none" }}>
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
);

export default ActivityTrackerApp;
