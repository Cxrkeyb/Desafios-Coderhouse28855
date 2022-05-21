const fs = require("fs");
const express = require("express");
const app = express();

const port = 3000;

const server = app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
server.on("error", (error) => console.log(error));
let products;
class Contenedor {
  constructor(filename) {
    this.filename = filename;
    this.data = [];
  }
  async save(Object) {
    try {
      products = this.getAll();
      let idCalculated = this.calculateId(products);
      products.push({ ...Object, id: idCalculated });
      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(products, null, 2)
      );
      console.log("El Objeto se guardó correctamente el id es: ", idCalculated);
    } catch (error) {
      console.log(error);
    }
  }
  async getById(productId) {
    try {
      if (!fs.existsSync(this.filename)) {
        console.log("No hay productos guardados");
      } else {
        products = await this.getAll();
        products.map((prod) => {
          if (prod.id == productId) {
            console.log(prod);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  getAll() {
    try {
      products = [];
      if (!fs.existsSync(this.filename)) {
        console.log("No hay productos guardados");
        return products;
      } else {
        products = JSON.parse(fs.readFileSync(this.filename, "utf-8"));
        return products;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async deleteById(productId) {
    let productsFiltered = [];
    products = await this.getAll();
    products.map((prod) => {
      if (prod.id !== productId) {
        productsFiltered.push(prod);
      }
    });
    products = productsFiltered;
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(products, null, 2)
    );
    console.log("El objeto ha sido eliminado correctamente");
  }
  async deleteAll() {
    fs.unlink(this.filename, (error) => {
      if (error) {
        console.log("Hubo un problema al eliminar el contenido");
      } else {
        console.log("El contenido fue borrado");
      }
    });
  }
  calculateId(products) {
    let idCalculated = 1;
    products.map((prod) => {
      if (prod.id >= idCalculated) {
        idCalculated = prod.id + 1;
      }
    });
    return idCalculated;
  }
}
const escuadra = {
  title: "Escuadra",
  price: 123.45,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
};
const calculadora = {
  title: "Calculadora",
  price: 234.56,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
};
const globoTerraqueo = {
  title: "Globo Terráqueo",
  price: 345.67,
  thumbnail:
    "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
};
const contenedor = new Contenedor("productos.txt");
let productos;
productos =  contenedor.getAll()
console.log(productos[Math.floor(Math.random() * (3 - 1)) +1])
const productoRandom = productos[Math.floor(Math.random() * (3 - 1)) +1]
const productoRString = JSON.stringify(productoRandom)
const productosString = JSON.stringify(productos);
app.get("/productos", (req, res) => {
  res.send(productosString);
});
app.get("/productoRandom", (req, res) => {
  res.send(productoRString);
});