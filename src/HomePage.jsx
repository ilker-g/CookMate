import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Howitworks from "./Components/Howitworks";
import Slider from "./Components/Slider";
import Meals from "./Components/Meals";
import Ingredients from "./Components/Ingredients"

function HomePage() {
  return (
    <div>
       <div className="font-sans text-[#242423] overflow-x-hidden  max-w-screen mx-auto px-4">
      <Navbar />

      <Hero />

      <Slider />

      <About />

      <Howitworks />
      
      <Ingredients/>

      <Meals />

    </div>
    </div>
  )
}

export default HomePage
