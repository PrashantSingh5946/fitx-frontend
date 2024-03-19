import { Card, Button } from "@nextui-org/react";

import Pancake from "./Pancake";
import styles from "./styles.module.css";

export default function () {
  return (
    <>
      <Card
        isPressable
        className="p-4 flex flex-col gap-1 justify-center items-center bg-transparent aspect-square"
        style={{
          background:
            "linear-gradient(274.42deg, rgb(197 139 242 / 20%) 0%, rgb(238 164 206 / 20%) 124.45%)",
          width: "180px",
          height: "180px",
        }}
      >
        {/* //Food logo */}
        <div className={styles["svg-container"]}>
          {" "}
          <Pancake />{" "}
        </div>

        {/* Food Description */}

        <div className="text-white mt-2">
          <div className="text-sm"> Honey Pancake </div>
          <div className="text-xs text-white/60">Easy | 30mins | 180kCal</div>
        </div>

        {/* View Button */}

        {/* <div>
          <Button
            size="sm"
            className="mt-2 px-4 tracking-wide text-white font-semibold"
            radius="full"
            style={{
              background:
                "linear-gradient(274.42deg, rgb(255, 52, 48) 0%, rgb(109, 182, 255) 124.45%)",
            }}
          >
            View
          </Button>
        </div> */}
      </Card>
    </>
  );
}
