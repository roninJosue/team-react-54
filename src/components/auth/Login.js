import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const NuevaCuenta = () => {
    
    const onSubmit = e => {

    }
    
    return ( 
        <div className='container w-25 border text-center mt-5 p-3 shadow'>
            <h1 className='mt-0'>Iniciar Sesión</h1>
            <form onSubmit={onSubmit}>
                <fieldset >
                    <div class="form-group">
                        <TextField
                            required
                            id="email"
                            label="E-mail"
                            variant="filled"
                            fullWidth
                            type='email'
                        />
                    </div>

                    <div class="form-group">
                        <TextField
                            required
                            id="password"
                            label="Password"
                            variant="filled"
                            fullWidth
                            type='password'
                        />
                    </div>
                
                    <Button 
                        variant='contained'
                        color='primary'
                        fullWidth
                        type='submit'
                    >
                        Iniciar Sesion
                    </Button>
                    
                </fieldset>
            </form>
            <Link to='/register' className='d-flex mt-2'>Obtener Cuenta</Link>
        </div>
     );
}
 
export default NuevaCuenta;