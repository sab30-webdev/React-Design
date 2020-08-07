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
          {this.props.dark ? (
            <svg
              className="sun"
              onClick={() => this.props.toggleDark()}
              fill="#56ccf2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          ) : (
            <svg
              className="moon"
              onClick={() => this.props.toggleDark()}
              fill="#56ccf2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
