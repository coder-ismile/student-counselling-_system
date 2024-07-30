import React, { useState } from "react";
import Heading from "../../common/heading/Heading"
import "../../about/about.css";


import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const EnAboutCard = () => {
 const [enData , setEnData] = useState( [
    {
      id: 1,
      cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
      title: "BE or Btech",
      desc: "B.E. (Bachelor of Engineering) is more knowledge oriented. B. Tech (Bachelor of Technology) is more technology oriented.",
    },
    {
      id: 1,
      cover: "https://img.icons8.com/ios/80/000000/diploma.png",
      title: "Joint Entrance Examination",
      desc: "The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India. It comprises two different examinations: the JEE-Main and the JEE-Advanced.",
    },
    {
      id: 1,
      cover: "https://img.icons8.com/ios/80/000000/athlete.png",
      title: "Qualification",
      desc: "Candidates should have passed 10+2 or equivalent examinations with Physics, Mathematics, and Chemistry as compulsory subjects with at least 60% (45% for reserved category students) aggregate marks",
    },
  ])

  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Heading subtitle="Engineering" title="Important Information" />
            <div className="items">
              {enData.map((val, id) => {
                return (
                  <div
                    className="item flexSB"
                   
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

export default EnAboutCard;