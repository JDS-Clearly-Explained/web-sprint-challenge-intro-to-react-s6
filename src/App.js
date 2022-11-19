import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  
  //Initialize state for characters and set to empty array.
  const [characters, setCharacters] = useState([]);

  //Use useEffect to fetch data from API and set to state.
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log("this is the data", res.data);
        setCharacters(res.data);
      })
      .catch((err) => console.log("this is an error:", err));
  }, []);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((charData, index) => (
        //Pass character data to Character component.
        <Character key={index} character={charData} />
      ))}
    </div>
  );
};

export default App;
