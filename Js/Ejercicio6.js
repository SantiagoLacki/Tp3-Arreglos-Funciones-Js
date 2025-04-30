
// 6- Solicitar por pantalla al usuario 
// ingresar el valor de los lados de un 
// rectángulo, luego crear una función para 
// calcular su perímetro y mostrarlo por 
// pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
// Ejemplo:
// Input:
// lado A = 24
// lado B = 5
// Output: 58

document.writeln(`<h1>Funcion que calcula el Perimetro de un rectangulo con los valores ingresados por el usuario: </h1>`);

function perimetroRectangulo (base,altura) {
  const perimetro = 2*(base + altura)
  document.writeln(`Para calcular el perimetro del rectangulo hacemos: 2x(Base + Altura) <br>`);
  document.writeln(`Base del rectangulo: ${base} <br>`);
  document.writeln(`Altura del rectangulo: ${altura} <br>`);
  document.writeln(`2x(${base} + ${altura}) <br>`)
  document.writeln(`El perimetro del rectangulo es: ${perimetro}`);
}

const base = parseInt(prompt("Ingrese la base del rectangulo: "));
const altura = parseInt(prompt("Ingrese altura del rectangulo: "));

perimetroRectangulo(base,altura);