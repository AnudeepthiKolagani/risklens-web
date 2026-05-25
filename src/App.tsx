import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/landing/LandingPage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {
  return (
    // <h1 className="text-3xl font-bold underline text-black">Helloooo</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
