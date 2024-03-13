import styles from "./styles.module.css";
import { ApexOptions } from "apexcharts";
import { Skeleton, Card } from "@nextui-org/react";
import { useEffect, useState } from "react";

import ApexChart from "react-apexcharts";
import googleFitDataFetcher from "../../../lib/HeartDataFetcher";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import axios from "axios";
import { refreshAccessToken } from "../../../lib/helpers";
import { login } from "../../../app/features/auth/authSlice";

export default function HeartRateWidget() {
  const [data, setData] = useState([{ x: "", y: 0 }]);
  let accessToken = useAppSelector((state) => state.auth.accessToken);
  let refreshToken = useAppSelector((state) => state.auth.refreshToken);

  let dispatch = useAppDispatch();

  const [average, setAverage] = useState("-");

  let API_URL = process.env.REACT_APP_API_URL;
  let url = API_URL + "/auth/google";

  useEffect(() => {
    let filteredData = data.filter((value) => value.y && value.y != 0);
    filteredData.length != 0 &&
      setAverage(
        (
          filteredData.reduce(
            (collector, current) => collector + current.y,
            0
          ) / filteredData.length
        )
          .toFixed(0)
          .toString() + " BPM"
      );
  }, [data]);

  const fetchData = async () => {
    if (accessToken) {
      try {
        let data = await googleFitDataFetcher(accessToken);
        setData(data);
      } catch (err: any) {
        if (err.message.indexOf("Request failed with status code 401") != -1) {
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
  };

  useEffect(() => {
    fetchData();
  }, [accessToken]);

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
      axisBorder: {
        show: false,
      },
      labels: {
        format: "HH/mm",
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
  border: none;">${data.y} BPM</div>`;
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
      name: "Heart Rate",
      data: data,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <span>Heart Rate</span>
        <span className={styles.heart_rate}>{average}</span>
      </div>

      <div className={styles.graph}>
        <ApexChart
          options={options}
          series={series}
          type="area"
          height={160}
          width={"500px"}
        />
      </div>
    </div>
  );
}
