import { useState } from "react";
import Products from "./Components/Products";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <HeroSection></HeroSection>
      <Products></Products>
    </>
  );
}

export default App;
