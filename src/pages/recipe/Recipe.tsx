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
import { useState } from "react";
import Recipe from "../../components/ui/NavBar/Buttons/Recipe";
import RecipeForm from "../../components/recipe/RecipeForm";
import RecipePreviewCard from "../../components/recipe/RecipePreviewCard";
import RecipeCategoryCard from "../../components/recipe/RecipeCategoryCard";

export default function () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className="flex flex-col gap-2 mt-5 rounded-[40px] py-5 px-2"
      style={{
        background:
          "linear-gradient(274.42deg, rgb(96 106 153 / 20%) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
      }}
    >
      <div></div>
      <div className="flex gap-5 justify-between px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e4b5c64979f7b79b1d2be80b885f9ad03ed4723e1a1f2835d21945d29ba888b?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="shrink-0 w-8 aspect-square"
        />
        <div className="my-auto">Recipes</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a6fbc5223c59f105bbf3ea19b0d0860de5c6961f1c8ff64f71a5d789034b87?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <div
        className="p-2 mt-2  flex flex-col gap-5 bg-transparent p-4 rounded-large m-2 "
        style={{
          height: "inherit",
          // overflowY: "scroll",
          marginTop: "24px",
        }}
      >
        <Card className="bg-transparent flex flex-col gap-5 border-0 shadow-none">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="lg"
            type="search"
            startContent={<FaSearch />}
          />

          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            className="dark"
          >
            <ModalContent className="bg-black/80">
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Create Recipe
                  </ModalHeader>
                  <ModalBody>
                    <RecipeForm />
                  </ModalBody>
                  <ModalFooter>
                    {/* <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button> */}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Button
            className="justify-center items-center px-16 py-5 text-base font-bold leading-6 text-white"
            style={{
              background:
                "linear-gradient(274.42deg, rgb(255 52 48) 0%, rgb(109 182 255) 124.45%)",
            }}
            onPress={onOpen}
            size="lg"
          >
            Create Recipe
          </Button>
        </Card>

        <div>
          <Card className="bg-transparent shadow-none text-white text-large pb-2 mb-0 mt-5">
            Recommendation for Diet
          </Card>
          <Card className="bg-transparent shadow-none flex flex-row overflow-x gap-5 mt-1">
            <RecipePreviewCard />
            <RecipePreviewCard />
          </Card>
        </div>

        <div>
          <Card className="bg-transparent shadow-none text-white text-large pb-2 mb-0 mt-5">
            Find something to eat
          </Card>
          <Card className="bg-transparent shadow-none flex flex-row overflow-x gap-5 mt-1">
            <RecipeCategoryCard />
            <RecipeCategoryCard />
          </Card>
        </div>
      </div>
    </div>
  );
}
