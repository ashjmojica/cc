import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planets}) {

const planeteerCards = planets.map((planets) => {
  return(
    <Planeteer 
    key={planets.id} 
    name = {planets.name} 
    fromUSA = {planets.fromUsa}
    born = {planets.born} 
    bio = {planets.bio}
    quote = {planets.quote}
    pictureUrl = {planets.pictureUrl} 
    twitter = {planets.twitter} />
  )
})



  return (
    <ul className="cards"> {planeteerCards}</ul>
      

      
    
  );
}

export default PlaneteersContainer;