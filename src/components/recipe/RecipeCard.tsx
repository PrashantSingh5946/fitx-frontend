import { Button, Card, CardBody, Image } from "@nextui-org/react";

interface Recipe {
  name: string;
  ingredients: [string];
  description: string;
  instructions: [string];
  macros_per_100g: [number];
  calories: number;
  dietary_restrictions: [string];
  allergy_warning: string;
}
export default function (props: any) {
  let {
    name,
    ingredients,
    description,
    instructions,
    macros_per_100g,
    calories,
    dietary_restrictions,
    allergy_warning,
  } = props?.dataItem;
  return (
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
                <h3 className="font-semibold text-foreground/90">{name}</h3>
                <p className="text-small text-foreground/80">{description}</p>
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
