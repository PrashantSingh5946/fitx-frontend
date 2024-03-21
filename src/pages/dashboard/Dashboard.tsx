import React, { useEffect, useState } from "react";
import BMIWidget from "../../components/dashboard/bmi-widget/BMIWidget";
import MobileHeader from "../../components/nav/mobile-header/MobileHeader";
import styles from "./styles.module.css";
import TargetsWidget from "../../components/dashboard/TargetsWidget/TargetsWidget";
import HeartRateWidget from "../../components/dashboard/HeartRateWidget/HeartRateWidget";
import StepsWidget from "../../components/dashboard/StepsWidget/StepsWidget";
import WaterIntakeTracker from "../../components/dashboard/WaterIntakeWidget.tsx";
import SleepTracker from "../../components/dashboard/SleepWidget/SleepWidget";
import { Card, User } from "@nextui-org/react";
export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(process.env.REACT_APP_API_URL);

  return (
    <div
      className="p-4 flex flex-col items-center"
      style={{ height: "inherit"}}
    >
 <MobileHeader />
      {/* Convert this to a responsive tailwind layout */}

      <div className="flex flex-row gap-4 flex-wrap justify-center sm:justify-start">

      
     
      <BMIWidget />
      {/* <TargetsWidget /> */}
      <HeartRateWidget />
      <StepsWidget />
      {/* <WaterIntakeTracker /> */}
      <SleepTracker />
      </div>

    
    </div>
  );
}
