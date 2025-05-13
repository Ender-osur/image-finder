import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../screens/Home/Home";
import SavedImages from "../screens/SavedImages/SavedImages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="saved" element={<SavedImages />} />
      </Route>
    </Routes>
  );
}
