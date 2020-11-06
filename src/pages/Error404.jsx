import React from 'react';
import '../css/home.css'
import '../css/error404.css'
import Stars from '../images/stars.svg'
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <div className='Home'>
            <div className='container'>
                <div className='d-flex flex-row-reverse'>
                    <div > 
                    <h1 className='text parpadea'>Error404</h1>
                    <h2 className='notFound parpadea'>-Page not found</h2>
                    <Link to='/badges' className='btn btn-link btn-lg '>
                            Regresar al inicio
                        </Link>
                    </div>
                </div>
                        <img src={Stars}/>
            </div>
            
        </div>
        </>
    );
};

export default Error404;