import styles from "./styles.module.css";
import { ApexOptions } from "apexcharts";
import { Skeleton, Card } from "@nextui-org/react";
import { useEffect, useState } from "react";

import ApexChart from "react-apexcharts";
import googleFitDataFetcher from "../../../lib/HeartDataFetcher";
import { useAppSelector } from "../../../app/hooks";

export default function HeartRateWidget() {
  const [data, setData] = useState([0]);
  let accessToken = useAppSelector((state) => state.auth.accessToken);
  const [average, setAverage] = useState("-");

  useEffect(() => {
    let filteredData = data.filter((value) => value != 0);
    filteredData.length != 0 &&
      setAverage(
        (
          filteredData.reduce((collector, current) => collector + current) /
          filteredData.length
        ).toString() + " BPM"
      );
  }, [data]);

  const fetchData = async () => {
    if (accessToken) {
      let data = await googleFitDataFetcher(accessToken);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
