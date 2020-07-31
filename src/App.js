import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Section from "./components/Section";
import Wave from "./components/Wave";
import staticdata from "./staticdata.json";
import Cell from "./components/Cell";
import styled from "styled-components";
import "./App.css";

const SectionCaption = styled.p`
  margin-top: 30px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`;

const SectionCellGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 800px;
  margin: 0 auto;
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Learn to
            <br /> code and design in modern React apps
          </h1>
          <p>Best tools and design systems for React</p>
          <a href="#!">Watch the video</a>
          <div className="HeroLogos">
            <img
              width="50"
              src={require("./images/logo-figma.png")}
              alt="logo-figma"
            />
            <img
              width="50"
              src={require("./images/logo-framer.png")}
              alt="logo-framer"
            />
            <img
              width="50"
              src={require("./images/logo-invision.png")}
              alt="logo-invision"
            />
            <img
              width="50"
              src={require("./images/logo-react.png")}
              alt="logo-react"
            />
            <img
              width="50"
              src={require("./images/logo-sketch.png")}
              alt="logo-sketch"
            />
            <img
              width="50"
              src={require("./images/logo-swift.png")}
              alt="logo-swift"
            />
          </div>
          <Wave />
        </div>
        <div className="Cards">
          <h2>11 courses , more coming...</h2>
          <div className="CardGroup">
            <Card
              img={require("./images/wallpaper.jpg")}
              title="React for designers"
              text="12 sections"
            />
            <Card
              img={require("./images/wallpaper2.jpg")}
              title="Design System"
              text="8 sections"
            />
            <Card
              img={require("./images/wallpaper3.jpg")}
              title="Arkit 2"
              text="20 sections"
            />
            <Card
              img={require("./images/wallpaper2.jpg")}
              title="React Native"
              text="19 sections"
            />
          </div>
        </div>
        <Section
          image={require("./images/wallpaper4.jpg")}
          logo={require("./images/logo-react.png")}
          title="React for designers"
          text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
        />
        <SectionCaption>12 sections - 6 hours</SectionCaption>
        <SectionCellGroup>
          {staticdata.cells.map((cell) => (
            <Cell image={cell.image} title={cell.title} />
          ))}
        </SectionCellGroup>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
