import { useState } from "react";

export function useGeolocation() {
  const [error, setError] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);

  function getPosition() {
    if (!navigator.geolocation) {
      return setError("Geo location not supported");
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setPosition({ lat: lat, long: long });
      },
      (error) => {
        setLoading(false);
        setError(error.message);
      }
    );
    return { position, getPosition, error, loading };
  }
}
