let nombreProducto = prompt("ingrese el nombre del producto: ");
let precioProducto = parseFloat(prompt("ingrese el precio del producto: "));
let cantidad = parseInt(prompt("ingrese la cantidad del producto: "))

const total = precioProducto * cantidad;

alert("El total a pagar por "+cantidad+" "+nombreProducto+" es de: "+total);