import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
