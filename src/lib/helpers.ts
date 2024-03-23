import axios from "axios";

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
      "refreshToken": refreshToken,
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
        "token": credential,
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
