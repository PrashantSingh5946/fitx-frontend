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

import { Carousel } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function () {
  const [name, setName] = useState("");
  const [nutritionalPreference, setNutritionalPreferences] = useState("None");
  const [dietaryPreferences, setDietaryPreferences] = useState("vegetarian");
  const [allergies, setAllergies] = useState("None");
  const [isLoading, setIsloading] = useState(false);
  const email = useAppSelector((state) => state.auth.email);

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

  const [data, setData] = useState([]);
  let nav = useNavigate();
  let dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.credential);

  const dietFacts = [
    "Spicy foods containing capsaicin can boost metabolism temporarily.",
    "Green tea consumption may support weight loss due to its catechin antioxidants.",
    "Protein-rich foods help increase satiety and reduce overall calorie intake.",
    "Fiber-rich foods promote feelings of fullness and aid in weight management.",
    "Drinking water before meals can help control appetite and calorie intake.",
    "Sufficient sleep is crucial for managing hunger hormones and reducing cravings.",
    "Mindful eating can prevent overeating and promote healthier habits.",
    "Meal prepping helps in making better food choices and avoiding unhealthy options.",
    "Healthy fats like avocados and nuts improve satiety and support weight loss.",
    "A balanced diet consisting of various food groups is essential for long-term weight management and overall health."
  ];




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
      url: process.env.REACT_APP_API_URL + "/recipe/create",
      headers: {
        "Content-Type": "application/json",
        'user_email': email,
        'Authorization': 'Bearer ' + token,
      },
      data: payload,
    };

    const submitData = (data: Recipe) => {
      dispatch(setCurrentRecipe(data));
      nav(`/recipe/${data._id}/show`);
    };

    setIsloading(true);
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        console.log("Recipe generated successfully", response.data);

        let {
          _id,
          name,
          description,
          allergy_warning,
          calories,
          ingredients,
          instructions,
          macros_per_100g,
          dietary_restrictions,
        } = response.data;

        let recipe: Recipe = {
          _id: _id,
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
              variant="faded"
              isRequired
              type="text"
              label="Recipe name"
              className="bg-transparent text-white"
              value={name}
              onValueChange={(e) => {
                setName((name) => e);
              }}
            />

            <Card className=" bg-transparent text-white">
              <RadioGroup
                className="p-3"
                label="Select your dietary preference"
                orientation="vertical"
                defaultValue=""
                color="secondary"
                onValueChange={(e) => setDietaryPreferences(e)}
              >
                <Radio value="vegetarian">Veg</Radio>
                <Radio value="non-vegetarian">Nov-Veg</Radio>
                <Radio value="vegan">Vegan</Radio>
              </RadioGroup>
            </Card>

            <Input
              variant="faded"
              isRequired
              type="text"
              label="Nutritional Preferences"
              className="bg-transparent"
              size="lg"
              value={nutritionalPreference}
              onValueChange={(e) => setNutritionalPreferences(e)}
            />

            <Input
              variant="faded"
              size="lg"
              type="text"
              label="Allergies"
              className="bg-transparent"
              value={allergies}
              onValueChange={(e) => setAllergies(e)}
            />

            <button
              className="justify-center items-center px-16 py-5 text-base font-bold leading-6 text-white rounded-lg"
              style={{
                background:
                  "linear-gradient(274.42deg, rgb(255 56 52) 0%, rgb(94 175 255) 124.45%)",
              }}
              onClick={GenerateRecipe}
            >
              Generate Recipe
            </button>
          </div>
        </>
      )}


      {isLoading && (

<div className="flex flex-col item-center justify-center gap-5 min-h-[40vh]">

    <Spinner color="danger" size="lg"/>

        <Carousel navigation={({ setActiveIndex, activeIndex, length }) => { }} placeholder={<></>} transition={{ type: "tween", duration: 0.5 }} className="rounded-xl max-w-[100%] overflow-hidden" autoplay >

          {

            dietFacts.map((fact, index) =>

              <Card key={index} className="bg-transparent text-white shadow-none min-h-[10vh]  flex item-center justify-center">

              
                <div className="text-white text-center mt-4">{fact}</div>

              </Card>
            )
          }
        </Carousel>

        </div>
      )}

      {data.length != 0 && (
        <div className="overflow-y bg-transparent">
          {data &&
            <RecipeDetails />
          }
        </div>
      )}
    </>
  );
}
