import * as React from "react";
import Pancake from "./Pancake";
import { useAppSelector } from "../../app/hooks";
import { Card } from "@nextui-org/react";

interface IngredientProps {
  imageSrc: string;
  name: string;
  amount: string;
}

const Ingredient: React.FC<IngredientProps> = ({ imageSrc, name, amount }) => (
  <div className="flex flex-col items-left" style={{ minWidth: "100px" }}>
    <img
      src={imageSrc}
      alt={name}
      className="self-center w-20 rounded-xl aspect-square"
    />
    <div className="self-center mt-2.5 text-xs text-white">{name}</div>
    <div className="self-center mt-1 text-xs text-stone-500 flex-wrap mx-2 px-2">
      {amount}
    </div>
  </div>
);

interface StepProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  isActive = false,
}) => (
  <>
    <div className="flex gap-3 self-start mt-4">
      {/* <div className="my-auto text-sm leading-5 text-stone-400">{number}</div> */}

      {/* Pointer bullet */}
      <div
        className={`flex flex-col justify-center items-center px-1.5 w-5 h-5 mt-1 bg-white rounded-full border border-solid ${
          isActive ? "border-purple-400" : "border-stone-400"
        }`}
      >
        <div
          className={`shrink-0 w-2.5 h-2.5 rounded-full ${
            isActive
              ? "bg-[linear-gradient(274deg,#C58BF2_0%,#EEA4CE_124.45%)]"
              : "bg-stone-400"
          }`}
        />
      </div>

      <div className="mx-2">
        <div className="text-base text-small leading-6 text-white">{title}</div>
        <div className="self-center mt-2.5 text-xs leading-5 text-stone-500">
          {description}
        </div>
      </div>
    </div>
  </>
);

const steps = [
  {
    number: "01",
    title: "Step 1",
    description: "Prepare all of the ingredients that needed",
    isActive: true,
  },
  {
    number: "02",
    title: "Step 2",
    description: "Mix flour, sugar, salt, and baking powder",
  },
  {
    number: "03",
    title: "Step 3",
    description:
      "In a seperate place, mix the eggs and liquid milk until blended",
  },
  {
    number: "04",
    title: "Step 4",
    description:
      "Put the egg and milk mixture into the dry ingredients, Stir untul smooth and smooth",
  },
  {
    number: "05",
    title: "Step 5",
    description: "Enjoy your meal!!",
  },
];

const ingredients = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f04bc67e13ef786645964c24ac41cd45bd59d0b24762be1cd783117fa4cd416b?apiKey=2471e6abba594059a1b1e2ce6032627e&",
    name: "Wheat Flour",
    amount: "100g",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e315e84ec6eecb0bb573bd7633a2e5b4d10d6ae505e57ffbd7b817f746e02ad8?apiKey=2471e6abba594059a1b1e2ce6032627e&",
    name: "Sugar",
    amount: "3 tbsp",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/134ce32773871b349e1da7a7469fcc3cc907b568d44751acae8727ebfbfc7dec?apiKey=2471e6abba594059a1b1e2ce6032627e&",
    name: "Baking Soda",
    amount: "2 tsp",
  },
];

