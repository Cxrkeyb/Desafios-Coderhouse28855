var numeros = [1, 2, 3, 4, 5];
numeros.map(function (x) { return x * x; }).forEach(function (x) { return console.log(x); });
var persona = {
    nombre: "Coderhouse",
    edad: 10,
    url: "http://www.coderhouse.com"
};
console.log(persona);
var Color = /** @class */ (function () {
    function Color() {
        this.color = "";
    }
    Color.prototype.getColor = function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        this.color = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
        return this.color;
    };
    return Color;
}());
var unColor = new Color();
console.log(unColor.getColor());
