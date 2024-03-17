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

export default function () {
  const [name, setName] = useState("");
  const [nutritionalPreference, setNutritionalPreferences] = useState("");
  const [dietaryPreferences, setDietaryPreferences] = useState("vegetarian");
  const [allergies, setAllergies] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([
    {
      name: "Recipe 1",
      ingredients: ["ingredient1", "ingredient2", "ingredient3"],
      description:
        "This is a delicious recipe that meets your dietary requirements. It is healthy, easy to prepare, and has a variety of flavors to satisfy your taste palette.",
      instructions: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
      macros_per_100g: [15, 20, 10],
      calories: 300,
      dietary_restrictions: "undefined",
      allergy_warning: "Contains nuts.",
    },
    {
      name: "Recipe 2",
      ingredients: ["ingredient4", "ingredient5", "ingredient6"],
      description:
        "This is another flavorful recipe that meets your dietary requirements. It's a blend of wholesome ingredients that provide a balance between health and taste.",
      instructions: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
      macros_per_100g: [20, 15, 12],
      calories: 350,
      dietary_restrictions: "undefined",
      allergy_warning: "No allergens.",
    },
    {
      name: "Recipe 3",
      ingredients: ["ingredient7", "ingredient8", "ingredient9"],
      description:
        "This is a scrumptious recipe perfect for those who are conscious about their dietary intake. The ingredients are carefully selected to meet your diet requirements.",
      instructions: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
      macros_per_100g: [30, 10, 15],
      calories: 400,
      dietary_restrictions: "undefined",
      allergy_warning: "Contains wheat.",
    },
  ]);

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

    setIsloading(true);
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        setData(response.data);
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

          <button onClick={GenerateRecipe}>Generate Recipe</button>
        </>
      )}

      {isLoading && <Spinner size="lg" />}

      {data.length != 0 && (
        <div className="overflow-y bg-transparent">
          {data.map((dataItem, index) => (
            <Card
              isBlurred
              className="border-none bg-background/10 mt-2"
              shadow="sm"
              style={{
                // background:
                //   "linear-gradient(to right top, rgb(255, 180, 87), rgb(255, 112, 91))",
                height: "150px",
              }}
            >
              <CardBody className="p-0">
                <div className="flex items-center flex-row">
                  <div
                    className="rounded dark h-100"
                    style={{ height: "150px", aspectRatio: 1, padding: "10px" }}
                  >
                    <Image
                      alt="Food cover"
                      className="object-cover"
                      width={"auto"}
                      shadow="md"
                      src="https://cdn-icons-png.freepik.com/512/14998/14998743.png?ga=GA1.1.1061933343.1710504656&"
                    />
                  </div>

                  <div className="flex flex-col mx-2">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-0">
                        <h3 className="font-semibold text-foreground/90">
                          {dataItem.name}
                        </h3>
                        <p className="text-small text-foreground/80">
                          {dataItem.description}
                        </p>
                        <h1 className="text-large font-medium mt-2">
                          Frontend Radio
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
