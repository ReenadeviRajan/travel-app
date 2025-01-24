import MapContainer from "../components/MapContainer";
import SideBar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.appContainer}>
      <div>
        <SideBar />
      </div>
      <div>
        <MapContainer />
      </div>
    </div>
  );
}
