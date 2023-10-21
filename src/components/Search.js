import React from "react";

// The search component does not have direct access tot he plants we want to filter. The plant objects are in PlantPage.js
// Search input will be controlled from the parent component. 
// Changing the value entered into the search component will cause a dynamic re-rendering of PlantPage.js. 


function Search({searchTerm, setSearchTerm}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value = {searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
