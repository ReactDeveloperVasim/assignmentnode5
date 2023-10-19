import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iphone from "./Iphone";
import Samsung from "./Samsung";
import Redmi from "./Redmi";
import Realme from "./Realme";
import Oneplus from "./Oneplus";
import Navigation from "./Navigation";

const Landing = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Iphone />} />
        <Route path="/samsung" element={<Samsung />} />
        <Route path="/redmi" element={<Redmi />} />
        <Route path="/realme" element={<Realme />} />
        <Route path="/oneplus" element={<Oneplus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
