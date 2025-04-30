
// 5- Definir una función que muestre 
// información sobre una cadena de texto que 
// se le pasa como argumento. A partir de la 
// cadena que se le pasa, la función determina 
// si esa cadena está formada sólo por 
// mayúsculas, sólo por minúsculas o por una 
// mezcla de ambas.

document.writeln(`Funcion que determina si el texto ingresado fue escrito en mayusculas, minusculas o una mezcla de ambas. <br><br>`)

function mayusculasMinusculas (texto) {
  if (texto === texto.toUpperCase()) {
    document.writeln(`El texto "${texto}" esta formado solo por mayusculas.`)
  }
  else if (texto === texto.toLowerCase()) {
    document.writeln(`El texto "${texto}" esta formado solo por minusculas.`)
  }
  else {
    document.writeln(`El texto "${texto}" esta formado por mayusculas y minusculas.`)
  }
}

let texto = prompt("Ingrese un texto corto en mayusculas, minusculas o mezcla de ambas: ");

mayusculasMinusculas(texto);
