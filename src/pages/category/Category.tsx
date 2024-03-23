import {
    Button,
    Card,
    CardHeader,
    Input,
    useDisclosure,
  } from "@nextui-org/react";
  import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
  import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "@nextui-org/react";
  import { useEffect, useState } from "react";
  import Recipe from "../../components/ui/NavBar/Buttons/Recipe";
  import RecipeForm from "../../components/recipe/RecipeForm";
  import RecipePreviewCard from "../../components/recipe/RecipePreviewCard";
  import RecipeCategoryCard from "../../components/recipe/RecipeCategoryCard";
  import { useAppSelector } from "../../app/hooks";
  import { Recipe as RecipeType} from "../../app/features/recipe/recipeSlice";
  import AllRecipeFetcher from "../../lib/AllRecipeFetcher";
  import { Link } from "react-router-dom";
  
  export default function () {
  
  
    return (
      <div
        className="flex flex-col gap-2 mt-5 rounded-[40px] py-5 px-2"
        style={{
          background:
            "linear-gradient(274.42deg, rgb(96 106 153 / 20%) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
        }}
      >
        <div></div>
        <div className="flex gap-5 justify-center px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap">
  
          <div className="my-auto">Category</div>
  
        </div>
       
      </div>
    );
  }
  