
// 7- Escriba un script que muestre la tabla 
// de multiplicar de un número ingresado por 
// pantalla, la creación de la tabla debe ser 
// realizada con una función y mostrar solo 
// los resultados del 1 al 10 del número 
// elegido por el usuario.

function tablas (numero) {
  document.writeln(`<ul>`)
  document.writeln(`<p>Tabla del ${numero}: </p>`)
  for (let i = 1; i <= 10; i++) {
    document.writeln(`<li>${numero} x ${i} = ${numero*i}</li>`)
  }
  document.writeln(`</ul>`)
}

const numero = parseInt(prompt("Ingrese un numero para generar su tabla de multipicacion: "));

tablas(numero);