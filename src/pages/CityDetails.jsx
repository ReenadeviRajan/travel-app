import { useParams } from "react-router-dom";

export default function CityDetails() {
  const { cityId } = useParams();
  //console.log(params); // getting cityId as response
  return <div>City Details {cityId}</div>;
}
