import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
