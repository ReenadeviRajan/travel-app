import PropTypes from "prop-types";
import styles from "./cityitem.module.css";
import { Link } from "react-router-dom";
export default function CityItem({ city }) {
  CityItem.propType = {
    city: PropTypes.object.isRequired,
  };
  return (
    <Link
      to={`/app/cities/${city.id}?lat=${city.latitude}&long=${city.longitude}`}
      className={styles.cityLink}
    >
      <div className={styles.city}>
        <div className="d-flex align-items-center">
          <div>{city.emoji_flag}</div>
          <div>{city.name}</div>
        </div>
        <div>
          <button className={styles.deleteButton}>&times;</button>
        </div>
      </div>
    </Link>
  );
}
