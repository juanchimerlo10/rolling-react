import React from "react";
import { TrashFill } from "react-bootstrap-icons";

function Lista({ lista, borrarItem }) {
  return (
    <ul className="list-group ">
      {/* /utilizo map para recorrer el arreglo y posteriormente 
      muestro en pantalla */}
      {lista.map((item, index) => {
        return (
          <div key={index} className="lista-tarea mt-2 ">
            <li className="list-group-item text-dark">{item}</li>
            <button onClick={() => borrarItem(item)} className="btn btn-danger">
              <TrashFill />
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default Lista;

// warning each child in a list should have a unique "key" prop?
//se agrega una "key"(la cual tiene que se unica) a lista
//para diferenciar cada item de la misma ya que, por defecto
//todos tienen el mismo nombre
//doy valor "posicion" a la key, el mismo es unico y no se repite

//como podria generar id random para borrar cada item ?
