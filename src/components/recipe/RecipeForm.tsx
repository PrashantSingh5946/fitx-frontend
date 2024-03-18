import {
  Card,
  CardBody,
  Image,
  Input,
  Radio,
  RadioGroup,
  Spinner,
} from "@nextui-org/react";
import Button from "../ui/Button";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useRef,
  useState,
} from "react";
import axios from "axios";
import Loader from "../loader/page";
import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDisplay";
import { useNavigate } from "react-router-dom";
import {
  Recipe,
  setCurrentRecipe,
} from "../../app/features/recipe/recipeSlice";
import { useAppDispatch } from "../../app/hooks";

export default function () {
  const [name, setName] = useState("");
  const [nutritionalPreference, setNutritionalPreferences] = useState("");
  const [dietaryPreferences, setDietaryPreferences] = useState("vegetarian");
  const [allergies, setAllergies] = useState("");
  const [isLoading, setIsloading] = useState(false);
  //   const [data, setData] = useState([
  //     {
  //       name: "Recipe 1",
  //       ingredients: ["ingredient1", "ingredient2", "ingredient3"],
  //       description:
  //         "This is a delicious recipe that meets your dietary requirements. It is healthy, easy to prepare, and has a variety of flavors to satisfy your taste palette.",
  //       instructions: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
  //       macros_per_100g: [15, 20, 10],
  //       calories: 300,
  //       dietary_restrictions: "undefined",
  //       allergy_warning: "Contains nuts.",
  //     },
  //     {
  //       name: "Recipe 2",
  //       ingredients: ["ingredient4", "ingredient5", "ingredient6"],
  //       description:
  //         "This is another flavorful recipe that meets your dietary requirements. It's a blend of wholesome ingredients that provide a balance between health and taste.",
  //       instructions: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
  //       macros_per_100g: [20, 15, 12],
  //       calories: 350,
  //       dietary_restrictions: "undefined",
  //       allergy_warning: "No allergens.",
  //     },
  //     {
  //       name: "Recipe 3",
  //       ingredients: ["ingredient7", "ingredient8", "ingredient9"],
  //       description:
  //         "This is a scrumptious recipe perfect for those who are conscious about their dietary intake. The ingredients are carefully selected to meet your diet requirements.",
  //       instructions: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
  //       macros_per_100g: [30, 10, 15],
  //       calories: 400,
  //       dietary_restrictions: "undefined",
  //       allergy_warning: "Contains wheat.",
  //     },
  //   ]);

  const [data, setData] = useState<any>([]);
  let nav = useNavigate();
  let dispatch = useAppDispatch();

  console.log(data.length);

  function GenerateRecipe() {
    let data = {
      name,
      nutritionalPreference,
      dietaryPreferences,
      allergies,
    };

    let payload = JSON.stringify(data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3001/recipe/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    };

    const submitData = (data: Recipe) => {
      dispatch(setCurrentRecipe(data));
      nav("/recipe/show");
    };

    setIsloading(true);
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        setData(response.data);

        let {
          name,
          description,
          allergy_warning,
          calories,
          ingredients,
          instructions,
          macros_per_100g,
          dietary_restrictions,
        } = response.data.recipes[0];

        let recipe: Recipe = {
          name: name,
          description: description,
          ingredients: ingredients,
          allergy_warning: allergy_warning,
          calories: calories,
          instructions: instructions,
          macros_per_100g: macros_per_100g,
          dietary_restrictions: dietary_restrictions,
        };

        submitData(recipe);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  return (
    <>
      {!isLoading && data.length == 0 && (
        <>
          <div className="p-4 flex flex-col  gap-3">
            <Input
              type="text"
              label="Recipe name"
              placeholder="Enter your recipe name"
              className="bg-transparent text-white"
              value={name}
              onValueChange={(e) => {
                setName((name) => e);
              }}
            />

            <Card className="p-2 bg-transparent text-white">
              <RadioGroup
                classNames={{ label: "text-white" }}
                label="Select your dietary preference"
                orientation="horizontal"
                defaultValue="vegetarian"
                onValueChange={(e) => setDietaryPreferences(e)}
              >
                <Radio classNames={{ label: "text-white" }} value="vegetarian">
                  Veg
                </Radio>
                <Radio
                  classNames={{ label: "text-white" }}
                  value="non-vegetarian"
                >
                  Nov-Veg
                </Radio>
                <Radio classNames={{ label: "text-white" }} value="vegan">
                  Vegan
                </Radio>
              </RadioGroup>
            </Card>

            <Input
              type="text"
              label="Nutritional Preferences"
              placeholder="Enter your nutritional preferences"
              className="bg-transparent"
              value={nutritionalPreference}
              onValueChange={(e) => setNutritionalPreferences(e)}
            />

            <Input
              type="text"
              label="Allergies"
              placeholder="Name allergies, if you have got any"
              className="bg-transparent"
              value={allergies}
              onValueChange={(e) => setAllergies(e)}
            />

            <button
              className="justify-center items-center px-16 py-5 text-base font-bold leading-6 text-white rounded-lg"
              style={{
                background:
                  "linear-gradient(274.42deg, rgb(246, 96, 93) 0%, rgb(157, 206, 255) 124.45%)",
              }}
              onClick={GenerateRecipe}
            >
              Generate Recipe
            </button>
          </div>
        </>
      )}

      {isLoading && <Spinner size="lg" />}

      {data.length != 0 && (
        <div className="overflow-y bg-transparent">
          {data?.recipes.map(() => (
            <RecipeDetails />
          ))}
        </div>
      )}
    </>
  );
}
