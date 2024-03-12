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
      refreshToken: refreshToken,
    }
  );

  return data;
};
