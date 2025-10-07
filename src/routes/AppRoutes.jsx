import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Salve, Aprenda, Sobre, NotFound, FirstAccess } from "../pages";
import TermsOfUse from "../pages/Legal/TermsOfUse";
import PrivacyPolicy from "../pages/Legal/PrivacyPolicy";
import useStorage from "../hooks/useStorage";
import Layout from "../layout/Layout";

// Componente de rota para a página de Primeiro Acesso
const FirstAccessRoute = () => {
  const [visited] = useStorage("visited");
  // Se o usuário já visitou, redireciona para a home.
  // Se não, exibe a página de primeiro acesso.
  return visited === "true" ? <Navigate to="/" /> : <FirstAccess />;
};

// Componente de layout para proteger as rotas principais do app
const ProtectedRoutes = () => {
  const [visited] = useStorage("visited");
  // Se o usuário NÃO visitou, redireciona para o início do fluxo.
  // Se sim, renderiza o Layout principal (que por sua vez renderiza as rotas aninhadas).
  return visited === "true" ? <Layout /> : <Navigate to="/first-access" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* --- Rotas Públicas e de Fluxo Inicial --- */}
      {/* Estas rotas são sempre acessíveis */}
      <Route path="/first-access" element={<FirstAccessRoute />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* --- Rotas Protegidas do App --- */}
      {/* Todas as rotas aqui dentro exigem que o usuário tenha passado pelo primeiro acesso */}
      <Route element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
        <Route path="socorro/:content" element={<Home />} />
        <Route path="salve" element={<Salve />} />
        <Route path="aprenda">
          <Route index element={<Aprenda />} />
          <Route path=":content" element={<Aprenda />} />
        </Route>
        <Route path="sobre" element={<Sobre />} />
      </Route>

      {/* Rota para Página Não Encontrada */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
