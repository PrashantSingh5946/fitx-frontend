/* eslint-disable import/no-anonymous-default-export */
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaPlus } from "react-icons/fa6";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
// import Recipe from "../../components/ui/NavBar/Buttons/Recipe";
import RecipeForm from "../../components/recipe/RecipeForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function () {
  const userEmail = useAppSelector((state) => state.auth.email);
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [nutritionalPreference, setNutritionalPreferences] = useState("");
  const [dietaryPreferences, setDietaryPreferences] = useState("vegetarian");
  const [allergies, setAllergies] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [recipes, setRecipes] = useState<any>([]);
  const [query, setQuery] = useState<string>("");

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
        user_email: userEmail,
      },
      data: payload,
    };

    setIsloading(true);
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        navigate(`/recipe/${response.data}`);
      })
      .catch((error) => {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        onClose();
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:3001/recipe/all",
          headers: {
            "Content-Type": "application/json",
            user_email: userEmail,
          },
        };

        const { data } = await axios.request(config);

        setRecipes(data);
      } catch (error) {
        console.log("Error getting recipes", error);
      }
    };

    fetchRecipes();
  }, [userEmail]);

  return (
    <>
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
          <Card className="mt-6">
            <Input
              classNames={{
                base: "max-w-full h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search..."
              size="sm"
              type="search"
              startContent={<FaSearch />}
              value={query}
              onValueChange={setQuery}
            />
          </Card>
        </div>
        <div className="mt-32">
          {recipes.length !== 0 ? (
            <div className="overflow-y bg-transparent">
              {recipes.map((dataItem: any, index: number) => (
                <Card
                  key={dataItem._id}
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
                    <div
                      className="flex items-center flex-row"
                      onClick={() => navigate(`/recipe/${dataItem._id}`)}
                    >
                      <div
                        className="rounded dark h-100"
                        style={{
                          height: "150px",
                          aspectRatio: 1,
                          padding: "10px",
                        }}
                      >
                        <Image
                          alt="Food cover"
                          className="object-cover"
                          width={"auto"}
                          shadow="md"
                          src={dataItem.thumbnail_url}
                        />
                      </div>

                      <div className="flex flex-col mx-2">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-0">
                            <h3 className="font-semibold text-foreground/90 text-white">
                              {dataItem.name}
                            </h3>
                            <p className="text-small text-foreground/80 text-white">
                              {dataItem.description.slice(0, 101)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center text-xl text-gray-500 italic h-[80vh] text-center">
              <p>
                Your recipe list is empty. Click the '+' to generate a new one!
              </p>
            </div>
          )}
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent
            className="bg-slate-950 top-0"
            style={{
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
                  <RecipeForm
                    name={name}
                    setName={setName}
                    dietaryPreferences={dietaryPreferences}
                    setDietaryPreferences={setDietaryPreferences}
                    allergies={allergies}
                    setAllergies={setAllergies}
                    nutritionalPreference={nutritionalPreference}
                    setNutritionalPreferences={setNutritionalPreferences}
                    isLoading={isLoading}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={GenerateRecipe}>
                    Generate
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <div className="fixed bottom-16 right-5">
          <Button onPress={onOpen}>
            <FaPlus className="w-10 h-10" />
          </Button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
