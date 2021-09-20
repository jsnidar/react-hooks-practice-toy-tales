import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const API = 'http://localhost:3001/toys'

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  useEffect(()=> {
    fetch(API)
    .then(r => r.json())
    .then(toys => setToys(toys))
  }, [])

  const onFormSubmit = (newToy) => {
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(toy => setToys([...toys, toy]))
  }
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={onFormSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
