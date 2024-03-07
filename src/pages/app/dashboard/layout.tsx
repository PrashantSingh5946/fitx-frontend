"use client";

import MobileHeader from "../../../components/nav/mobile-header/MobileHeader";
import Navbar from "../../../components/nav/mobile-header/MobileHeader";
import styles from "./styles.module.css";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="screen flex flex-col flex-auto  max-h-screen overflow-scroll">
      <MobileHeader />

      {children}

      <Navbar />
    </div>
  );
}
