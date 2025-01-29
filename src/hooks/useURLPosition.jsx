import { useSearchParams } from "react-router-dom";

export function useURLPosition() {
  const [searchParams, setSearchParams] = useSearchParams(); // Returns a tuple of the current URL's URLSearchParams and a function to update them. Setting the search params causes a navigation.

  const mapLat = searchParams.get("lat");
  const mapLong = searchParams.get("long");

  return { mapLat, mapLong };
}
