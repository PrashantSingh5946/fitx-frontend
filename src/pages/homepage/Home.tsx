import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Image,
  Card,
  CardFooter,
  CardBody,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

import dp from "./images/dp.jpg";

// import "./Home.css";
// import "./nicepage.css";
import dietImage2 from "./images/diet2.jpeg";
import dietImage from "./images/diet.jpeg";

import runningImg from "./images/running.jpeg";
import cyclingImg from "./images/cycling.jpg";
import yogaImg from "./images/yoga.jpeg";
import squatImg from "./images/squat.jpeg";

export default function Home() {
  return (
    <div className="bg-stone-600 flex flex-col gap-4">
      <header className="u-clearfix u-header u-header" id="sec-e29e">
        <Navbar>
          <NavbarBrand>
            <Image
              src="/icons/icon-192x192.png"
              className="u-logo-image u-logo-image-1"
            />
          </NavbarBrand>
        </Navbar>
      </header>

      {/* First Section */}

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent">
          <div className=" flex items-center justify-center bg-transparent">
            <Card
              className="flex items-center justify-center w-100 dark shadow-none text-white font-md "
              style={{ width: "100%", height: "100%" }}
            >
              <CardBody className=" justify-center p-10 bg-transparent">
                At FITX, we're committed to empowering you to live a healthier,
                happier life. Whether you're just starting your fitness journey
                or aiming to reach new heights, we're here to help you every
                step of the way.
              </CardBody>
            </Card>
          </div>
          <div className="bg-tranparent ">
            <Card isFooterBlurred radius="lg" className="border-none w-100">
              <Image alt="Man working out" className="object-cover" src={dp} />
              <CardFooter className="justify-center items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">
                  <Button
                    className="text-tiny text-white bg-black/20 w-[100px]"
                    variant="flat"
                    color="primary"
                    radius="lg"
                    size="lg"
                  >
                    Join Us
                  </Button>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section>
        <Card className="w-100 min-h-[400px] bg-amber-600 justify-center items-center p-4">
          <h2 className="text-8xl mb-7">About FITX</h2>

          <p className="text-xl m-2">
            At FITX, we understand that maintaining a healthy lifestyle can be
            challenging, especially with today's busy schedules and endless
            distractions. That's why we've developed an innovative AI-powered
            platform that leverages the latest advancements in artificial
            intelligence and machine learning to provide personalized fitness
            and diet recommendations tailored to your unique needs and
            preferences.
          </p>
        </Card>
      </section>

      <section className="bg-stone-600 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-transparent">
            <Card isFooterBlurred radius="lg" className="border-none w-100">
              <Image
                alt="People cycling"
                className="object-cover"
                src={cyclingImg}
              />
            </Card>
          </div>
          <div className="bg-transpart">
            <Card isFooterBlurred radius="lg" className="border-none w-100">
              <Image
                alt="Man working out"
                className="object-cover"
                src={squatImg}
              />
            </Card>
          </div>
          <div className="bg-tranparent">
            <Card isFooterBlurred radius="lg" className="border-none w-100">
              <Image
                alt="People running"
                className="object-cover"
                src={runningImg}
              />
            </Card>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-stone-600">
          <Card
            className="w-100 min-h-[400px] bg-amber-600 justify-center items-center p-4 aspect-square text-white"
            style={{
              background:
                "linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))",
            }}
          >
            <h2 className="text-2xl mb-3"> GET PERSONALIZED RECOMMENDATIONS</h2>

            <p className="text-xl m-2">
              Our AI algorithms analyze your fitness level, health data, dietary
              preferences, and goals to provide customized workout plans and
              meal suggestions that align with your objectives.
            </p>
          </Card>
          <Card
            className="w-100 min-h-[400px] bg-amber-600 justify-center items-center p-4 aspect-square text-white"
            style={{
              background:
                "linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))",
            }}
          >
            <h2 className="text-2xl mb-3"> LOSE FAT </h2>

            <p className="text-xl m-2">
              Benefit from people's experiences who went on a fat loss journey
              and are now living a healthier lifestyle.
            </p>
          </Card>{" "}
          <Card
            className="w-100 min-h-[400px] bg-amber-600 justify-center items-center p-4 aspect-square text-white"
            style={{
              background:
                "linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))",
            }}
          >
            <h2 className="text-2xl mb-3"> TRACK YOUR PROGRESS</h2>

            <p className="text-xl m-2">
              Easily monitor your progress and achievements with intuitive
              tracking features. Keep tabs on your workouts, diet adherence, and
              overall health metrics to stay motivated and accountable on your
              journey.
            </p>
          </Card>{" "}
          <Card
            className="w-100 min-h-[400px] bg-amber-600 justify-center items-center p-4 aspect-square text-white"
            style={{
              background:
                "linear-gradient(to right, rgb(255, 153, 102), rgb(255, 94, 98))",
            }}
          >
            <h2 className="text-2xl mb-3"> STAY CONNECTED </h2>

            <p className="text-xl m-2">
              Connect with a community of like-minded individuals who share your
              passion for health and fitness. Share your successes, seek advice,
              and celebrate milestones together in a supportive and encouraging
              environment.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-stone-600">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-600">
          <div className="bg-stone-600">
            <Card className="dark p-6">
              {" "}
              <Image
                alt="Man eating healthy food"
                className="object-cover"
                src={dietImage2}
              />
            </Card>
          </div>
          <div className="bg-stone-600">
            <Card className="dark p-6">
              <CardBody className="bg-transparent">
                Personalised diets Discover personalized nutrition with FITX.
                Tailored to your needs and goals, our customized diet plans
                optimize your health journey. Say goodbye to generic diets and
                hello to a personalized approach. Start today for a healthier
                tomorrow!
                <Image
                  alt="Womna eating healthy food"
                  className="object-cover my-4 mx-2"
                  src={dietImage}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className=" flex justify-center text-xs bg-stone-800 p-8 mt-5">
        <div>
          <p>
            <Link to={"/terms-of-service"}> Terms of Service </Link> |{" "}
            <Link to={"/privacy-policy"}>Privacy Policy </Link>
          </p>
        </div>
        <div>&copy; FITX 2024</div>
      </section>
    </div>
  );
}
