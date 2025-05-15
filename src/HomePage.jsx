import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Howitworks from "./Components/Howitworks";
import Slider from "./Components/Slider";
import Meals from "./Components/Meals";
import Footer from "./Components/Footer";

function HomePage() {
  return (
    <div>
      <div className="font-sans text-[#242423] overflow-x-hidden max-w-screen ">
        <Navbar />

        <Hero />

        <Slider />

        <About />

        <Howitworks />

        <Meals />

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
