import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./pages/CitiesList";
import CountriesList from "./pages/CountriesList";
import CityDetails from "./pages/CityDetails";
import AddCity from "./pages/AddCity";
import { CityProvider } from "./context/CityContext";

function App() {
  return (
    <CityProvider>
      <div>
        <BrowserRouter>
          {/* <PageNav /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<CitiesList />} />
              <Route path="cities" element={<CitiesList />} />
              <Route path="addcity" element={<AddCity />} />
              <Route path="cities/:cityId" element={<CityDetails />} />
              <Route path="countries" element={<CountriesList />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CityProvider>
  );
}

export default App;
