import React from "react";
import PlantCard from "./PlantCard";

function PList({plants}) {

  const pList = plants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)
  // Maps through the plants array of plant objects and passes down props for each card to PlantCard.

  return (
    <ul className="cards">{pList}</ul>
  );
}

export default PList;
