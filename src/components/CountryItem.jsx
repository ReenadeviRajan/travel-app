import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";
export default function CountryItem({ country }) {
  CountryItem.propType = {
    city: PropTypes.object.isRequired,
  };
  return (
    <div className={styles.countryItem}>
      <div>
        <div>{country.emoji_flag}</div>
        <div>{country.country}</div>
      </div>
    </div>
  );
}
