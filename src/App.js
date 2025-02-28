import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes"; // Renomeado para evitar conflito com Routes do React Router
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/sanidade">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
