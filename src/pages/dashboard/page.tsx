import React, { useEffect, useState } from "react";
import BMIWidget from "../../components/dashboard/bmi-widget/BMIWidget";
import MobileHeader from "../../components/nav/mobile-header/MobileHeader";
import styles from "./styles.module.css";
import TargetsWidget from "../../components/dashboard/TargetsWidget/TargetsWidget";
import HeartRateWidget from "../../components/dashboard/HeartRateWidget/HeartRateWidget";
import StepsWidget from "../../components/dashboard/StepsWidget/StepsWidget";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden p-2 overflow-y-scroll">
      <BMIWidget />
      <TargetsWidget />

      <HeartRateWidget />

      <StepsWidget />
    </div>
  );
}
