import { useNavigate } from "react-router-dom";
import styles from "./AddCity.module.css";
export default function AddCity() {
  const nav = useNavigate();

  function back() {
    nav(-1);
  }

  return (
    <div className={styles.addCityContainer}>
      <form>
        <div>
          <label>City</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea></textarea>
          </div>
        </div>
        <div className={`d-flex ${styles.button}`}>
          <button>Add City</button>
          <button onClick={back}>Back</button>
        </div>
      </form>
    </div>
  );
}
