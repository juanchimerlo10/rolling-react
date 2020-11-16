import React from "react";
import Stars from "../images/stars.svg";
import "../css/home.css";
import "../css/tareas.css";
import { useState } from "react";
import Lista from "../component/Lista";
import { useEffect } from "react";
const Tareas = () => {
  //traigo de localstorage al montar el componente

  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState(
    JSON.parse(localStorage.getItem("tareas")) || []
  );

  //se ejecuta cuando el componente sea montado y actualizado por medio de state
  useEffect(() => {
    console.log("Use effect");
    localStorage.setItem("arreglos", JSON.stringify(lista));
    // {

    //     ? console.log("local tiene datos") &&
    //       //Si agrego o quito tarea, actualizo LS
    //       localStorage.setItem([lista])
    //     : console.log("no existe");
    //   //creo "arreglos" dentro de local storage
    //   localStorage.setItem([lista]);
    // }
    //useEffect se fija en el cambio de state de lista
  }, [lista]);

  //manejador de evento de onSubmit
  //handleSubmit guarda en el array la tarea del state
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("funcion");
    //operador spread me trae todo lo que hay en lista
    //y agrega el state de tarea
    setLista([...lista, tarea]);
    console.log(lista);
    setTarea("");
  };

  //paso parametro nombre o id de tarea para borrarla
  //
  const borrarItem = (tarea) => {
    console.log("borrar item" + tarea);
    //actulizacion de items por filtrado
    setLista([...lista.filter((item) => item !== tarea)]);
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
        <Lista lista={lista} borrarItem={borrarItem}></Lista>
        <img src={Stars} />
      </div>
    </>
  );
};

export default Tareas;
