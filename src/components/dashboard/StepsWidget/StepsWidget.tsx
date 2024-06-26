import styles from "./styles.module.css";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import googleFitStepsDataFetcher from "../../../lib/StepsDataFetcher";
import ApexChart from "react-apexcharts";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { refreshAccessToken } from "../../../lib/helpers";
import { login } from "../../../app/features/auth/authSlice";
import { AxiosError } from "axios";
import { setHealthData } from "../../../app/features/health/healthSlice";

export default function StepsWidget() {
  // const [data, setData] = useState([0]);
  const { data, fetchTimeInMillis } = useAppSelector((state) => state.health.stepsData);
  const [total, setTotal] = useState(0);
  const [width, setWidth] = useState(100);

  let accessToken = useAppSelector((state) => state.auth.accessToken);
  let refreshToken = useAppSelector((state) => state.auth.refreshToken);
  let dispatch = useAppDispatch();

  useEffect(() => {
    setTotal(data.reduce((collector, current) => collector + current));
  }, [data]);

  const fetchData = async () => {

    console.log("Fetching steps data after" +  (new Date().getTime() - fetchTimeInMillis))
    if ((new Date().getTime() - fetchTimeInMillis) > 60000) {

     
      if (accessToken) {
        try {
          let data = await googleFitStepsDataFetcher(accessToken);
          setData(data);
        } catch (err: any) {
          console.log(err);
          if (err.response.status == 401) {
            console.log("Refreshing token", refreshToken);

            //Refresh token
            if (refreshToken) {
              try {
                let response = (await refreshAccessToken(refreshToken)).data;
                console.log("Refreshed token", response);
                let accessToken = response.access_token;

                dispatch(
                  login({
                    accessToken: accessToken,
                  })
                );
              } catch (err) {
                console.log("Error refreshing the access token", err);
              }
            }
          }
        }
      }
    }

  };

  useEffect(() => {
    if (accessToken) {
    }
    fetchData();
  }
    , [accessToken]);

  const options: ApexOptions = {
    chart: {
      type: "area",

      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: true, //or just here to disable only x axis grids
        },
      },
      yaxis: {
        lines: {
          show: true, //or just here to disable only y axis
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      type: "numeric",
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
      fill: {
        type: "gradient",

        gradient: {
          type: "horizontal",
          shadeIntensity: 0,
          opacityFrom: 0.4,
          opacityTo: 0.7,

          colorStops: [
            {
              offset: 0,
              color: "#9DCEFF",
              opacity: 0.6,
            },
            {
              offset: 40,
              color: "#F12711",
              opacity: 0.65,
            },
            {
              offset: 80,
              color: "#F12711",
              opacity: 0.7,
            },
          ],
        },
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

        return `<div style="background: linear-gradient(274.42deg, #ffae00 0%, #f12711 124.45%);
  padding: 8px;
  border: none;">${data}</div>`;
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "horizontal",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: "white",
            opacity: 0.5,
          },
          {
            offset: 40,
            color: "#F12711",
            opacity: 0.2,
          },
          {
            offset: 80,
            color: "#F12711",
            opacity: 0.4,
          },
        ],
      },
    },
  };
  const series = [
    {
      name: "Steps Walked",
      data: data,
    },
  ];

  const setData = (payload: number[]) => {
    dispatch(
      setHealthData({
        stepsData: { data: payload, fetchTimeInMillis: new Date().getTime() },
      })
    );
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    if (document.getElementById("heart_widget")) {
      resizeObserver.observe(document.getElementById("heart_widget")!);
    }

  }

  );


  return (
    <div className={styles.container}>
      <div className={styles.headings + " md:font-semibold md:p-4"}>
        <span>Steps</span>
        <span className={styles.heart_rate}>{total}</span>
      </div>

      <div className={styles.graph}>
        <ApexChart
          options={options}
          series={series}
          type="area"
          height={160}
          width={width + 40}
        />
      </div>
    </div>
  );
}
