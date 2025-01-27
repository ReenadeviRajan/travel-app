import { useNavigate, useSearchParams } from "react-router-dom";

export default function MapContainer() {
  const [searchParams, setSearchParams] = useSearchParams(); // Returns a tuple of the current URL's URLSearchParams and a function to update them. Setting the search params causes a navigation.

  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const long = searchParams.get("long");

  function showForm() {
    navigate(`/app/addCity`);
  }
  return (
    <div onClick={showForm} style={{ height: "100%" }}>
      {/*click where ever it gets navigates*/}
      lat : {lat}, long : {long}
      <button onClick={() => setSearchParams({ lat: 1, long: 1 })}>
        {/*this will reflect everywhere*/}
        change
      </button>
    </div>
  );
}
