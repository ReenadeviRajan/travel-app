import { useParams } from "react-router-dom";
import { useCity } from "../context/CityContext";
import { useEffect } from "react";

export default function CityDetails() {
  const { cityId } = useParams();
  const { getCity } = useCity();
  //console.log(params); // getting cityId as response
  useEffect(() => {
    getCity(cityId);
  }, [cityId]);

  return <div>City Details {cityId}</div>;
}
