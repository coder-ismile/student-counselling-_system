import React from "react";
import Heading from "../../common/heading/Heading"
import "./enhero.css"
import { useNavigate } from "react-router-dom";
const EnHero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero1" >
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO Bachelor Engineering "
              title="Information of Engineering "
            />
            <p>
            Engineering is the application of science and maths to solve problems. While scientists and inventors come up with innovations, it is engineers who apply these discoveries to the real world.

            </p>
            <div className="button">
              <button
                className="primary-btn"
                onClick={() => navigate("/aboutcard")}
              >
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button onClick={() => navigate("/courses")}>
              All Details  <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default EnHero;