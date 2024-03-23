import { Card, Button } from "@nextui-org/react";

import Pancake from "./Pancake";
import styles from "./styles.module.css";
import { Recipe } from "../../app/features/recipe/recipeSlice";

export default function ({recipe}: {recipe: Recipe}) {
  return (
    <>
      <Card
        isPressable
        className="p-4 flex flex-col gap-1 justify-center w-[160px] md:w-[200px] items-center bg-transparent aspect-square"
        style={{
          background:
            "linear-gradient(274.42deg, rgb(197 139 242 / 20%) 0%, rgb(238 164 206 / 20%) 124.45%)",
        }}
      >
        {/* //Food logo */}
        <div className={ "w-[60%]" + " "+styles["svg-container"]}>
          {" "}
          <Pancake />{" "}
        </div>

        {/* Food Description */}

        <div className="text-white mt-2">
          <div className="text-sm"> {recipe.name} </div>
          <div className="text-xs text-white/60">Easy | 30mins | {recipe.calories} kcal</div>
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
