import PropTypes from "prop-types";
import styles from "./CountriesList.module.css";
import CountryItem from "../components/CountryItem";
import Loader from "../components/Loader";
import { useCity } from "../context/CityContext";

export default function CountriesList() {
  const { cities, loading } = useCity();

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  let countries = [];

  countries = cities.reduce((arr, curr) => {
    if (!arr.map((el) => el.country).includes(curr.country)) {
      return [...arr, { country: curr.country, emoji_flag: curr.emoji_flag }];
    } else {
      return arr;
    }
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </div>
  );
}
