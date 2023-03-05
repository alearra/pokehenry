import React from "react";
import "./Cards.css";

function Cards({ id, name, image, attack, types }) {
  return (
    <div className="card__container">
      <div className="card__row">
        <div className="card__card" key={id}>
          <div className="card__image">
            <img src={image} alt="pokemon" width="190px" heigth="190px" />
          </div>
          <div className="card__heading">
            {name}
            <div className="card__types--1">
              Type:
              <span className="card__badge"> {types}</span>
            </div>
            <div className="card__types--2">
              Attack:
              <span className="card__badge"> {attack}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
