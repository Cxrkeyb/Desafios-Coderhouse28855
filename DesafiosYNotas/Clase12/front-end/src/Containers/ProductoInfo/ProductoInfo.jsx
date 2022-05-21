import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function ProductoInfo() {
  const {id} = useParams();
  const URIP = 'http://localhost:8080/api/productos'
  const URIC = 'http://localhost:8080/api/carrito'
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getProduct()
  }, [])
  const getProduct = async () => {
    setLoading(false)
    const res = await axios.get(`${URIP}/${id}`)
    const allProducts = res.data;
    setProducto(allProducts[0])
    setLoading(true)
  }
  const addProductCart = async () => {
    setLoading(false)
    const res = await axios.post(`${URIC}/d33f0d72-9863-4026-82c6-4583569121b8/productos`, producto)
    console.log(res)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{maxWidth: "800px", display: "flex", gap: "20px"}}>
            <img src={producto.foto} alt={producto.nombre}/>
            <Box>
              <Box sx={{color: "text.primary", fontWeight:"bold", fontSize:"25px"}}>{producto.nombre}</Box>
              <Box sx={{color: "text.secondary", fontWeight:"light", fontSize:"18px"}}>{producto.descripcion}</Box>
              <Button onClick={addProductCart}variant="contained">Añadir a carrito</Button>
            </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}