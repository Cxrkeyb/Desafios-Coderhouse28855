import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductosContainer from './Containers/ProductosContainer/ProductosContainer';
import Navbar from "./Components/Navbar/Navbar.jsx"
import ProductosAleatorios from './Containers/ProductosGenerator/ProductosGenerator';
import ProductoInfo from './Containers/ProductoInfo/ProductoInfo';
import LoginContainer from "./Containers/LoginContainer/LoginContainer"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginContainer/>}/>
        <Route path='/login' element={<LoginContainer/>}/>
        <Route path='/api/productos' element={<ProductosContainer/>}/>
        <Route path='/api/productos/generator' element={<ProductosAleatorios/>}/>
        <Route path='/api/productos/:id' element={<ProductoInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
