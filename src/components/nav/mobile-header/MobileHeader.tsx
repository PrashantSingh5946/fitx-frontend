import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  User,
  useDisclosure,
} from "@nextui-org/react";
import styles from "./style.module.css";
import { Card } from "@nextui-org/card";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import userImage from "../../../../public/assets/user.png";
import { googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../../app/features/auth/authSlice";
import { log } from "console";
import { fetchGoogleProfilePicture } from "../../../lib/helpers";

export default function MobileHeader() {
  const firstName = useAppSelector((state) => state.auth.firstName);
  const lastName = useAppSelector((state) => state.auth.lastName);
  const access_token = useAppSelector((state) => state.auth.accessToken);

  const pictureUrl =
    useAppSelector((state) => state.auth.picture) ?? "/assets/user.png";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const logoutUser = () => {
    googleLogout();
    dispatch(logout());
  };

  useEffect(() => {
    const fetchPic = async () => {
      if (access_token) {
        let picture = await fetchGoogleProfilePicture(access_token);
        dispatch(login({ picture: picture }));
      }
    };

    fetchPic();
  }, [access_token]);

  return (
    <Card
        style={{ background: "none" }}
        className=" mt-2 my-5 flex justify-center items-center p-4 min-h-[100px]"
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
  );
}
