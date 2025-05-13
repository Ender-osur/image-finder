import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../screens/home/Home";
import SavedImages from "../screens/savedImages/SavedImages";

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
