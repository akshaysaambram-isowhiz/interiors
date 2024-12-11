import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Service from "./pages/Service"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)