"use strict";

var lista = [1, 2, 3, 4, 5];

lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
var lista2 = [1, 2, 3, 4, 5, 6];
lista2.map(function (x) {
  return Math.pow(x, x);
}).forEach(function (x) {
  return console.log(x);
});
var lista3 = [1, 2, 3, 4, 5, 7];
lista3.map(function (x) {
  return Math.pow(x, x);
}).forEach(function (x) {
  return console.log(x);
});
var hola = "soy una palabra";
var banana = "soy una banana";
var productos = [{ nombre: "soy pro", edad: "12" }, { nombre: "soy", edad: "10" }];
