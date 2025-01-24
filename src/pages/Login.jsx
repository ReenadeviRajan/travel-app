import PageNav from "../components/PageNav";
import styles from "./login.module.css";
export default function Login() {
  return (
    <>
      <PageNav />
      <div className={styles.login}>
        <h1>Login</h1>
        <form>
          <div>
            <label>Email</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
