import Button from "../../../components/ui/Button";
import styles from "./style.module.css";
export function SignIn() {
  return (
    <div className={styles["sign-in-page"]}>
      <div className={styles["container"]}>
        <h3>Hey there,</h3>
        <h2>Welcome Back</h2>
      </div>

      <div className={styles["container"]}>
        <Button text="SignIn">
          <a href="/api/auth/signin">Sign In</a>
        </Button>
      </div>
    </div>
  );
}
