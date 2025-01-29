import PropTypes, { func } from "prop-types";
import styles from "./cityitem.module.css";
import { Link } from "react-router-dom";
import { useCity } from "../context/CityContext";
export default function CityItem({ city }) {
  CityItem.propType = {
    city: PropTypes.object.isRequired,
  };
  const { currentCity, deleteCity } = useCity();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(city.id);
  }
  return (
    <Link
      to={`/app/cities/${city.id}?lat=${city.latitude}&long=${city.longitude}`}
      className={styles.cityLink}
    >
      <div
        className={`${styles.city} ${
          currentCity.id == city.id ? styles.activeCity : ""
        }`}
      >
        <div className="d-flex align-items-center">
          <div>{city.emoji_flag}</div>
          <div>{city.name}</div>
        </div>
        <div>
          <button className={styles.deleteButton} onClick={handleDelete}>
            &times;
          </button>
        </div>
      </div>
    </Link>
  );
}
