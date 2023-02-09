import React from "react";

function SearchBar({setPlanetSearch}) {
  return (
    <div className="search">
      <input type="text"
       className="searchTerm"
       onChange={(e) => setPlanetSearch(e.target.value)} 
       />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
