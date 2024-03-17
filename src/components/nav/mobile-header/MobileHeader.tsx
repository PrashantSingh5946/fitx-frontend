import {
  Button,
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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../../app/features/auth/authSlice";
import { log } from "console";

export default function MobileHeader() {
  const firstName = useAppSelector((state) => state.auth.firstName);
  const lastName = useAppSelector((state) => state.auth.lastName);

  const pictureUrl =
    useAppSelector((state) => state.auth.picture) ?? "/assets/user.png";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const logoutUser = () => {
    googleLogout();
    dispatch(logout());
  };

  return (
    <Card
      className="left-0 w-full h-16 justify-between items-center z-50 w-screen flex flex-row p-5 dark text-white rounded-none mb-2 p-3"
      style={{ background: "none" }}
    >
      <User
        name={"WELCOME BACK"}
        description={firstName?.toUpperCase() + " " + lastName?.toUpperCase()}
        avatarProps={{
          src: pictureUrl,
        }}
        onClick={() => setIsModalOpen(true)}
      />

      <Modal isOpen={isModalOpen}>
        <ModalContent>
          <Button
            onClick={() => {
              logoutUser();
            }}
          >
            Logout
          </Button>
        </ModalContent>
      </Modal>
    </Card>
  );
}
