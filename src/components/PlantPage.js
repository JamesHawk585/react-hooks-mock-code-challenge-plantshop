import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  // Always use a default value of an empty array


  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(setPlants) 
  }, [])


  function handleAddPlant(newPlant) {
    console.log(newPlant)
    setPlants([...plants, newPlant])
    // Uses spread operator to create a shallow copy of the array of plant objects. Appends newPlant state object to the new plants array. 
  }
  // useEffect always takes two arguments: an anonymous callback function, and an empty dependency array.
  return (
    <main>
      <NewPlantForm onAddPlant ={handleAddPlant}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
