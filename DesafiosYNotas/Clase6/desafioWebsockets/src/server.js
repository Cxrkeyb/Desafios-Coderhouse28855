const express = require('express')
const {engine} = require("express-handlebars")
const fs = require("fs");
const http = require("http");
const app = express();
const server = http.createServer(app);
const {Server}= require("socket.io");
const io = new Server(server);

const data = [
  {
    name: "Escuadra",
    price: 123.45,
    thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
  }
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("views", "./src/views");
app.set("view engine", "hbs")
 
app.engine("hbs", engine({
  extname: ".hbs",
  defaultLayout: "index.hbs",
  layoutsDir: __dirname + "/views/layout",
  partialsDir: __dirname + "/views/partials"
}))

app.get("/", (req, res)=>{
  res.render("main", {cargar:true})
})

let mensajes = [];
const chat_db = './db/chat.txt';
const utf = 'utf-8';

io.on("connection", (socket)=>{
  // Inicio cliente conectado
  console.log("Nuevo cliente conectado!");
  const chat = JSON.parse(fs.readFileSync(chat_db, utf));
  // Detectar mensajes escritos desde el inicio
  io.sockets.emit("messageBack", data);
  socket.on("messageProducts", (values)=>{
    data.push({
      name: values.name,
      price: values.price,
      thumbnail: values.thumbnail
    })
    io.sockets.emit("messageBack", data)
  });
  io.sockets.emit("messageChatBack", chat)
  socket.on("messageChat", (values)=>{
    values.time = (new Date).toLocaleString();
    chat.push(values)
    io.sockets.emit("messageChatBack", chat)
    fs.writeFileSync(chat_db, JSON.stringify(chat), utf);
  })
})

server.listen(8080, ()=> {
  console.log('Server iniciado en el localhost:8001')
});
server.on('error', (err)=>{
  console.log(err)
})