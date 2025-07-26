import { Routes, Route } from "react-router-dom";
import { Home, Salve, Emergencia, NotFound } from "../pages/";
import Layout from "../layout/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Salve" element={<Salve />} />
        <Route path="/Emergencia" element={<Emergencia />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
