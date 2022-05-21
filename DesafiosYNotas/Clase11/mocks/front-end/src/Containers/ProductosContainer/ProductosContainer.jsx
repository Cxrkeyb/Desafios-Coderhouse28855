import React, {useEffect, useState} from 'react'
import axios from 'axios';
import ProductosList from '../../Components/ProductosList/ProductosList';


export default function ProductosContainer() {
    const URI = 'http://localhost:8080/api/productos'
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getProducts()
    }, [])
    const getProducts = async () => {
        setLoading(false)
        const res = await axios.get(URI)
        const allProducts = res.data;
        setProductos(allProducts)
        setLoading(true)
    }
  return (
    <div className='flex justifyContent-center flex-direction-column align-center containerRandom'>
        {loading ? productos.length > 0 ? <ProductosList productos={productos}/> : <h2>No hay productos</h2> : <h2>Cargando...</h2>}
    </div>
  )
}
