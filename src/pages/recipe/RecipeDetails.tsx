import { Card, CardBody, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Chip } from "@nextui-org/react";
import axios from "axios";
import { useAppSelector } from "../../app/hooks";

/* eslint-disable import/no-anonymous-default-export */
export default function () {
  const userEmail = useAppSelector((state) => state.auth.email);
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<any>();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `http://localhost:3001/recipe/${recipeId}`,
          headers: {
            "Content-Type": "application/json",
            user_email: userEmail,
          },
        };
        const { data } = await axios(config);

        setRecipe(data);
      } catch (error) {
        console.log("Error fetching recipe", error);
      }
    };

    fetchRecipe();
  }, [recipeId, userEmail]);

  return (
    <div className="relative">
      <div className="fixed top-5 w-11/12 lg:w-[98%] z-10">
        <header className="flex gap-5 justify-between px-px text-base font-bold leading-6 text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/26336c73ad6c31fbce1fc60e608605a48a89b2f14e549776cc8ce9ed8856450e?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            alt=""
            className="shrink-0 w-8 aspect-square"
          />
          <h2 className="flex my-auto m-2 p-2 font-semibold leading-5 text-white items-center content-center">
            Recipes
          </h2>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a6fbc5223c59f105bbf3ea19b0d0860de5c6961f1c8ff64f71a5d789034b87?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            alt=""
            className="shrink-0 w-8 aspect-square"
          />
        </header>
      </div>
      <div className="mt-12">
        <Card
          // isBlurred
          className="border-none bg-background/10 mt-2"
          shadow="sm"
        >
          <CardBody className="flex flex-col gap-4">
            <div
              className="rounded dark lg:hidden"
              style={{
                padding: "10px",
              }}
            >
              <Image
                alt="Food cover"
                className="object-cover"
                width={"auto"}
                shadow="md"
                src={recipe?.thumbnail_url}
              />
            </div>
            <div className={`hidden lg:block w-1/2 h-96 m-auto`}>
              <img
                src={recipe?.thumbnail_url}
                alt={recipe?.name}
                className="w-full h-full rounded-md"
              />
            </div>
            <h1 className="text-white text-2xl font-bold">{recipe?.name}</h1>
            <p className="text-white">{recipe?.description}</p>
            <Card className="border-none bg-background/10 py-4 px-2">
              <p className="text-white font-semibold">Ingredients:</p>
              <ul className="list-disc list-inside text-white">
                {recipe?.ingredients.map(
                  (ingredient: string, index: number) => (
                    <li key={index}>{ingredient}</li>
                  )
                )}
              </ul>
            </Card>
            <h2 className="text-xl font-medium text-white">How to make?</h2>
            <ol className="text-white list-inside list-decimal">
              {recipe?.instructions.map(
                (instruction: string, index: number) => (
                  <li key={index}>{instruction}</li>
                )
              )}
            </ol>
            <div className="flex gap-2">
              <h2 className="text-xl font-medium text-white">Calories:</h2>
              <Chip color="primary">{recipe?.calories} kcal</Chip>
            </div>
            <ul className="list-disc list-inside text-white">
              <h2 className="text-xl font-medium text-white mb-2">
                Marcos per 100g:
              </h2>
              {recipe?.macros_per_100g.map((marco: string, index: number) => (
                <li key={index}>{marco}</li>
              ))}
            </ul>
            <div className="flex gap-2 flex-wrap">
              <h2 className="text-xl font-medium text-white">
                Dietary Restrictions:
              </h2>
              {recipe?.dietary_restrictions
                .split(",")
                .map((dietaryRestriction: string, index: number) => (
                  <Chip color="danger" key={index}>
                    {dietaryRestriction}
                  </Chip>
                ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              <h2 className="text-xl font-medium text-white">Allergies:</h2>
              {recipe?.allergy_warning
                .split(",")
                .map((allergy: string, index: number) => (
                  <Chip color="danger" key={index}>
                    {allergy}
                  </Chip>
                ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
