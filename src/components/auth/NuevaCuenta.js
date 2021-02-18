import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const NuevaCuenta = () => {
    
    const onSubmit = e => {
        e.preventDefault();
        console.log('Registrando...')


    }
    
    return ( 
        <div className='container w-25 border text-center mt-5 p-3 shadow'>
            <h1 className='mt-0'>Registrate</h1>

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

                    <div class="form-group">
                        <label for="team">Escoge tu tecnologia:</label>

                        <Select
                            labelId="demo-customized-select-label"
                            id="team"
                            fullWidth
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'angular'}>Angular</MenuItem>
                            <MenuItem value={'react'}>React</MenuItem>
                            <MenuItem value={'vue'}>Vue</MenuItem>
                        </Select>
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
            <Link to='/login' className='d-flex mt-2'>Regresar</Link>
        </div>
     );
}
 
export default NuevaCuenta;