import React, { useState, Fragment, useEffect } from "react";
import Navbar from "../component/Navbar";
import BadgeHero from "../component/BadgeHero";
import BadgeList from "../component/BadgeList";
import { Link } from "react-router-dom";

export default function Badges() {
  const [data, setData] = useState({
    datos: [],
    loading: true,
  });

  //CUANDO DEJO EL CORCHETE VACIO, ES PARA MONTAR EL COMPONENTE
  //SE UTILIZA UNA VEZ
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  //Uso funcion async para realizar una peticion fetch
  const getData = async () => {
    //await espera que la promesa se resuelva y luego la almacena en peticion
    const peticion = await fetch("http://localhost:3008/data");
    //Obtengo el dato en una variable, uso .jason para que vuelva en el mismo y poder leer
    const data = await peticion.json();

    setData({
      //le asigno a datos el valor de data. que seria la respuesta de la api
      datos: data,
      loading: false,
    });
  };

  //   {
  //     id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
  //     firstName: "Freda",
  //     lastName: "Grady",
  //     email: "Leann_Berge@gmail.com",
  //     jobTitle: "Legacy Brand Director",
  //     twitter: "FredaGrady22221-7573",
  //     avatarUrl:
  //       "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
  //   },
  //   {
  //     id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
  //     firstName: "Major",
  //     lastName: "Rodriguez",
  //     email: "Ilene66@hotmail.com",
  //     jobTitle: "Human Research Architect",
  //     twitter: "ajorRodriguez61545",
  //     avatarUrl:
  //       "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
  //   },
  //   {
  //     id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
  //     firstName: "Daphney",
  //     lastName: "Torphy",
  //     email: "Ron61@hotmail.com",
  //     jobTitle: "National Markets Officer",
  //     twitter: "DaphneyTorphy96105",
  //     avatarUrl:
  //       "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
  //   },
  // ]);

  //   const data = [
  //     {
  //       id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
  //       firstName: "Freda",
  //       lastName: "Grady",
  //       email: "Leann_Berge@gmail.com",
  //       jobTitle: "Legacy Brand Director",
  //       twitter: "FredaGrady22221-7573",
  //       avatarUrl:
  //         "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
  //     },
  //     {
  //       id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
  //       firstName: "Major",
  //       lastName: "Rodriguez",
  //       email: "Ilene66@hotmail.com",
  //       jobTitle: "Human Research Architect",
  //       twitter: "ajorRodriguez61545",
  //       avatarUrl:
  //         "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
  //     },
  //     {
  //       id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
  //       firstName: "Daphney",
  //       lastName: "Torphy",
  //       email: "Ron61@hotmail.com",
  //       jobTitle: "National Markets Officer",
  //       twitter: "DaphneyTorphy96105",
  //       avatarUrl:
  //         "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
  //     },
  //   ];
  return (
    <>
      <BadgeHero />
      <div className="container">
        <div className="row mb-3">
          <div className="col-6 offset-3">
            <Link to="/badges/new" className="btn btn-info float-right">
              Nuevo ingreso
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-3">
            {data.loading ? (
              <h3>Loading.. </h3>
            ) : (
              <BadgeList data={data.datos} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
