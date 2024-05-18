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
import { Button, Card, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilled";

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

  const [loginCredential, setLoginCredential] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

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
          goals: [...decodedCredential.goals],
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
            } else if (response.data.shouldAuthorise) {
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

  const currentAuthState = useAppSelector((state) => state.auth);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const startLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      const credential = response.data.credential;
      const decodedCredential = decodeLoginCredential(credential);

      console.log(decodedCredential);

      const payload = {
        isLoggedIn: true,
        email: decodedCredential.email,
        emailVerified: decodedCredential.email_verified,
        firstName: decodedCredential.firstName,
        lastName: decodedCredential.lastName,
        picture: "",
        credential: credential,
        accessToken: decodedCredential.accessToken,
        refreshToken: decodedCredential.refreshToken,
        goals: decodedCredential.goals,
      };

      fetchGoogleProfilePicture(decodedCredential.access_token).then(
        (picture) => {
          dispatch(login({ ...currentAuthState, picture: picture }));
        }
      );
      // setPayload({
      //   ...payload,
      //   picture,
      // });

      dispatch(
        login({
          ...payload,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      redirect("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <Card className="w-[100vw] h-[100vh] flex justify-center items-center bg-transparent z-10">
      <Card className="w-[400px] h-[400px] flex justify-center items-center bg-neutral-600/40 gap-5">
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

        <hr className="w-[90%] border-1 border-neutral-500/50" />
        <div className="w-[90%] dark shadow-none flex justify-center items-center">
          <Card className="bg-transparent flex flex-col p-2 gap-3 w-[100%] shadow-none justify-center items-center">
            <Input
              isClearable
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Enter your email"
              value={loginCredential.email}
              onChange={(e) => {
                setLoginCredential({
                  ...loginCredential,
                  email: e.target.value,
                });
              }}
              onClear={() => console.log("input cleared")}
              className="max-w-xs"
            />

            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              // ...

              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs"
              onChange={(e) => {
                setLoginCredential({
                  ...loginCredential,
                  password: e.target.value,
                });
              }}
            />
            <Button
              className="max-w-xs mt-5"
              onClick={() => {
                startLogin(loginCredential.email, loginCredential.password);
              }}
              style={{
                background:
                  "linear-gradient(274.42deg, rgb(255 52 48) 0%, rgb(109 182 255) 124.45%)",
              }}
            >
              Login
            </Button>
          </Card>
        </div>
      </Card>
    </Card>
  );
}
