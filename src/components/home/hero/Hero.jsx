import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO CAREERPATH"
              title="Track Your Career "
            />
            <p>
           
            A career is an individual's metaphorical "journey" through
              learning, work and other aspects of life. There are a number of
              ways to define career and the term is used in a variety of ways
            </p>
            <div className="button">
              <button
                className="primary-btn"
                onClick={() => navigate("/aboutcard")}
              >
                GET STARTED Now   <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button onClick={() => navigate("/courses")}>
              VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
