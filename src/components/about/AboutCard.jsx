import React, { useState } from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Science } from "../Course/Science";
import { Arts } from "../Course/Arts";
import { Commerce } from "../Course/Commerce";
import Value from "../value/Value";
const AboutCard = () => {
  const [index, setIndex] = useState("");
  const [scienceData, setScienceData] = useState(Science);
  const [artsData, setArtsData] = useState(Arts);
  const [commerceData, setCommerceData] = useState(Commerce);
  const navigate = useNavigate();
  const name = "Ismile Mallick";
  function goToValue(val) {
    // navigate("/value", { state: { val: val } });
    navigate("/value");
  }

  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Heading subtitle="YOUR GOALS" title="CHOOSE YOUR STREAM" />
            <div className="items">
              {homeAbout.map((val, id) => {
                return (
                  <div
                    className="item flexSB"
                    onClick={() => goToValue(val.title)}
                  >
                    <div className="img">
                      <img src={val.cover} alt=" " />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
