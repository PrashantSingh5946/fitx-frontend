import { Outlet, useNavigate } from "react-router-dom";
import MobileHeader from "../components/nav/mobile-header/MobileHeader";
import Navbar from "../components/ui/NavBar/NavBar";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { Card } from "@nextui-org/react";
import { BackgroundGradientAnimation } from "../components/ui/BackgroundGradientAnimation";

export const ProtectedLayout = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const redirect = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      redirect("/login");
    }
  }, [isLoggedIn]);

  return (
    <BackgroundGradientAnimation>
      <Card className="bg-transparent z-10 h-screen w-screen flex flex-col">
        {/* <MobileHeader /> */}
        <div
          className="bg-transparent w-screen"
          style={{ flexGrow: 1, overflowY: "auto" }}
        >
          <Outlet />
        </div>
        <Navbar />
      </Card>
    </BackgroundGradientAnimation>
  );
};
