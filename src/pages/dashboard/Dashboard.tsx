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
      className="flex flex-col items-center pt-10 mx-auto w-full  bg-black rounded-[40px] pb-5 mt-5"
      style={{
        background:
          "linear-gradient(274.42deg, rgba(96, 106, 153, 0.2) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
      }}
    >

      {/* Convert this to a responsive tailwind layout */}
      <MobileHeader/>


      <div className="flex flex-row gap-4 flex-wrap justify-center content-center p-4">

    
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
