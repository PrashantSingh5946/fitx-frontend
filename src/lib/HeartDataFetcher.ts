import axios from "axios";

export default async function (): Promise<number[]> {
  let data = JSON.stringify({
    aggregateBy: [
      {
        dataTypeName: "com.google.heart_rate.summary",
        dataSourceId:
          "derived:com.google.heart_rate.bpm:com.google.android.gms:merge_heart_rate_bpm",
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
      Authorization:
        "Bearer ya29.a0Ad52N3_Ex8XP9vxmqAhG7VZbVc5dyza7rq-uqPrmWeLX9tbaO-L_k0NUipnPuurAL37dJ9n-5pi4Ka2mYmM2tCWV0DUiXLzvkOG1oYeT12xq-X9ez590sniJnSJmjiXgIlTLDK5jioykYbysP7qRZpPWuuzo5mzKL_vYaCgYKAYcSARMSFQHGX2MiUQFjeVgNJ7QssjiGHMyr4A0171",
    },
    data: data,
  };

  let responseData = [0];

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        let bucket = response.data.bucket;
        // console.log(bucket);
        let rawData = bucket
          .map((minute: any) => minute.dataset[0]?.point[0]?.value[0]?.fpVal)
          .map((heart_rate: any) => (heart_rate ? heart_rate : 0));

        resolve(rawData);
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
}
