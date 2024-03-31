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
import RecipeSearch from "../../lib/RecipeSearch";

export default function () {


  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const email = useAppSelector((state) => state.auth.email);
  const token = useAppSelector((state) => state.auth.credential);

  const [searchContent, setSearchContent] = useState<string>("");

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = (value: string) => {
    setSearchContent(value);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        if(token)
        {

          RecipeSearch(value, token).then((data): void => { if(data) { setAvailableRecipes(data) }});

        }
     
      }, 500)
    );
  };
  



  const [availableRecipes, setAvailableRecipes] = useState<RecipeType[] | null>(null);

  useEffect(()=> {

    if(email && token)
    {
      AllRecipeFetcher(email, token).then((data): void => {
        if(data)
        {
          console.log(data);
          setAvailableRecipes(data);
        }
       
      }
      );
    }

    else
    {
      console.log("Email not found");
    }
  
  },[])





  return (
    <div
      className="flex flex-col gap-2 mt-5 items-center rounded-[40px] py-5 px-2 md:max-h-[80vh] overflow-y-hidden"
      style={{
        background:
          "linear-gradient(274.42deg, rgb(96 106 153 / 20%) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
      }}
    >
      <div></div>
      <div className="flex gap-5 justify-center px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap">

        <div className="my-auto">Recipes</div>

      </div>
      <div
        className="p-2 mt-2  flex flex-col gap-5 bg-transparent p-4 rounded-large m-2"
        style={{
          height: "inherit",
          // overflowY: "scroll",
          marginTop: "24px",
        }}
      >


        <Card className="bg-transparent flex flex-row gap-5 border-0 shadow-none grid grid-cols-1 sm:grid-cols-2 gap-5 max-w[600px] mb-5">
          <Input
            classNames={{
              base: "h-10 w-full sm:w-auto",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="lg"
            type="search"
            value={searchContent}
            onValueChange={(e) => handleSearch(e)}
            startContent={<FaSearch />}
          />

          <Button
            className="justify-center items-center w-[100%] px-16 py-5 text-base font-bold md:w-[190px] leading-6 text-white"
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

        <div >
          
                    <div >
                      <Card className="bg-transparent shadow-none text-white text-large pb-2 mb-0 mt-5">
                        Popular recipes
                      </Card>
                      <Card className="bg-transparent shadow-none flex flex-row overflow-x gap-5 flex-wrap justify-center sm:justify-start mt-1">
                        {
                          availableRecipes?.map((recipe:RecipeType) => 
                          <Link key={recipe._id}  to={`/recipe/${recipe._id}/show`}>
                             <RecipePreviewCard recipe={recipe} />
                          </Link>
                          )
                        }
                    
                      </Card>
                    </div>

          <div>
            <Card className="bg-transparent shadow-none text-white text-large pb-2 mb-0 mt-5">
              Find something to eat
            </Card>
            <Card className="bg-transparent shadow-none flex flex-row overflow-x gap-5 flex-wrap justify-center sm:justify-start mt-1">
              <RecipeCategoryCard />
              <RecipeCategoryCard />
              <RecipeCategoryCard />
              <RecipeCategoryCard />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
