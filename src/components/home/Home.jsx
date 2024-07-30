import React from "react";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
// import Science from "../Course/Science";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutCard />
      <HAbout />
      <Footer/>
    </>
  );
};

export default Home;
