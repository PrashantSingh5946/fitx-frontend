import styles from "./style.module.css";
import { Card } from "@nextui-org/card";

export default function MobileHeader() {
  return (
    <Card className="left-0 w-full h-16 justify-between items-center z-50 w-screen flex flex-row p-5 dark text-white rounded-none mb-2">
      <span className="text-md font-medium ">Welcome Back, User</span>
      <svg
        className="h-6 w-6 text-gray-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 0 18 14.595V10a6 6 0 0 0-6-6h-4l-1-1H8m5 3v7m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
        />
      </svg>
    </Card>
  );
}
