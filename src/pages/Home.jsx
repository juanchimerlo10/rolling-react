import React from 'react';
import '../css/home.css'
import LogoConf from '../images/video_confe.png'
import Logo from '../images/logo-mac.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='Home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 mt-5'>
                        <img src={LogoConf}/>
                        <div className='text-center mt-3 '>
                            <Link to='/badges' className='btn btn-info btb-lg'>
                            Accede a la conferencia
                            </Link>
                        </div>
                    </div>
                    <div className='col-6 mt-5  contenedor'>
                        <img className='logo_rolling' src={Logo}></img>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;