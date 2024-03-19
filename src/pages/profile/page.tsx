import { Button, Card, Image, Switch } from "@nextui-org/react";
import { googleLogout } from "@react-oauth/google";
import * as React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../app/features/auth/authSlice";
import { useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { fetchGoogleProfilePicture } from "../../lib/helpers";

export default function Profile() {
  const dispatch = useDispatch();

  //Fetcing profile picture
  const pictureUrl =
    useAppSelector((state) => state.auth.picture) ?? "/assets/user.png";
  const { accessToken, firstName, lastName } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const fetchPic = async () => {
      if (accessToken) {
        let picture = await fetchGoogleProfilePicture(accessToken);
        dispatch(login({ picture: picture }));
      }
    };

    fetchPic();
  }, [accessToken]);

  const logoutUser = () => {
    googleLogout();
    dispatch(logout());
  };

  return (
    <div
      className="flex flex-col items-center pt-10 mx-auto w-full bg-black max-w-[480px] rounded-[40px] pb-5 mt-5"
      style={{
        background:
          "linear-gradient(274.42deg, rgba(96, 106, 153, 0.2) 0%, rgba(49, 69, 88, 0.82) 124.45%)",
      }}
    >
      <div className="flex gap-5 justify-between px-5 w-full text-base font-bold leading-6 text-white whitespace-nowrap max-w-[315px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e4b5c64979f7b79b1d2be80b885f9ad03ed4723e1a1f2835d21945d29ba888b?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="shrink-0 w-8 aspect-square"
        />
        <div className="my-auto">Profile</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a6fbc5223c59f105bbf3ea19b0d0860de5c6961f1c8ff64f71a5d789034b87?apiKey=2471e6abba594059a1b1e2ce6032627e&"
          className="shrink-0 w-8 aspect-square"
        />
      </div>
      <Card
        style={{ background: "none" }}
        className="w-100 mt-2 my-5 flex justify-center items-center p-4"
      >
        <div className="flex gap-5 justify-between w-full leading-[150%] max-w-[315px]">
          <div className="flex gap-4 dark">
            <Image
              src={pictureUrl}
              width={55}
              height={55}
              className="shrink-0 aspect-square dark "
              isZoomed
            />
            <div className="flex flex-col flex-1 px-5 my-auto">
              <div className="text-base text-white">
                {firstName + " " + lastName}
              </div>
              <div className="mt-1 text-xs whitespace-nowrap text-white/70">
                Genesis Program
              </div>
            </div>
          </div>
          <Button
            className="text-white self-center"
            size="sm"
            style={{ background: "#FF6767" }}
          >
            Edit
          </Button>
        </div>
      </Card>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/adb56bc26cfae7cd16320bada69208714591589b9931039655794003c3e141a6?apiKey=2471e6abba594059a1b1e2ce6032627e&"
        className="mt-4 aspect-[4.76] max-w-[315px] w-[315px]"
      />

      {/* Accounts Tab */}
      <div
        className="flex gap-5 justify-between px-5 py-6 mt-8 w-full rounded-2xl shadow-2xl bg-neutral-600/40 max-w-[315px]"
        style={{
          borderRadius: "10px",
        }}
      >
        <div className="flex flex-col text-xs leading-5 text-white whitespace-nowrap">
          <div className="text-base font-semibold">Account</div>
          <div className="flex gap-5 mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d6bb39144571262bd58efc24df2ed7160ff8c0d5de12bc9ba90a87d54e3547a?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="grow my-auto">Personal Data</div>
          </div>
          <div className="flex gap-2.5 mt-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/480778c1b436531ab8564fe4c3de635ab980c126f3d60099283843c63faf304d?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="grow my-auto">Achievement</div>
          </div>
          <div className="flex gap-2.5 mt-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac7f544ea61d82d35c174a60e9b361f93af0e551377aa6ce6835adf019bd5c74?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="grow my-auto">Activity History</div>
          </div>
          <div className="flex gap-2.5 mt-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5fb3ebacdc4b9f83ef72b3ce9727fe3433a4adb6510e4588d805f991c75855f?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="grow my-auto">Workout Progress</div>
          </div>
        </div>
        <div className="flex flex-col items-center self-end mt-8">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3075b9516a1d074ebe35916a1ef552f21afb22f357abfd660d411377a508?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            className="aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3075b9516a1d074ebe35916a1ef552f21afb22f357abfd660d411377a508?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            className="mt-3 aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3075b9516a1d074ebe35916a1ef552f21afb22f357abfd660d411377a508?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            className="mt-3 aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3075b9516a1d074ebe35916a1ef552f21afb22f357abfd660d411377a508?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            className="mt-3 aspect-square w-[18px]"
          />
        </div>
      </div>

      <div
        style={{
          borderRadius: "10px",
        }}
        className="flex gap-2 justify-between p-6 mt-4 w-full text-white whitespace-nowrap rounded-2xl shadow-2xl bg-neutral-600/40 leading-[150%] max-w-[315px]"
      >
        <div className="flex flex-col w-full">
          <div className="text-base font-semibold">Notifications</div>
          <div className="flex gap-2.5 mt-1 text-xs space-between">
            <div className="grow my-auto">Pop-up Notification</div>
            <Switch defaultSelected color="success" size="sm" />
          </div>
        </div>
      </div>
      <div
        style={{
          borderRadius: "10px",
        }}
        className="flex gap-5 justify-between p-5 mt-4 w-full rounded-2xl shadow-2xl bg-neutral-600/40 max-w-[315px]"
      >
        <div className="flex flex-col text-xs leading-5 text-white">
          <div className="text-base font-semibold">Other</div>
          <div className="flex gap-2.5 mt-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3dddb204077686acd3c54ab8e44beb37595e67124ad79f403c32d3928de61d?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="my-auto">Contact Us</div>
          </div>
          <div className="flex gap-2.5 mt-2.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e46556e8df8c16881ac3ff437bdab06f396bbb45c40de78028e37c0fb7e62218?apiKey=2471e6abba594059a1b1e2ce6032627e&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="my-auto">Settings</div>
          </div>
        </div>
        <div className="flex flex-col items-center self-end mt-9">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3075b9516a1d074ebe35916a1ef552f21afb22f357abfd660d411377a508?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            className="aspect-square w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3075b9516a1d074ebe35916a1ef552f21afb22f357abfd660d411377a508?apiKey=2471e6abba594059a1b1e2ce6032627e&"
            className="mt-3 aspect-square w-[18px]"
          />
        </div>
      </div>

      <div>
        <Button
          className="m-5"
          onClick={() => {
            logoutUser();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