const RecipeDetails: React.FC = () => {
  const recipe = useAppSelector((state) => state.recipe.currentRecipe);
  console.log(recipe);

  return (
    <div
      className="flex flex-col mx-auto w-full bg-neutral-600 max-w-[480px] text-white rounded-[40px] mt-4"
      style={{
        maxHeight: "90vh",
        background: "linear-gradient(274.42deg, #F6605D 0%, #9DCEFF 124.45%)",
      }}
    >
      <div
        className="flex gap-5  items-start px-8 pt-10 pb-20 w-full mt-5 justify-center"
        id="background"
        style={{ height: "250px" }}
      >
        <Pancake />
      </div>
      <div
        className="flex z-10 flex-col px-1 py-2 mt-0 w-full bg-black/80 rounded-[40px]"
        style={{ overflowY: "scroll" }}
      >
        <div className="shrink-0 self-end bg-white/80 h-[5px] rounded-[50px] w-[50px] self-center" />
        <div className="flex gap-5 justify-between leading-[150%] px-4">
          <div className="flex flex-col">
            <h1 className="mt-8 text-base font-bold text-white">
              {recipe?.name}
            </h1>
            <div className="mt-3 text-xs bg-clip-text">by Prashant Singh</div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/524327a0641a67174da21f8a51e1e0dc8a2d7ce2460a60c82bf3bc59bf63b040?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            alt="More"
            className="shrink-0 self-end mt-10 w-8 aspect-square"
          />
        </div>

        {/* Nutrition info */}
        <div className="flex gap-1 mt-6 text-white leading-[150%]">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit p-2">
            <h2 className="text-base font-semibold">Nutrition</h2>
            <div
              className="flex gap-4 mt-3 text-xs"
              style={{ overflowX: "scroll", flexWrap: "wrap" }}
            >
              <div
                className="flex gap-1.5 whitespace-nowrap rounded-xl  bg-[linear-gradient(175deg,#b4b5b72b_0%,#3F4E5E36_124.45%)]"
                style={{
                  maxWidth: "120px",
                  height: "40px",
                  padding: "10px",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f6f035bce3062356478fd3d53612cbe9600d967997c645cac43ddd00428ac7c?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                  alt="Calories"
                  className="shrink-0 aspect-square w-[18px]"
                />
                <div className="my-auto">{recipe?.calories ?? 0}kCal</div>
              </div>
              <div
                className="flex gap-1.5 rounded-xl  bg-[linear-gradient(175deg,#b4b5b72b_0%,#3F4E5E36_124.45%)]"
                style={{
                  maxWidth: "120px",
                  height: "40px",
                  padding: "10px",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1275e81f982e7cf890514906c95fa52a88a4d946361ebd71b362c58f75df30?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                  alt="Fats"
                  className="shrink-0 aspect-square w-[18px]"
                />
                <div>{recipe?.macros_per_100g.fats}g fats</div>
              </div>
              <div
                className="flex gap-1.5 p-2.5 rounded-xl  bg-[linear-gradient(175deg,#b4b5b72b_0%,#3F4E5E36_124.45%)]"
                style={{
                  maxWidth: "120px",
                  height: "40px",
                  padding: "10px",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6564ec91e416d1ab2b6a51b1203020000200b524b658668e238f7839fad8af8?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                  alt="Proteins"
                  className="shrink-0 aspect-square w-[18px]"
                />
                <div>{recipe?.macros_per_100g.protein}g proteins</div>
              </div>

              <div
                className="flex gap-1.5 p-2.5 rounded-xl bg-[linear-gradient(175deg,#b4b5b72b_0%,#3F4E5E36_124.45%)]"
                style={{
                  maxWidth: "120px",
                  height: "40px",
                  padding: "10px",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/db418b6295552dbe19f4724b6d2d6eca6d1089d85a4f484e5939c3c3b1b19f94?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                  alt="Fibre"
                  className="shrink-0 self-end mt-9 aspect-[0.76] w-[18px]"
                />
                <div>{recipe?.macros_per_100g.fibre}g Fibre</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex flex-col mt-6 p-2">
          <h2 className="mt-1 text-base font-semibold leading-6 text-white">
            Description
          </h2>
          <p className="self-start text-white mt-2 text-xs leading-5 bg-clip-text">
            {recipe?.description}
          </p>
        </div>

        <div className="flex gap-4 mt-5 p-2">
          <div className="flex flex-col">
            <div className="justify-between px-1">
              <div className="text-base font-semibold leading-6 text-white">
                Ingredients That You Will Need{" "}
              </div>
              <div className="text-base text-xs  text-white self-end self-center">
                {recipe?.ingredients.length} items
              </div>
            </div>

            <div
              className="flex flex-row mt-5 leading-[150%] w-screen"
              style={{ overflowX: "scroll", maxWidth: "100%" }}
            >
              {recipe?.ingredients.map((data, index) => (
                <Card
                  key={index}
                  className="bg-transparent p-2"
                  style={{ minWidth: "100px", minHeight: "100px" }}
                >
                  <Ingredient
                    name={""}
                    amount={data}
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f04bc67e13ef786645964c24ac41cd45bd59d0b24762be1cd783117fa4cd416b?apiKey=2471e6abba594059a1b1e2ce6032627e&"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Step by step section */}

        <div className="flex flex-col gap-5 mt-5 leading-[150%] p-3">
          <div>
            <h2 className="flex-auto text-base font-semibold text-white">
              Step by Step
            </h2>
            <div className="text-xs text-stone-500">8 Steps</div>
          </div>

          {recipe?.instructions.map((instruction, index) => (
            <Step
              key={index}
              number={index.toFixed(0)}
              title=""
              description={instruction}
              isActive={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
