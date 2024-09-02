import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TypesPage from "../pages/Types";
import AboutUsPage from "../pages/AboutUs";
import TreePage from "../pages/Tree";
import ArticlesPage from "../pages/Articles";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/type" element={<TypesPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/article" element={<TreePage />} />
      <Route path="/article/:id" element={<ArticlesPage />} />
    </Routes>
  );
};

export default RouteNavigation;
