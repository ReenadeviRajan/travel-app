import PropTypes from "prop-types";
import Loader from "../components/Loader";
import CityItem from "../components/CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import { useCity } from "../context/CityContext";

export default function CitiesList() {
  const { cities, loading } = useCity();
  if (loading) {
    return <Loader />;
  }
  if (!cities.length) {
    return (
      <div>
        <Message message="Cities data not available" />
      </div>
    );
  }
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.name} city={city} />
      ))}
    </div>
  );
}
