import { Outlet } from "react-router-dom";
import MobileHeader from "../components/nav/mobile-header/MobileHeader";
import Navbar from "../components/ui/NavBar/NavBar";

export const ProtectedLayout = () => {
  return (
    <>
      <MobileHeader />
      <Outlet />
      <Navbar />
    </>
  );
};
