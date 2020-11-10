import React from "react";

function Lista({ lista }) {
  return (
    <ul className="list-group container pl-2">
      {lista.map((item) => {
        return <li className="list-group-item m-1">{item} </li>;
      })}
    </ul>
  );
}

export default Lista;
