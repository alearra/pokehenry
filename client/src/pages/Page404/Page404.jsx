import React from "react";
import "./Page404.css";
import backVideo from "../../assets/media/sunmon.mp4";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <section className="page">
      <video className="page__backvideo" src={backVideo} autoPlay loop muted />
      <div className="page__container">
        <Link to="/home">
          <button className="page__button"> 🡠 Return</button>
        </Link>
        <p className="page__container--error">404</p>
        <div className="page__title">
          <p>Keep trying! May the force be with you.</p>
        </div>
      </div>
    </section>
  );
}

export default Page404;
