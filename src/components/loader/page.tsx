import styles from "./styles.module.css";
import whiteLogo from "../../public/assets/svg/white_logo.svg";
import blackLogo from "../public/assets/svg/black_logo.svg";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <image href={whiteLogo} style={{ width: "100%" }} />

        <audio src="/assets/audio/startup.wav" autoPlay></audio>
      </div>
    </div>
  );
}
