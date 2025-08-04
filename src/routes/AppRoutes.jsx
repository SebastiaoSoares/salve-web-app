import { Routes, Route } from "react-router-dom";
import { Home, Salve, Aprenda, Sobre, NotFound, FirstAccess } from "../pages";
import useStorage from "../hooks/useStorage";
import Layout from "../layout/Layout";

export default function AppRoutes() {
  const [visited] = useStorage("visited");

  const isFirstAccess = !visited;

  return (
    <Routes>
      <Route element={isFirstAccess ? <FirstAccess /> : <Layout />}>
        <Route index element={<Home />} />
        <Route path="salve" element={<Salve />} />
        <Route path="aprenda" element={<Aprenda />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
