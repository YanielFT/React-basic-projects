import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { MarvelPage } from "../pages/MarvelPage";
import { DcPage } from "../pages/DcPage";
import { SearchPage } from "../pages/Searchpage";
import { HeroePage } from "../pages/HeroePage";


export const HeroesRoutes = () => {

  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroePage />} />
          <Route path="/" index element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
