import HomeButton from "./Buttons/Home";
import CameraButton from "./Buttons/Recipe";
import ActivityButton from "./Buttons/Activity";
import ProfileButton from "./Buttons/Profile";
import SearchButton from "./Buttons/Search";
import { FaBowlFood } from "react-icons/fa6";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Link, useLocation } from "react-router-dom";
import Recipe from "./Buttons/Recipe";
import { Card } from "@nextui-org/react";

export default function () {
    let fillColor = "#fb3f3fd4";
    const { pathname: path } = useLocation();

    return (
        <>

        
            <Tabs
                key="sm"
                radius="sm"
                aria-label="Tabs radius"
                selectedKey={path}
                className="rounded-sm hidden md:flex"
                classNames={{
                    tabList:
                        "flex flex-col top-0 w-[400px] gap-6 w-full relative rounded-none p-0 border-b border-divider h-[300px] p-2 rounded-sm flex p-1 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-default-100/70 rounded-large mx-2 z-20 dark",
                    tab: "max-w p-4 h-20 flex align-center justify-center ",
                    tabContent: "w-full h-full flex justify-center items-center",
                    base: " mb-4 mt-2 w-[300px]",
                }}
                id="mobile_navbar"
            >
                <Tab
                    key="/dashboard"
                    className="flex items-center"
                    title={
                        <>
                            <HomeButton
                                href="/dashboard"
                                fillColor={path.includes("dashboard") ? fillColor : "white"}
                            />
                            <Card className="p-2 align-start p-2 bg-transparent shadow-none">Dashboard</Card>
                        </>
                    }
                />
                <Tab
                    key="/activity"
                    className="flex items-center"
                    title={
                        <>
                            <ActivityButton
                                href="/activity"
                                fillColor={path.includes("activity") ? fillColor : "white"}
                            />
                            <Card className="px-4 py-2 align-start px-4 py-2 bg-transparent shadow-none">Activity</Card>
                        </>

                    }
                />
                {/* <Tab
          key="/search"
          className="flex items-center"
          title={
            <SearchButton
              href="/search"
              fillColor={path.includes("search") ? fillColor : "white"}
            />
          }
        /> */}
                <Tab
                    key="/recipe"
                    className="flex items-center"
                    title={
                        <>

                            <Recipe
                                href="/recipe"
                                fillColor={path.includes("recipe") ? fillColor : "white"}
                            />
                            <Card className="px-4 py-2 align-start px-4 py-2 bg-transparent shadow-none">
                                Recipes
                            </Card>
                        </>

                    }
                />
                <Tab
                    key="/profile"
                    className="flex items-center"
                    title={
                        <>


                            <ProfileButton
                                href="/profile"
                                fillColor={path.includes("profile") ? fillColor : "white"}
                            />

                            <Card className="px-4 py-2 align-start px-4 py-2 bg-transparent shadow-none">Profile</Card>
                        </>

                    }
                />{" "}
            </Tabs>
        </>
    );
}
