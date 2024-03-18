import { Button, Card, Input, useDisclosure } from "@nextui-org/react";
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

export default function () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <header className="flex gap-5 justify-between  text-base font-bold leading-6 text-white mt-2 p-2">
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
      <div
        className="p-2 mt-2  flex flex-col gap-5"
        style={{
          height: "inherit",
          overflowY: "scroll",
          marginTop: "24px",
        }}
      >
        <Card className="bg-transparent flex flex-col gap-5">
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

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent
              className="bg-transparent top-0"
              style={{
                background: "rgba(255,255,255,0.5)",
                position: "relative",
                alignSelf: "center",
              }}
            >
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Create Recipe
                  </ModalHeader>
                  <ModalBody>
                    <RecipeForm />
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
          <Button
            className="justify-center items-center px-16 py-5 text-base font-bold leading-6 text-white"
            style={{
              background:
                "linear-gradient(274.42deg, rgb(246, 96, 93) 0%, rgb(157, 206, 255) 124.45%)",
            }}
            onPress={onOpen}
            size="lg"
          >
            Create Recipe
          </Button>
        </Card>
      </div>
    </>
  );
}
