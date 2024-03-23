import { CircularProgress } from "@nextui-org/react";
import styles from "./styles.module.css";

export default function BMIWidget() {

  let bmi = 22.6;

  let state = "normal";

  if (bmi < 18.5) {
    state = "warning";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    state = "normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    state = "warning";
  } else {
    state = "danger";
  }
  return (
    <div className={styles.widget}>
      <div className={styles["col-1"]}>
        <h3 className="text bold">BMI (Body Mass Index)</h3>
        <p className="xs">You have a normal weight</p>
        {/* <button>View More</button> */}
      </div>
      <div className={styles["col-1"]}>
       <CircularProgress
      
     
      value={bmi}
      maxValue={40}
      className="mr-1"
    classNames={{ svg: "w-36 h-36 drop-shadow-md",
   
    track: "stroke-white/10",
    value: "text-xl font-semibold text-white",}}
    color={state === "normal" ? "success" : state === "warning" ? "warning" : "danger"}
      formatOptions={{}}
     
      showValueLabel={true}
    />
      </div>
    </div>
  );
}
