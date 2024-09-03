import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TypesPage from "../pages/TypesPage";
import AboutUsPage from "../pages/AboutUsPage";
import ArticlesPage from "../pages/ArticlesPage";
import ArticlesDetailPage from "../pages/ArticlesDetailPage";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/type" element={<TypesPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/article/:id" element={<ArticlesPage />} />
      <Route path="/article-detail/:id" element={<ArticlesDetailPage />} />
    </Routes>
  );
};

export default RouteNavigation;
