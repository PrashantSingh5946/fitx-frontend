import styles from "./styles.module.css";

export default function BMIWidget() {
  return (
    <div className={styles.widget}>
      <div className={styles["col-1"]}>
        <h3>BMI (Body Mass Index)</h3>
        <h5>You have a normal weight</h5>
        <button>View More</button>
      </div>
      <div className={styles["col-1"]}></div>
    </div>
  );
}
