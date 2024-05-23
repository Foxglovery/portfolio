import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Gabriel</span>
          <br />
          Full-Stack Developer
        </span>
        <p className="introPara">
          I am a joyful developer eager to land my first role!
        </p>
        <Link to="/#">
          <button className="btn">
            <img className="btnImg" src={btnImg} alt="" />
            Hire Me!
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
