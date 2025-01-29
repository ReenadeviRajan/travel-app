import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./MapLayout.module.css";
import { useCity } from "../context/CityContext";
import { useEffect, useState } from "react";
import { useURLPosition } from "../hooks/useURLPosition";
export default function MapLayout() {
  const navigate = useNavigate();

  const { cities } = useCity();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const { mapLat, mapLong } = useURLPosition();

  function showForm() {
    navigate(`/app/addcity`);
  }

  useEffect(() => {
    if (mapLat && mapLong) {
      setMapPosition([mapLat, mapLong]);
    }
  }, [mapLat, mapLong]);
  return (
    <div style={{ height: "100%" }}>
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
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeLayout({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`addcity?lat=${e.latlng.lat}&long=${e.latlng.lng}`);
      console.log(e);
    },
  });
}
