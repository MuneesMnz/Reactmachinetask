import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Support from "./pages/Support";
import Help from "./pages/Help";
import Plugins from "./pages/Plugins";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="/help" element={<Help />} />
        <Route path="/plugins" element={<Plugins />} />
      </Route>
    </Routes>
  );
}

export default App;
