import fs from 'fs'; 

class Productos {
    constructor (json) {
      this.archivo = json;
    }

    save(producto, res) {
      let productos = []; 
      productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
        if (error) {
          console.log('No existen productos')
          producto.id = 1;
          productos = [];
          productos.push(producto);
          this.guardarProductos(productos);
          res(producto);
        } else {
            try {
              productos = JSON.parse(contenido);
              producto.id = this.leerMaxId(productos) + 1;
              productos.push(producto);
              this.guardarProductos(productos);
              res(producto);
            } catch {}                           
            }
        });
    }
    modi(producto, id, res) {
        let productos = []; 
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
          if (error) {
            res('No existen productos')
            return true;
            } else {      
                productos = JSON.parse(contenido);
                for(let i of productos){
                  if (i.id==id){
                    i.title = producto.title;
                    i.price = producto.price;
                    i.thumbnail = producto.thumbnail;
                  }
                }
              this.guardarProductos(productos);
              res(producto);                                      
            }
        });
    }
    leerMaxId(productos) {
        let id = 1;
        productos.map(prod => {
          if (prod.id>id) {
            id = prod.id;
          }
        })
        return id;
    }
    guardarProductos(productos) {
        fs.writeFile(this.archivo, JSON.stringify(productos, null, 2), error =>{
          if (error) {
            console.log('Error al guardar el archivo');
          } else {
            return true;
          }
        })
    }

    getById(Number, producto) {
        let productos = []; 
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
          if (error) {
            console.log('No existen productos')
            producto(null);
          } else {
            productos = JSON.parse(contenido);
            const prod = productos.find( prod => prod.id==Number);
            producto(prod);
          }
      });
    }
    getAll(all) {
        let productos = []; 
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
          if (error) {
            console.log('No existen productos')
            all(null);
          } else {
            productos = JSON.parse(contenido);
            all(productos);
          }
        });
    }

    deleteById(Number, res) {
        let productos = []; 
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
          if (error) {
            res('No existen productos')
          } else {
            productos = JSON.parse(contenido);
            const prod = productos.find( prod => prod.id==Number);
            try {
              if (prod.length==0) {
                res(`No se encontró el producto con id:${Number}`)
              }else{
                  const i = productos.indexOf(prod);
                  console.log(`Indice ${i}`)
                  productos.splice(i, 1);
                  this.guardarProductos(productos)
                  res(`El producto con id ${Number} ha sido eliminado correctamente`)
                    }
                } catch {
                  res(`No se encontró el producto con id:${Number}`)
                }                
            }
        });
    }
    deleteAll() {
        const fs = require('fs');       
        fs.unlink(this.archivo, error => {
          if (error) {
            console.log('Hubo un error al eliminar los productos');
          } else {
            console.log('Los productos han sido eliminados correctamente');
          }
        })  
    }
}

export default Productos;