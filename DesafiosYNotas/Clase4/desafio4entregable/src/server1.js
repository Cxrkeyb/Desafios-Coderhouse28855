import express from "express";
import Contenedor from "./productos.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./src/public"))

const productos = express.Router()

app.use("/api/productos", productos)
let prodContainer = new Contenedor("productos.txt")

productos.get("/", (req, res)=>{
  prodContainer.getAll((p)=>{
    if(p === null){
      res.status(404).send("No existen productos")
    }else{
      res.status(200).send(p)
    }
  })
})
productos.get("/:id", (req, res)=>{
  const {id} = req.params;
  prodContainer.getById(id, (p)=>{
    if(p === undefined){
      res.status(404).send(`No existe producto con el id:${id}`)
    }else{
      res.status(200).send(p)
    }
  })
})
productos.post("/", (req, res)=>{
  try{
    const { title, price, thumbnail } = req.body;
    const productoNuevo = {
      title,
      price,
      thumbnail
    }
    prodContainer.save(productoNuevo,(p)=>{
      res.status(200).send(p)
    })
  }catch(err){
    res.status(400).json({error: err})
  }
  
})
productos.put("/:id", (req, res)=>{
  try {
    const {id} = req.params;
    const productoNuevo = req.body;
    prodContainer.modi(productoNuevo, id, prod => {
        res.status(200).send(productoNuevo);
    });
  } catch (err) {
    res.status(400).json({error: err});
  } 
})

productos.delete("/:id", (req, res)=>{
  try {
    const {id} = req.params;
    prodContainer.deleteById(id, p => {
        res.status(200).send(p);
    });
  } catch (err) {
    res.status(400).json({error: err});
} 
})

const server = app.listen(8080, ()=> {
  console.log('Server iniciado en el localhost:8080')
});
server.on('error', (err)=>{
  console.log(err)
})