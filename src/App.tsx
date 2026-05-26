import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/landing/LandingPage";
import { DashboardPage } from "./pages/DashboardPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AnalysisPage } from "./pages/AnalysisPage";
import { ScenariosPage } from "./pages/ScenariosPage";
import { AICopilotPage } from "./pages/AICopilotPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  return (
    // <h1 className="text-3xl font-bold underline text-black">Helloooo</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/scenarios" element={<ScenariosPage />} />
        <Route path="/ai-copilot" element={<AICopilotPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
