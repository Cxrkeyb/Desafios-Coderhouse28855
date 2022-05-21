// /* -------------------------------------------------------------------------- */
// /*                                   Clase 2                                  */
// /* -------------------------------------------------------------------------- */
const fs = require('fs')
// /* ------------------------ Asincronismo y callbacks ------------------------ */

// const mostrarLetras = (palabra) => {
//     let count = 0;
//     const timer = setInterval(()=> {
//         console.log(palabra[count])
//         count++
//         if(count >= palabra.length){
//             clearInterval(timer)
//         }},250)
// }
// const fin = () => console.log("terminé");
// mostrarLetras("Test")
// /* ------------------------------ Fecha y hora ------------------------------ */


// try{
//     fs.writeFileSync('fyh.txt', new Date().toString())
//     const texto = fs.readFileSync('fyh.txt', 'utf-8')
//     console.log(texto)
// }catch(error){
//     console.log(error)
// }
// /* --------------------- Lectura y escritura de archivos -------------------- */
// try{
//     contenidoString = fs.readFileSync('package.json', "utf-8");
//     const info = {
//         contenidoStr: contenidoString,
//         contenidoObj: JSON.parse(contenidoString),
//         size: contenidoString.length
//     }
//     console.log(info)
//     fs.writeFileSync('info.txt', JSON.stringify(info,null,2))
// }catch(error){
//     console.log(error)
// }

/* -------------------- Lectura y escritura con promises -------------------- */

try{
    const info = JSON.parse(fs.readFileSync("info.txt", "utf-8"))
    info.contenidoObj.author = "Coderhouse"
    console.log(info)
    fs.writeFileSync("package.json.coder", JSON.stringify(info, null, 2))
}catch(error){
    console.log(error)
}
