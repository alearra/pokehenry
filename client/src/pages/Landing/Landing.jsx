import React from "react";
import "../Landing/Landing.css"
import backVideo from  "../../assets/media/sunmon.mp4"
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="landing">
      <video className="landing__backvideo" src={backVideo} autoPlay loop muted />
      <div className="landing__box">
      <h1 className="landing__title">
        POKEHENRY
      </h1>
      <p className="landing__text">
       Welcome to PokeHenry. Application developed in Javascript, React for the user interface, CSS for the styles and PostgreSQL as database. The application allows users to search for information about their favorite Pokémon, view their stats and create new ones.
      </p>
      <Link to="/home">
        <button className="landing__button">GO!</button>
      </Link>
      </div>
    </section>
  );
}

export default Landing;
