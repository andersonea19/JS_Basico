let horasTrabajadas = parseInt(prompt("ingrese sus horas trabajadas: "));
let valorHora = parseFloat(prompt("ingrese el valor de la hora: "));
const dias = 7;

const salarioSemanal = (horasTrabajadas * valorHora) * dias;

alert("el salario semanal es: "+salarioSemanal);