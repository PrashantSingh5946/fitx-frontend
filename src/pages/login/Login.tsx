import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import {
  decodeLoginCredential,
  fetchGoogleProfilePicture,
  fetchUserExists,
} from "../../lib/helpers";
import { login } from "../../app/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [payload, setPayload] = useState({
    isLoggedIn: false,
    email: "",
    emailVerified: false,
    firstName: "",
    lastName: "",
    picture: "",
    credential: "",
    accessToken: "",
    refreshToken: "",
  });
  const dispatch = useAppDispatch();

  let API_URL = process.env.REACT_APP_API_URL;

  const googleAuthorise = useGoogleLogin({
    flow: "auth-code",
    scope:
      "https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.heart_rate.read https://www.googleapis.com/auth/fitness.sleep.read https://www.googleapis.com/auth/admin.directory.user.readonly https://www.googleapis.com/auth/userinfo.profile",
    onSuccess: async (codeResponse) => {
      let url = API_URL + "/auth/google";

      const data = (
        await axios.post(url, {
          code: codeResponse.code,
        })
      ).data;

      console.log(data);

      let { access_token, id_token, refresh_token } = data;

      let picture = await fetchGoogleProfilePicture(access_token);

      setPayload({
        ...payload,
        accessToken: access_token,
        refreshToken: refresh_token,
        picture: picture,
      });
      dispatch(
        login({
          ...payload,
          accessToken: access_token,
          refreshToken: refresh_token,
          picture: picture,
        })
      );
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const handleLogin = (loginCredential: string | undefined) => {
    try {
      //Complete the sign in procedure
      if (loginCredential) {
        let decodedCredential = decodeLoginCredential(loginCredential);

        const payload = {
          isLoggedIn: true,
          email: decodedCredential.email,
          emailVerified: decodedCredential.email_verified,
          firstName: decodedCredential.given_name,
          lastName: decodedCredential.family_name,
          picture: decodedCredential.picture,
          credential: loginCredential,
          accessToken: "",
          refreshToken: "",
        };

        setPayload(payload);

        //Complete the authorisation procedure

        //Check if the user is already registered

        fetchUserExists(loginCredential).then((response) => {

          if (response.data) {

            console.log("User exists");
            if (response.data.accessToken) {
              //User is registered
              console.log("User is registered");
              payload.accessToken = response.data.accessToken;
              payload.refreshToken = response.data.refreshToken;
              dispatch(login(payload));
            }
            else if(response.data.shouldAuthorise)
            {
              googleAuthorise();
            }

          } else {
           
          }
        });



      }
    } catch (err) {
      console.log(err);
    }
  };

  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const redirect = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      redirect("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Tap credential response", credentialResponse);
          handleLogin(credentialResponse?.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </div>
  );
}
