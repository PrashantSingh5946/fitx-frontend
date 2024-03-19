import { Card, Button } from "@nextui-org/react";

import Pancake from "./Pancake";
import styles from "./styles.module.css";
import BreakFast from "./BreakFast";

export default function () {
  return (
    <>
      <Card
        isPressable
        className="p-4 flex flex-col gap-1  items-left bg-transparent aspect-square overflow-visible"
        style={{
          background:
            "linear-gradient(274.42deg, rgb(146 163 253 / 10%) 0%, rgb(157 206 255 / 10%) 124.45%) ",
          width: "180px",
          borderTopRightRadius: "120px",
        }}
      >
        {/* //Food logo */}
        <div className={styles["category-svg-container"] + " self-end"}>
          {" "}
          <BreakFast />{" "}
        </div>

        {/* Food Description */}

        <div className="text-white mt-4 flex flex-col items-start">
          <div className="text-base"> Breakfast </div>
          <div className="text-xs text-white/60">120+ foods</div>
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
