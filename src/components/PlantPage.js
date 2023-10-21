import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(setPlants) 
  }, [])


  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
    // Uses spread operator to create a shallow copy of the array of plant objects. Appends newPlant state object to the new plants array. 
  }

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(filteredPlants)


  // useEffect always takes two arguments: an anonymous callback function, and an empty dependency array.
  return (
    <main>
      <NewPlantForm onAddPlant ={handleAddPlant}/>
      <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
