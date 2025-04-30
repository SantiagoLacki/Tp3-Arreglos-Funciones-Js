
// 2-  Crear un script que solicite al usuario 
// mediante un prompt el nombre de ciudades y 
// almacenarlas en un arreglo, cuando el usuario 
// selecciona cancelar se debe mostrar el arreglo 
// generado, luego realizar las siguientes 
// acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las 
// posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la 
// segunda posición.
// Sustituye el elemento que ocupa la segunda 
// posición por la ciudad de 'Barcelona'.
// Ejemplo:
// Input:
// [‘Nueva York, Estados Unidos’, ‘Barcelona, 
// España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’,
// ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, 
// Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, 
// Australia’, ‘El Cairo, Egipto’]

const ciudades = [];
let ciudad = "";

do {
  ciudad = prompt("Ingresa el nombre de una ciudad: ");
  ciudades.push(ciudad);
}
while (confirm("¿Desea ingresar otra ciudad? "))

console.log(ciudades.length);
document.writeln(`La longitud del arreglo CIUDADES es de: ${ciudades.length}`);

document.writeln(`<h3>Array generado.</h3>`);

document.writeln(`<ul>`)
for(let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln(`<h3>Elementos del array de la primera, tercera y ultima posicion.</h3>`);

document.writeln(`<ul>`)
  document.writeln(`<li>Elemento de la 1ra posicion: ${ciudades[0]}</li>`)
  document.writeln(`<li>Elemeneto de la 3ra posicion: ${ciudades[2]}</li>`)
  document.writeln(`<li>Elemento de la ultima posicion: ${ciudades[ciudades.length-1]}</li>`)
document.writeln(`</ul>`)

document.writeln(`<h3>Se agrega la ciudad Paris al final del array.</h3>`);

ciudades.push("Paris");

document.writeln(`<ul>`)
for(let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`)
}
document.writeln(`</ul>`)

document.writeln(`<h3>Elemento de la segunda posicion del array.</h3>`);

document.writeln(`<ul>`)
  document.writeln(`<li>${ciudades[1]}</li>`)
document.writeln(`</ul>`)

document.writeln(`<h3>Sustituimos la ciudad en la 2da posicion por BARCELONA: </h3>`);

ciudades[1] = "Barcelona"

document.writeln(`<ul>`)
for(let i = 0; i < ciudades.length; i++) {
  document.writeln(`<li>${ciudades[i]}</li>`)
}
document.writeln(`</ul>`)