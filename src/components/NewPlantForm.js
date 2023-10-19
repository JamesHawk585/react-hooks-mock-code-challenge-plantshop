import React, { useState } from "react";

// Lecture resumes at 1:04:00-ish. 


// Updating state automatically re-renders a component.  
function NewPlantForm({ onAddPlant }) {
  const [formData, setFromData] = useState({
    name:"",
    price: 0, 
    image: ""
  })
  //  Note that the form object has three key-value pairs, which can be individaully updated by...

  function handleChange(e) {
    if (e.target.name === "price") {
      const amt = e.target.value
      if (amt === "" || amt === null ) {
        setFromData({...formData, [e.target.name]: ""})
      }
      // chacks if the new value of "name" in the state object is === to "price". 
      setFromData({
        ...formData, 
        [e.target.name]: parseFloat(e.target.value),
      })
      //  {...formData} creates a new object that copies all of the properties fromt he original formData object. The shallow copy of the original state object will be used to update formData.
      //  e.target.name indicates the the event is targeting the name key(or property) of the stateful formData object. 
      // Thhe ternary statement is used to conditionally update the state object if
    } else { 
      setFromData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault() 

    const configObj = {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }
    

    fetch("http://localhost:6001/plants", configObj)
    .then( r => r.json())
    .then(plant => onAddPlant(plant))
  }


  console.log(formData)
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          placeholder="Plant name" 
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          value={formData.image}
          placeholder="Image URL" 
          onChange={handleChange}/>
        <input 
          type="number" 
          name="price" 
          value={formData.price} 
          step="0.01" 
          placeholder="Price" 
          onChange={handleChange}
        />
        <button 
        type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
