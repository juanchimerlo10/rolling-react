import React from "react";
import Stars from "../images/stars.svg";
import "../css/home.css";
import "../css/tareas.css";
import { useState } from "react";
import Lista from "../component/Lista";
const Tareas = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  //manejador de evento de onSubmit
  //handleSubmit guarda en el array la tarea del state
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("funcion");
    setLista([...lista, tarea]);
    console.log(lista);
    setTarea("");
  };
  return (
    <>
      <div className="Home">
        <h1 className="titulo">Bienvenido</h1>
        <h2 className="titulo">Ingresa tus tareas</h2>
        <div className="container ">
          <div className="w-80">
            <form className="" onSubmit={handlerSubmit}>
              <div className="form-group">
                <input
                  placeholder="Tarea"
                  type="text"
                  className="form-control mr-2"
                  onChange={(e) => setTarea(e.target.value)}
                  value={tarea}
                />
                <button className="btn btn-info" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <Lista lista={lista}></Lista>
        <img src={Stars} />
      </div>
    </>
  );
};

export default Tareas;
