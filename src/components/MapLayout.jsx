import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import styles from "./MapLayout.module.css";
import { useCity } from "../context/CityContext";
import { useEffect, useState } from "react";
export default function MapLayout() {
  const [searchParams, setSearchParams] = useSearchParams(); // Returns a tuple of the current URL's URLSearchParams and a function to update them. Setting the search params causes a navigation.

  const navigate = useNavigate();

  const mapLat = searchParams.get("lat");
  const mapLong = searchParams.get("long");

  const { cities } = useCity();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  function showForm() {
    navigate(`/app/addCity`);
  }

  useEffect(() => {
    if (mapLat && mapLong) {
      setMapPosition([mapLat, mapLong]);
    }
  }, [mapLat, mapLong]);
  return (
    <div onClick={showForm} style={{ height: "100%" }}>
      {/*click where ever it gets navigates*
      lat : {lat}, long : {long}
      <button onClick={() => setSearchParams({ lat: 1, long: 1 })}>
        {/*this will reflect everywhere
        change </button> */}

      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.latitude, city.longitude]} key={city.id}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        <ChangeLayout position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeLayout({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
