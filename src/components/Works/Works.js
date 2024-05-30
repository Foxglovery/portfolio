import React from "react";
import "./Works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio</h2>
      <span className="worksDesc">
        I derive a great deal of satisfaction from bringing my creative visions
        to life in everything I do and that includes web design! Here are some
        projects I have worked on.
      </span>
      <div className="worksImgs">
        <img className="worksImg" src={Portfolio1} alt="" />
        <img className="worksImg" src={Portfolio2} alt="" />
        <img className="worksImg" src={Portfolio3} alt="" />
        <img className="worksImg" src={Portfolio4} alt="" />
        <img className="worksImg" src={Portfolio5} alt="" />
        <img className="worksImg" src={Portfolio6} alt="" />
      </div>
    </section>
  );
};

export default Works;
