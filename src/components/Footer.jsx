import React, { Fragment } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="Footer">
        <div className="Main">
          <h3>Main</h3>
          <a href="#!">Home</a>
          <a href="#!">Design system</a>
          <a href="#!">License</a>
          <a href="#!">Job</a>
        </div>
        <div className="Community">
          <h3>Community</h3>
          <a href="#!">Learning resource</a>
          <a href="#!">Testimonials</a>
          <a href="#!">Meetup</a>
          <a href="#!">Help</a>
        </div>
      </div>
      <div className="Copyright">
        Email us to ask anything. <br />
        © 2020 <br />
        Terms of Service - Privacy Policy
      </div>
    </Fragment>
  );
};

export default Footer;
