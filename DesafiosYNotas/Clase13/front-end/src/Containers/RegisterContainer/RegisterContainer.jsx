import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Button, Grid } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RegisterContainer() {
	const [usuarioData, setUsuarioData] = useState({})
  const inputs = [{name: "userName", placeholder: "Nombre del usuario"}, {name: "password", placeholder: "Contraseña del usuario"}, {name: "firstName", placeholder:"Nombre"}, {name: "lastName", placeholder:"Apellido"}, {name: "email", placeholder: "Correo del usuario"},];
	const URI="http://localhost:8080/api/user"
	const handleFormChange = (e) => {
		setUsuarioData({
			...usuarioData,
			[e.target.name]: e.target.value
		})
	};
	const handleRegister = async (e) => {
		e.preventDefault();
		await axios.post(`${URI}/register`, usuarioData).then((res)=> window.location = "/login")
	}
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
				<Link className='goToAnother' to="/login">Ir a loguearte</Link>
			</Grid>
			<Button className='botonAleatorio' onClick={handleRegister} variant="contained">Registrar usuario</Button>
		</div>
  )
}
