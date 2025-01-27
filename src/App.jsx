import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import { useEffect, useState } from "react";
import CitiesList from "./pages/CitiesList";
import CountriesList from "./pages/CountriesList";
import CityDetails from "./pages/CityDetails";
import AddCity from "./pages/AddCity";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const citiesUrl = "http://localhost:9000/cities";
  async function fetchCities() {
    try {
      setLoading(true);
      let response = await fetch(citiesUrl);
      let cities = await response.json();
      setCities(cities);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(function () {
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* <PageNav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CitiesList cities={cities} loading={loading} />}
            />
            <Route
              path="cities"
              element={<CitiesList cities={cities} loading={loading} />}
            />
            <Route path="addCity" element={<AddCity />} />
            <Route path="cities/:cityId" element={<CityDetails />} />
            <Route
              path="countries"
              element={<CountriesList cities={cities} loading={loading} />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
