import React, { useEffect, useRef, useState } from "react";
import { courseImg } from "./CourseImg";

import "./allCourse.css";
import Footer from "../common/footer/Footer";
const AllCourse = () => {
  const [sliderItems, setSliderItems] = useState(courseImg);

  const [thumbnailItems, setThumbnailItems] = useState([...sliderItems]);

  const sliderRef = useRef(null);

  useEffect(() => {
    // Add the first thumbnail item to the end of the thumbnail list
    setThumbnailItems((prev) => [...prev.slice(1), prev[0]]);
  }, []);

  const moveSlider = (direction) => {
    if (direction === "next") {
      setSliderItems((prev) => [...prev.slice(1), prev[0]]);
      setThumbnailItems((prev) => [...prev.slice(1), prev[0]]);
      sliderRef.current.classList.add("next");
    } else {
      setSliderItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
      setThumbnailItems((prev) => [
        prev[prev.length - 1],
        ...prev.slice(0, -1),
      ]);
      sliderRef.current.classList.add("prev");
    }

    const handleAnimationEnd = () => {
      sliderRef.current.classList.remove(direction);
    };

    sliderRef.current.addEventListener("animationend", handleAnimationEnd, {
      once: true,
    });
  };

  return (
    <>
      <div className="body">
        <header className="header1">
          <nav>
            <a href="/" className="active">
              Home
            </a>
            <a href="#">About</a>
            <a href="#">All Course</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        <div className="slider" ref={sliderRef}>
          <div className="list">
            {sliderItems.map((val) => {
              return (
                <div className="item">
                  <img src={val.Image} alt="" />

                  <div className="content">
                    <div className="title">{val.Title}</div>
                    <div className="type">{val.Duration}</div>
                    <div className="description">{val.Description}</div>
                    <div className="button3">
                      <a href="/coursedetails">SEE MORE</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="thumbnail">
            {thumbnailItems.map((val) => {
              return (
                <div className="item">
                  <img src={val.Image} alt="" />
                </div>
              );
            })}
          </div>

          <div className="nextPrevArrows">
            <button className="prev b1" onClick={() => moveSlider("prev")}>
              {" "}
              {"<"}{" "}
            </button>
            <button className="next b1" onClick={() => moveSlider("next")}>
              {" "}
              {">"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllCourse;
