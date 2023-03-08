import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import Filter from "./Filter";
import DogSummary from "./DogSummary";

function App() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(res => res.json())
    .then(dogs => setDogs(dogs))
  }, [])

  return (
    <div className="App">
      <Filter />
      <DogBar 
        dogs={dogs}
      />
      <DogSummary />
    </div>
  );
}

export default App;
