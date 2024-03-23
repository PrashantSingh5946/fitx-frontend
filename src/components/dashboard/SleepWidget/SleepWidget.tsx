import * as React from "react";
import fetchSleepData from "../../../lib/SleepDataFetcher";
import { access, stat } from "fs";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { login } from "../../../app/features/auth/authSlice";
import { setHealthData } from "../../../app/features/health/healthSlice";

export default function SleepTracker() {
  let accessToken = useAppSelector((state) => state.auth.accessToken);
  let dispatch = useAppDispatch();

  const {data, fetchTimeInMillis} = useAppSelector((state) => state.health.sleep);

  const setData = (payload: { hours: number, minutes: number }) => {

    dispatch(
      setHealthData({
        sleep: { data: payload, fetchTimeInMillis: new Date().getTime() },
      })
    );
  }
  //const [data, setData] = React.useState({ hours: 0, minutes: 0 });

  React.useEffect(() => {
    async function fetchData() {

      if((new Date().getTime() - fetchTimeInMillis > 60000))
      {

        console.log(new Date().getTime() - fetchTimeInMillis);
        if (accessToken) {
          try {
            const data = await fetchSleepData(accessToken);
            console.log("Sleep data");
            console.log(data);
            setData(data);
          } catch (err) {}
        }
      }
   
    }

    fetchData();
  }, [accessToken]);

  return (
    <div style={{
      backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/81ad1a591383edb1ca6cf6aaba225e6ad2a5d5b1c01773640e89c9f4766e3fd5?apiKey=2471e6abba594059a1b1e2ce6032627e&')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>

   
    <div
      className="flex flex-col w-[90vw] justify-center font-medium min-w-[320px] h-[180px] md:w-[600px] rounded-lg "
      style={{
        background:
          "linear-gradient(274.42deg, #92a4fd3f 0%, #9dceff3f 124.45%)",
          overflow: "hidden",
          
        
      }}
    >
      <div className="flex overflow-hidden relative flex-col p-4 pt-4 md:p-8 w-full bg-black/20 w-[100%] h-[100%] dark" >
        <div className="relative md:font-semibold leading-5 text-white">Sleep</div>
        <div
          className="relative mt-3 text-lg leading-5 bg-clip-text bg-black/80 text-white "
          style={{ zIndex: 11, color: "#92a3fd" }}
        >
          {data.hours !=null  ? (
            <>
              <span className="font-semibold">{data.hours}</span>
              <span className="text-xs font-semibold">h</span>{" "}
            </>
          ) : (
            "-"
          )}

          {data.minutes!=null ? (
            <>
              <span className="font-semibold">{data.minutes}</span>
              <span className="text-xs font-semibold">m</span>
            </>
          ) : (
            ""
          )}
        </div>
       
      </div>
    </div>
    </div>
  );
}
