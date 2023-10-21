import React, { useState } from "react";

function PlantCard({plant}) {
  const {id, name, price, image} = plant 
  const [inStock, setInStock] = useState(true)


  
  function handleClick() {
    setInStock(inStock => !inStock)

}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price.toFixed(2)}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <form>
        <input type="number" step="0.01" placeholder="New Price..." value={null} onChange={null}/>
      </form>  
    </li>
  );
}

export default PlantCard;
