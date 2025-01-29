import { useNavigate } from "react-router-dom";
import styles from "./AddCity.module.css";
import { useURLPosition } from "../hooks/useURLPosition";
import { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";
import Message from "./Message";
import { useCity } from "../context/CityContext.jsx";
export default function AddCity() {
  const nav = useNavigate();
  const { setCity } = useCity();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState("");
  const [geoLoading, setGeoLoading] = useState(false);

  const { mapLat, mapLong } = useURLPosition();

  useEffect(() => {
    fetchCityName();
  }, [mapLat, mapLong]);

  async function fetchCityName() {
    try {
      setGeoLoading(true);
      setError("");
      let response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${mapLat}&longitude=${mapLong}`
      );

      let data = await response.json();
      if (!data.countryName)
        throw new Error("Unable to detect city. Please click in another place");
      console.log(data);
      setCityName(data.city || data.locality || "");
      setCountryName(data.countryName);
      setCountryCode(data.countryCode);
    } catch (e) {
      setError(e.message);
    } finally {
      setGeoLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName) return;

    const city = {
      name: cityName,
      country: countryName,
      latitude: mapLat,
      longitude: mapLong,
      countryCode: countryCode,
      date: new Date().toLocaleDateString(),
    };
    await setCity(city);
    nav("/app/cities");
  }

  function back() {
    e.preventDefault();
    nav(-1);
  }

  if (geoLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <Message message={error} />;
  }

  return (
    <div className={styles.addCityContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City</label>
          <div>
            <input
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
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
