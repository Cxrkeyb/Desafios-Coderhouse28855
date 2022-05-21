const moment = require("moment");
const hoy = moment().format("DD/MM/YYYY");
const nacimiento = moment(01/11/2004).format("DD/MM/YYYY");
const tiempoNaci = moment(nacimiento).fromNow(true);
console.log("Hoy es ", hoy)
console.log("Naci el ", nacimiento)
console.log("Desde mi nacimiento han pasado ", tiempoNaci)
