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
  CardHeader,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
    <div className="flex flex-col gap-4  w-[100vw] h-[100vh] overflow-y-scroll">
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

      <section className="m-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent">
          <div className=" flex items-center justify-center bg-transparent">
            <Card
              className="flex items-center justify-center w-100 bg-stone-600/60 shadow-none text-white font-md "
              style={{ width: "100%", height: "100%" }}
            >
              <CardBody className="text-2xl justify-center p-10 bg-transparent">
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
              <CardFooter className="justify-center items-center before:bg-white/10 border-white/20 border-1 py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small ml-1 z-10">


                <Link to={"/login"} className="text-2xl">
                  <Button
                    className="text-large text-white bg-black/20 w-[100px]"
                    variant="flat"
                    color="primary"
                    radius="lg"
                    size="lg"
                  >Join Us </Button>
                  
                </Link>


              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="m-4">
        <Card className="w-100 min-h-[400px] bg-stone-700/80 justify-center items-center p-4 text-white">
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


      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="20px" style={{ padding: "20px" }}>
          <Card className="p-4 bg-transparent text-white bg-stone-600/60">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
              <p className="text-4xl mb-4">Personalized Workouts</p>
              <p className="text-default-500 text-white"> Our AI algorithms analyze your fitness level, health data, dietary
                preferences, and goals to provide customized workout plans and
                meal suggestions that align with your objectives.</p>

            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={cyclingImg}

              />
            </CardBody>


          </Card>

          <Card className="p-4 bg-transparent text-white bg-stone-600/60">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
              <p className="text-4xl mb-4">Track Progress</p>
              <p className="text-default-500 text-white">  Easily monitor your progress and achievements with intuitive
                tracking features. Keep tabs on your workouts, diet adherence, and
                overall health metrics to stay motivated and accountable on your
                journey</p>

            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={squatImg}

              />
            </CardBody>


          </Card>

          <Card className="p-4 bg-transparent text-white bg-stone-600/60">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
              <p className="text-4xl mb-4">Connect</p>
              <p className="text-default-500 text-white"> Connect with a community of like-minded individuals who share your
                passion for health and fitness. Share your successes, seek advice,
                and celebrate milestones together in a supportive and encouraging
                environment</p>

            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={yogaImg}

              />
            </CardBody>




          </Card>

          <Card className="p-4 bg-transparent text-white bg-stone-600/60">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
              <p className="text-4xl mb-4">Benefit from experiences</p>
              <p className="text-default-500 text-white">  Benefit from people's experiences who went on a fat loss journey
                and are now living a healthier lifestyle.</p>

            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={runningImg}

              />
            </CardBody>


          </Card>

          <Card className="dark p-6 bg-stone-600/60">
            {" "}
            <Image
              alt="Man eating healthy food"
              className="object-cover"
              src={dietImage2}
            />
          </Card>

          <Card className="dark p-6 bg-stone-600/60">
            <CardHeader className="text-4xl p-2">Personalized Diets</CardHeader>
            <CardBody className="bg-transparent text-small p-4">
              <p className="mb-6">
                Discover personalized nutrition with FITX.
                Tailored to your needs and goals, our customized diet plans
                optimize your health journey. Say goodbye to generic diets and
                hello to a personalized approach. Start today for a healthier
                tomorrow!
              </p>
              <Image
                alt="Woman eating healthy food"
                className="object-cover my-4 mx-2"
                src={dietImage}
              />
            </CardBody>
          </Card>

        </Masonry>
      </ResponsiveMasonry>



      {/* <section className="bg-transparent p-2 m-4">

        <Card className="p-4 bg-transparent text-white bg-stone-600/60 w-[320px] md:w-[600px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
            <p className="text-4xl mb-4">Personalized Workouts</p>
            <p className="text-default-500 text-white"> Our AI algorithms analyze your fitness level, health data, dietary
              preferences, and goals to provide customized workout plans and
              meal suggestions that align with your objectives.</p>

          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={cyclingImg}
            
            />
          </CardBody>


        </Card>

        <Card className="p-4 bg-transparent text-white bg-stone-600/60 w-[320px] md:w-[600px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
            <p className="text-4xl mb-4">Personalized Workouts</p>
            <p className="text-default-500 text-white"> Our AI algorithms analyze your fitness level, health data, dietary
              preferences, and goals to provide customized workout plans and
              meal suggestions that align with your objectives.</p>

          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={squatImg}
            
            />
          </CardBody>


        </Card>



        <Card className="p-4 bg-transparent text-white bg-stone-600/60 w-[320px] md:w-[600px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
            <p className="text-4xl mb-4">Personalized Workouts</p>
            <p className="text-default-500 text-white"> Our AI algorithms analyze your fitness level, health data, dietary
              preferences, and goals to provide customized workout plans and
              meal suggestions that align with your objectives.</p>

          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={yogaImg}
            
            />
          </CardBody>


        </Card>

        <Card className="p-4 bg-transparent text-white bg-stone-600/60 w-[320px] md:w-[600px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start mb-6">
            <p className="text-4xl mb-4">Personalized Workouts</p>
            <p className="text-default-500 text-white"> Our AI algorithms analyze your fitness level, health data, dietary
              preferences, and goals to provide customized workout plans and
              meal suggestions that align with your objectives.</p>

          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={runningImg}
            
            />
          </CardBody>


        </Card>
      
      </section> */}
      {/* 
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-transparent">
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
      </section> */}



      <section className=" flex justify-center text-xs p-8 mt-5">
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

