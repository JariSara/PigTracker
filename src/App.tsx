import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/AllData";
import Profile from "./components/Temperature";
import Help from "./components/Gas";
import Works from "./components/Humidity";
import Register from "./components/Register";
import Temperature from "./components/Temperature";
import Humidity from "./components/Humidity";
import Gas from "./components/Gas";
import AllData from "./components/AllData";
import Analytics from "./components/Analytics";

function App() {
  return (
    <Routes>
      <Route path="Temperature" element={<Temperature />} />
      <Route path="Humidity" element={<Humidity />} />
      <Route path="Gas" element={<Gas />} />
      <Route path="AllData" element={<AllData />} />
      <Route path="Analytics" element={<Analytics />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
