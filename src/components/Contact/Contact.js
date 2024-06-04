import React from "react";
import "./Contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";
import Microsoft from "../../assets/microsoft.png";
const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Stack</h1>
        <p className="techDesc">
          Enim modi suscipit. Sit velit assumenda molestias voluptatem occaecati
          placeat. Qui blanditiis quisquam qui aspernatur quasi.
        </p>
        <div className="stackImgs">
          <img className="stackImg" alt="" src={Walmart} />
          <img className="stackImg" alt="" src={Adobe} />
          <img className="stackImg" alt="" src={Facebook} />
          <img className="stackImg" alt="" src={Microsoft} />
        </div>
      </div>
      <div id="contact"></div>
    </section>
  );
};

export default Contact;
