// Write your Character component here

import React from "react";

export default function Character(props) {
  //Destructure props.
  const { name, height } = props.character;
  console.log(props);
  return (
    <div>
      <p>{name}</p>
      <p>Height: {height}</p>
    </div>
  );
}
