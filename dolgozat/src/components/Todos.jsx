import React, { useContext } from "react";
import Todo from "./Todo";

function Todos() {
  const { tevekenyseg } = useAdatContext();
  return (
    <div class="w3-card-4">
      <header class="w3-container w3-blue">
        <h1>{tevekenyseg.tev_nev}</h1>
      </header>

      <div class="w3-container">
        <p>
          {" "}
          {tevekenyseg.map(
            (element,
            (index) => {
              return <Todo adat={element} key={index} />;
            })
          )}{" "}
        </p>
      </div>

      <footer class="w3-container w3-blue">
        <h5>Footer</h5>
      </footer>
    </div>
  );
}

export default Todos;
