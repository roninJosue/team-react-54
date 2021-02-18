
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        
        <div >
            

            <div className='container text-center'>
                <Link to='/login'>Iniciar Sesion</Link>
                <Link to='/register'>Obtener Cuenta</Link>
            </div>

        </div>
     );
}
 
export default Home;