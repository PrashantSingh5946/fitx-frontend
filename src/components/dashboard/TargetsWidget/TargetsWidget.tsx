import styles from "./styles.module.css";

export default function TargetsWidget() {
  return (
    <div className={styles.container}>
      <div className=".col-1">Today Target</div>
      <div className=".col-2">
        <button>Check</button>
      </div>
    </div>
  );
}
