import HomeButton from "./Buttons/Home";
import CameraButton from "./Buttons/Camera";
import ActivityButton from "./Buttons/Activity";
import ProfileButton from "./Buttons/Profile";
import SearchButton from "./Buttons/Search";
import { FaBowlFood } from "react-icons/fa6";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Link, useLocation } from "react-router-dom";

export default function () {
  let fillColor = "orange";
  const { pathname: path } = useLocation();

  return (
    <>
      <Tabs
        key="sm"
        radius="sm"
        aria-label="Tabs radius"
        selectedKey={path}
        className="rounded-sm"
        classNames={{
          tabList:
            "dark gap-6 w-full relative rounded-none p-0 border-b border-divider h-30 p-2 rounded-sm flex p-1 h-fit gap-2 items-center flex-nowrap overflow-x-scroll scrollbar-hide bg-default-100 rounded-medium bottom fixed bottom-0",
          tab: "max-w px-0 h-12 flex align-center justify-center ",
          tabContent: "w-full h-full flex justify-center items-center",
        }}
      >
        <Tab
          key="/dashboard"
          className="flex items-center"
          title={
            <HomeButton
              href="/dashboard"
              fillColor={path.includes("dashboard") ? fillColor : "white"}
            />
          }
        />
        <Tab
          key="/activity"
          className="flex items-center"
          title={
            <ActivityButton
              href="/activity"
              fillColor={path.includes("activity") ? fillColor : "white"}
            />
          }
        />
        <Tab
          key="/search"
          className="flex items-center"
          title={
            <SearchButton
              href="/search"
              fillColor={path.includes("search") ? fillColor : "white"}
            />
          }
        />
        <Tab
          key="/recipe"
          className="flex items-center"
          title={
            <Link to={"/recipe"}>
              <FaBowlFood
                style={{ height: 20, width: 20 }}
                color={path.includes("recipe") ? fillColor : "white"}
              />
            </Link>
          }
        />
        <Tab
          key="/profile"
          className="flex items-center"
          title={
            <ProfileButton
              href="/profile"
              fillColor={path.includes("profile") ? fillColor : "white"}
            />
          }
        />{" "}
      </Tabs>
    </>
  );
}
