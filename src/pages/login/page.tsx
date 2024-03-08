import { GoogleLogin } from "@react-oauth/google";
import { decodeLoginCredential } from "../../lib/helpers";
import { login } from "../../app/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function () {
  const dispatch = useAppDispatch();
  const handleLogin = (loginCredential: string | undefined) => {
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

      dispatch(login(payload));
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
