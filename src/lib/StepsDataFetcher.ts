import axios from "axios";
import { useAppSelector } from "../app/hooks";

export default async function (accessToken: string): Promise<number[]> {
  let data = JSON.stringify({
    aggregateBy: [
      {
        dataTypeName: "com.google.step_count.delta",
        dataSourceId:
          "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
      },
    ],
    bucketByTime: {
      durationMillis: 60000,
    },
    startTimeMillis: new Date().getTime() - 24 * 60 * 60 * 1000,
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
  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        let bucket = response.data.bucket;
        // console.log(bucket);
        let rawData = bucket
          .map(
            (minute: any) =>
              minute.dataset[0]?.point[0]?.value[0]?.intVal &&
              minute.dataset[0]?.point[0]?.value[0]?.intVal
          )
          .map((item: any) => (item ? item : 0));

        resolve(rawData);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
