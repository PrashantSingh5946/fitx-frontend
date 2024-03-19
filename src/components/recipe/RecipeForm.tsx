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

interface RecipeFormProps {
  name: string;
  setName: (name: string) => void;
  dietaryPreferences: string;
  setDietaryPreferences: (dietaryPreferences: string) => void;
  nutritionalPreference: string;
  setNutritionalPreferences: (nutritionalPreference: string) => void;
  allergies: string;
  setAllergies: (allergies: string) => void;
  isLoading: boolean;
}

export default function ({
  name,
  setName,
  dietaryPreferences,
  setDietaryPreferences,
  nutritionalPreference,
  setNutritionalPreferences,
  allergies,
  setAllergies,
  isLoading,
}: RecipeFormProps) {
  return (
    <>
      {!isLoading && (
        <>
          <Input
            type="text"
            label="Recipe name"
            placeholder="Enter your recipe name"
            className="bg-transparent text-white"
            value={name}
            onValueChange={(e) => {
              setName(e);
            }}
          />

          <Card className="p-2 bg-transparent text-white">
            <RadioGroup
              classNames={{ label: "text-white" }}
              label="Select your dietary preference"
              orientation="horizontal"
              defaultValue={dietaryPreferences}
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
        </>
      )}

      {isLoading && <Spinner size="lg" />}
    </>
  );
}
