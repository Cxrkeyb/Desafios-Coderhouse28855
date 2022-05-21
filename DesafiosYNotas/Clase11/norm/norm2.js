const {
    normalize,
    schema,
    denormalize
} = require('normalizr')
const util = require("util")

const originalData = {
    id: "999",
    posts: [
      {
        id: "123",
        author: {
          id: "1",
          nombre: "Pablo",
          apellido: "Perez",
          DNI: "20442654",
          direccion: "CABA 123",
          telefono: "1567876547"
        },
        title: "My awesome blog post",
        comments: [
          {
            id: "324",
            commenter: {
              id: "2",
              nombre: "Nicole",
              apellido: "Gonzalez",
              DNI: "20442638",
              direccion: "CABA 456",
              telefono: "1567811543"
            }
          },
          {
            id: "325",
            commenter: {
              id: "3",
              nombre: "Pedro",
              apellido: "Mei",
              DNI: "20446938",
              direccion: "CABA 789",
              telefono: "1567291542"
            }
          }
        ]
      },
      {
        id: "1123",
        author: {
          id: "2",
          nombre: "Nicole",
          apellido: "Gonzalez",
          DNI: "20442638",
          direccion: "CABA 456",
          telefono: "1567811543"
        },
        title: "My awesome blog post",
        comments: [
          {
            id: "1324",
            commenter: {
              id: "1",
              nombre: "Pablo",
              apellido: "Perez",
              DNI: "20442654",
              direccion: "CABA 123",
              telefono: "1567876547"
            }
          },
          {
            id: "1325",
            commenter: {
              id: "3",
              nombre: "Pedro",
              apellido: "Mei",
              DNI: "20446938",
              direccion: "CABA 789",
              telefono: "1567291542"
            }
          }
        ]
      },
      {
        id: "2123",
        author: {
          id: "3",
          nombre: "Pedro",
          apellido: "Mei",
          DNI: "20446938",
          direccion: "CABA 789",
          telefono: "1567291542"
        },
        title: "My awesome blog post",
        comments: [
          {
            id: "2324",
            commenter: {
              id: "2",
              nombre: "Nicole",
              apellido: "Gonzalez",
              DNI: "20442638",
              direccion: "CABA 456",
              telefono: "1567811543"
            }
          },
          {
            id: "2325",
            commenter: {
              id: "1",
              nombre: "Pablo",
              apellido: "Perez",
              DNI: "20442654",
              direccion: "CABA 123",
              telefono: "1567876547"
            }
          }
        ]
      }
    ]
}

const user = new schema.Entity("users")
const commenter = new schema.Entity("commenter", {
    commenter:user
})
const post = new schema.Entity("posts", {
    author: user,
    comments: [commenter]
})
const article = new schema.Entity("article", {posts: [post]})

function print(data){
    console.log(util.inspect(data,false,12,true))
}

const dataNormalizada = normalize(originalData, article)
print(dataNormalizada)

console.log(JSON.stringify(originalData).length, JSON.stringify(dataNormalizada).length)

const dataDesnormalizada = denormalize(dataNormalizada.result, article, dataNormalizada.entities)
console.log(dataDesnormalizada)
print(dataDesnormalizada)