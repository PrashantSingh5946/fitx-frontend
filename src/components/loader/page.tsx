import { Card } from "@nextui-org/react";
import styles from "./styles.module.css";

export default function Loader() {
  return (
    <Card>
      <image href="/assets/svg/white_logo.svg" style={{ width: "100%" }} />

      <audio src="/assets/audio/startup.wav" autoPlay></audio>
    </Card>
  );
}
