import React from "react";

function Todo(adat, fvg) {
  return (
    <div class="w3-card-4">
      
        <p>{adat.id} {adat.tev_nev} {adat.allapot ? "✔" : ""}  <button onClick={fvg()}>"❌"</button></p>
     
    </div>
  );
}

export default Todo;
