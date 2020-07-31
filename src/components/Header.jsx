import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  state = {
    hasScrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scroll = window.pageYOffset;

    if (scroll > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require("../images/logo-designcode.svg")}
              alt="logo"
              width="30"
            />
          </Link>
          <Link className="header-link" to="/courses">
            Courses
          </Link>
          <Link className="header-link" to="/Downloads">
            Downloads
          </Link>
          <Link className="header-link" to="/Workshops">
            Workshops{" "}
          </Link>
          <Link to="/Buy">
            <button className="buy-button">Buy</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
