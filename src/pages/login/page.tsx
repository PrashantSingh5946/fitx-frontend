import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { decodeLoginCredential } from "../../lib/helpers";
import { login } from "../../app/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function () {
  const [shouldAuthorise, startAuthorisation] = useState(false);
  const dispatch = useAppDispatch();
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const tokens = await axios.post("http://localhost:3001/auth/google", {
        code: codeResponse.code,
      });

      console.log(tokens);
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
        };

        //Complete the authorisation procedure

        googleLogin();

        dispatch(login(payload));
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
