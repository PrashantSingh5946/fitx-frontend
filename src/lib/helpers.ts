import axios from "axios";
import { access } from "fs";

export const decodeLoginCredential = (token: string) => {
  try {
    let data = JSON.parse(atob(token.split(".")[1]));
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const refreshAccessToken = async (refreshToken: string) => {
  let data = await axios.post(
    process.env.REACT_APP_API_URL + "/auth/google/refresh-token",
    {
      refreshToken: refreshToken,
    }
  );

  return data;
};

//Fetch if the user exists by attaching email into the body of axios request, sent to the api url + auth/user/exists
export const fetchUserExists = async (credential: string) => {
  try {
    let data = await axios.post(
      process.env.REACT_APP_API_URL + "/auth/google/verify",
      {
        token: credential,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchGoogleProfilePicture = async (
  accessToken: string
): Promise<string> => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://www.googleapis.com/userinfo/v2/me",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        let pictureURL = response.data.picture.toString();

        resolve(pictureURL);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

type Goal = {
  _id: string;
  id: string;
  name: string;
  tasks: Task[];
  minTime: number;
  maxTime: number;
};

type Task = {
  id: string;
  activity_type: string;
  time: number;
  frequency?: number;
  quantity?: number;
  goal_id: number;
  //time = frequency * quantity
};

export const fetchAllGoals = async () => {
  const url = process.env.REACT_APP_API_URL + "/activity/goals";
  let response = await fetch(url);
  let data = await response.json();

  console.log(data);
  return data;
};

export const updateGoals = async (data: string[], accessToken: string) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.REACT_APP_API_URL + "/activity/my_goals",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    data: {
      goals: data,
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logActivity = async (
  data: { activity_type: string; amount: number; comments: string },
  accessToken: string
) => {
  console.log("Function", data);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.REACT_APP_API_URL + "/activity/log",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    data: {
      activity: data,
    },
  };

  await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchActivity = async (accessToken: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: process.env.REACT_APP_API_URL + "/activity/my_activities",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .request(config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
