// import axios from "axios";
// import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { rejects } from "assert";

// export default async function (accessToken: string): Promise<[]> {
//   let data = {
//     startTimeMillis: new Date().getTime() - 24 * 60 * 60 * 1000,
//     endTimeMillis: new Date().getTime(),
//   };

//   let responseData = [0];

//   const url = `https://www.googleapis.com/fitness/v1/users/me/sessions?startTime=${data.startTimeMillis}&endTime=${data.endTimeMillis}&activityType=72`;

//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     }).then((response) => {
//       if (response.ok) {
//         const data = response.json();
//         console.log(data);
//         resolve(data);
//       } else {
//         console.error(
//           "Failed to fetch sleep data:",
//           response.status,
//           response.statusText
//         );
//         reject();
//       }
//     });
//   });
// }

import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function convertNanosecondsToHoursAndMinutes(nanoseconds: number) {
  // Convert nanoseconds to milliseconds
  const milliseconds = nanoseconds / 1e6;

  // Convert milliseconds to hours and minutes
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

  return { hours, minutes };
}

export default async function (
  accessToken: string
): Promise<{ hours: number; minutes: number }> {
  let data = JSON.stringify({
    aggregateBy: [
      {
        dataTypeName: "com.google.sleep.segment",
      },
    ],
    // bucketByTime: {
    //   durationMillis: 300000,
    // },
    startTimeMillis: new Date().getTime() - 2 * 24 * 60 * 60 * 1000,
    endTimeMillis: new Date().getTime(),
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    data: data,
  };

  let responseData = [0];

  interface SleepAmountType {
    hours: number;
    minutes: number;
  }

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        let points = response.data?.bucket[0].dataset[0].point;
        let pointsData = points.map(
          (point: {
            endTimeNanos: number;
            startTimeNanos: number;
            value: { intVal: any }[];
          }) => {
            return {
              duration: point.endTimeNanos - point.startTimeNanos,
              sleepType: point.value[0].intVal,
            };
          }
        );

        let totalSleep = pointsData.reduce(
          (
            currentVal: number,
            dataItem: {
              duration: number;
            }
          ) => currentVal + dataItem.duration,
          0
        );

        let sleepAmount = convertNanosecondsToHoursAndMinutes(totalSleep);

        console.log(sleepAmount);

        resolve(sleepAmount);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
