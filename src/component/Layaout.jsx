import React from 'react';
import Navbar from './Navbar';

const Layaout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
            {/* renderiza el navbar en los hijos, dependiendo el path, en este caso 
            los componentes de pages y todas las rutas */}
        </>
    );
};

export default Layaout;