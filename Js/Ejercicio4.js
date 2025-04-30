
// 4- Escribir el código de una función a la 
// que se pasa como parámetro un número entero 
// y devuelve como resultado una cadena de 
// texto que indica si el número es par o 
// impar. Mostrar por pantalla el resultado 
// devuelto por la función.

function parImpar(numero) {
  if (numero % 2 === 0) {
    document.writeln(`<p>El numero ${numero} es PAR.</p>`)
  }
  else {
    document.writeln(`El numero ${numero} es IMPAR.</p>`)
  }
}

const numero = parseInt(prompt("Ingrese un numero para determinar si es PAR o IMPAR: "));

parImpar(numero);