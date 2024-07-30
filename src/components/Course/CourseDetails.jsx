import React, { useState } from "react";
import Hero from "../home/hero/Hero";
import AboutCard from "../about/AboutCard";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import { Link, NavLink } from "react-router-dom";
import EnHero from "./Engineering/EnHero";
import EnAboutCard from "./Engineering/EnAboutCard";
// import "./courseDetails.css";
const CourseDetails = () => {
 

  const [collegeName , setCollegeName]= useState([
    {
      id: 1,
      Image: "images/IitMadras.jpg",
      name: "IIT Madras",
    },
    {
      id: 2,
      Image: "images/iitbombay.webp",
      name: "IIT Bombay",
    },
    {
      id: 3,
      Image: "images/IitDelhi.jpg",
      name: "IIT Delhi",
    },
    {
      id: 4,
      Image: "images/IitKanpur.jpg",
      name: "IIT Kanpur",
    }]
  )
  return (
    <>
      <Header />
      <EnHero/>
      <EnAboutCard />
      <div className=" container meals">

        {collegeName.map((val) => {
          return (
            <div className="mealImg">
              <img src={val.Image} />
              <p>{val.name}</p>
              <NavLink>
                <button>Learn more </button>
              </NavLink>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default CourseDetails;
