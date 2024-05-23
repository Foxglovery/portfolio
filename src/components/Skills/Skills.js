import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a delightful and skilled neurodivergent who graduated from
        Nashville Software School's Full Stack Development program in February
        '24. After picking up the trifecta of basic programming, we focused on
        React and C#/.NET. I have a keen eye for detail and I absolutely love
        solving a puzzle.{" "}
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} className="skillBarImg" alt="UIDesign" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>this is demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} className="skillBarImg" alt="WebDesign" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>This is Demo Text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} className="skillBarImg" alt="AppDesign" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is demo text</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
