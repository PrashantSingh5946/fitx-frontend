import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { decodeLoginCredential } from "../../lib/helpers";
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
  });
  const dispatch = useAppDispatch();

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const { access_token } = (
        await axios.post("http://localhost:3001/auth/google", {
          code: codeResponse.code,
        })
      ).data;

      console.log(access_token);

      setPayload({ ...payload, accessToken: access_token });
      dispatch(login({ ...payload, accessToken: access_token }));
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
        };

        setPayload(payload);

        //Complete the authorisation procedure

        googleLogin();
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
