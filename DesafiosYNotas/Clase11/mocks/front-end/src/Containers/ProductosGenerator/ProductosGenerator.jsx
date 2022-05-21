import React, {useState} from 'react'
import axios from 'axios';
import ProductosList from '../../Components/ProductosList/ProductosList';
import "./ProductosGenerator.css"
import { FormControl, InputLabel, Input, Button, Grid } from '@mui/material';

export default function ProductosGenerator() {
    const URI = 'http://localhost:8080/api/productos'
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productoData, setProductoData] = useState({
      nombre: "",
      descripcion: "",
      codigo: "",
      foto: "",
      precio: 0,
      stock: 0
    })
    const getProductsRandom = async () => {
      setLoading(false)
      const res = await axios.post(`${URI}/productos-test`)
      const allProducts = res.data;
      console.log(allProducts)
      setProductos(allProducts)
      setLoading(true)
    }
    //Manejar el estado
    const handleFormChange = (e) => {
      setProductoData({
        ...productoData,
        [e.target.name]: e.target.value
      })
    };
    const handleGenerateProduct = async() => {
      setLoading(false)
      const res = await axios.post(URI, productoData)
      const product = res.data;
      setProductos([product])
      setLoading(true)
    }
    const inputs = [{name: "nombre", placeholder: "Nombre del producto"}, {name: "descripcion", placeholder: "Descripcion del producto"},{name: "codigo", placeholder: "Codigo del producto"},{name: "foto", placeholder: "Url de la foto"},{name: "precio", placeholder: "Precio del producto"},{name: "stock", placeholder: "Stock del producto"}]
    return (
      <div className='flex justifyContent-center flex-direction-column align-center containerRandom gap'>
        <Button className='botonAleatorio' onClick={getProductsRandom} variant="contained">Generar 5 Productos Aleatorios</Button>
        <Grid  container justifyContent="center" alignItems="center" columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {inputs.map((input)=> 
            <Grid item xs="auto" key={input.name}>
              <FormControl>
                <InputLabel htmlFor={input.name}>{input.placeholder}</InputLabel>
                <Input onChange={handleFormChange} name={input.name} id={input.name}/>
              </FormControl>
            </Grid>
          )}
        </Grid>
        <Button className='botonAleatorio' onClick={handleGenerateProduct} variant="contained">Generar producto</Button>
        {loading ? productos.length > 0 ? <ProductosList productos={productos}/> : <h2>No hay productos</h2> : <h2>Esperando informacion...</h2>}
      </div>
        
  )
}
