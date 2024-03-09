import { Outlet, useNavigate } from "react-router-dom";
import MobileHeader from "../components/nav/mobile-header/MobileHeader";
import Navbar from "../components/ui/NavBar/NavBar";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { Card } from "@nextui-org/react";

export const ProtectedLayout = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const redirect = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      redirect("/login");
    }
  }, [isLoggedIn]);

  return (
    <Card className="bg-transparent" style={{ paddingTop: "30px" }}>
      {/* <MobileHeader /> */}
      <Outlet />
      <Navbar />
    </Card>
  );
};
