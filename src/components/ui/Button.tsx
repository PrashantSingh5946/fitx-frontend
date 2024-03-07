import { ComponentProps } from "react";
import styles from "./style.module.css";
export default function Button(props: any) {
  return <button className={styles.btn}>{props.children}</button>;
}
