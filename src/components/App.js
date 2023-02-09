import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

const [ planets , setPlanets ] = useState([])
const [ planetSearch , setPlanetSearch ] = useState("")


  useEffect(() => {
    fetch("http://localhost:8003/planeteers") 
    .then(response => response.json())
    .then(data => setPlanets(data))
    }, []);

   



  return (
    <div>
      <Header />
      <SearchBar setPlanetSearch = { setPlanetSearch } />
      <RandomButton />
      <PlaneteersContainer planets = { planets } />
    </div>
  );
}

export default App;
