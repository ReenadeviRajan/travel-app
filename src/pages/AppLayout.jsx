import MapLayout from "../components/MapLayout";
import SideBar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.appContainer}>
      <div>
        <SideBar />
      </div>
      <div>
        <MapLayout />
      </div>
    </div>
  );
}
