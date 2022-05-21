"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
var productos = [{
  nombre: "soy pro",
  edad: "12"
}, {
  nombre: "soy",
  edad: "10"
}]; // Color aleatorio con babel

var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, [{
    key: "getColor",
    value: function getColor() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var color = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
      return color;
    }
  }]);

  return Color;
}();

var unColor = new Color();
console.log(unColor.getColor());
