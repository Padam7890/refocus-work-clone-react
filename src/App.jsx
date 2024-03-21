import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marques from "./components/Marques";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-full font-['satoshi'] bg-zinc-900 text-white">
      <Navbar />
      <Work/>
      <Stripes/>
      <Products/>
      <Marques/>
      <Cards/>
      <Footer/>
     
    </div>
  );
}

export default App;
