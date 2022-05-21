import React, {useEffect, useState} from 'react'
import { FormControl, InputLabel, Input, Button, Grid } from '@mui/material';
import "./LoginContainer.css"
import {Link} from "react-router-dom"
import axios from 'axios'
import ProductosGenerator from '../ProductosGenerator/ProductosGenerator';

export default function LoginContainer() {
    const [autorizado, setAutorizado] = useState(false)
    const [username, setUsername] = useState("")
    const [goodbay, setGoodBay] = useState(false)
    const [usuarioData, setUsuarioData] = useState({
        userName: "",
        password: ""
    })
    const URI = 'http://localhost:8080/api/user/'
    axios.defaults.withCredentials = true
    useEffect(()=>{
        axios.get(`${URI}/login`).then((res)=>{console.log(res);setAutorizado(res.data.autorizado);setUsername(res.data.username);})
    }, [])
    const handleFormChange = (e) => {
        setUsuarioData({
          ...usuarioData,
          [e.target.name]: e.target.value
        })
    };
    const handleLogin = async () => {
        await axios.post(`${URI}/user`, usuarioData).then((res)=>{setAutorizado(res.data.autorizado);setUsername(res.data.userName); console.log(res)})
    }
    const handleLogout = async () => {
        await axios.get(`${URI}/logout`).then((res)=>{setAutorizado(res.data.autorizado);setGoodBay(true)})
    }
    const inputs = [{name: "userName", placeholder: "Nombre del usuario"}, {name: "password", placeholder: "Contraseña del usuario"}	];
    return (
        <div className='flex justifyContent-center flex-direction-column align-center containerRandom cLogin gap'>
            <Grid className="containerLogin" container direction='column' justifyContent="center" alignItems="center" columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {inputs.map((input)=> 
                    <Grid item xs="auto" key={input.name}>
                    <FormControl className='inputLogin'>
                        <InputLabel className="color" htmlFor={input.name}>{input.placeholder}</InputLabel>
                        <Input onChange={handleFormChange} name={input.name} id={input.name}/>
                    </FormControl>
                    </Grid>
                )}
                <Link className='goToAnother' to="/register">Ir a registrarte</Link>
            </Grid>
            <Button className='botonAleatorio' onClick={handleLogin} variant="contained">Ingresar usuario</Button>
            {goodbay ? <h2>Hasta luego {username}</h2> : <></>}
            {autorizado ? <ProductosGenerator handleLogout={handleLogout} username={username} /> : <></>}
        </div>
    )
}
