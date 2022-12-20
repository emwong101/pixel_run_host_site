import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <Link to="/play" className="title">
        PLAY
      </Link>
    </div>
  );
}

export default Hero;
