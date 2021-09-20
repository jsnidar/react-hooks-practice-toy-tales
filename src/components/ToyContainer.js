import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const renderToys = toys.map(toy => <ToyCard key={toy.id} toy={toy}/> )
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
