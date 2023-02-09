import React from "react";

function Planeteer({name, bio, pictureUrl, twitter}) {
  


  
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>
              {
              }
            
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
