import React, { useEffect, useState } from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../Utlis/accordon";
import Back from "../common/back/Back";
import { Link, useLocation } from "react-router-dom";
import Header from "../common/header/Header";
import { Science } from "../Course/Science";
import { Arts } from "../Course/Arts";
import { Commerce } from "../Course/Commerce";

// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
  // const location = useLocation();
  // const x = location.state.val;
  // console.log(props);
  // const [newData, setData] = useState(props);

  return (
    <>
      <Header />
      <Back title=" Courses " />
      <section id="value" className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/*left side*/}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>
          {/* right */}
          <div className="flexColStart v-right">
            <span className="orangeText">SCIENCE</span>
            <span className="primaryText">ALL Course In Science </span>
            <span className="secondaryText">
              We always ready to help by providijng the best services for you.
              <br />
              We beleive a good blace to live can make your life better
            </span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                return (
                  <AccordionItem uuid={i} key={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton ">
                        {/* just for getting state of item */}
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded ? (
                              <div className="flexCenter icons expanded">
                                {item.icon}
                              </div>
                            ) : (
                              <div className="flexCenter icon collapsed">
                                {item.icon}
                              </div>
                            )
                          }
                        </AccordionItemState>
                        <Link to={"/allcourse"} className="primaryText">
                          {item.heading}
                        </Link>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
