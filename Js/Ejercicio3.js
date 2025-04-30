
// 3- Escribir un script que simule el 
// lanzamiento de dos dados. Hacer uso de la 
// función Math.random para obtener números 
// aleatorios entre 1 y 6 para cada uno de 
// los lanzamientos de los dados. Sumar el 
// resultado de lanzar dos dados y anotar 
// en un array el número de apariciones de 
// dicha suma, repitiendo 50 veces esta 
// operación.


document.writeln(`Script que simula 50 veces el lanzamiento de 2 dados y registra cuantas veces sale cada resultado posible al sumar ambos dados: <br><br>`);

const suma = [2,3,4,5,6,7,8,9,10,11,12];
const apariciones = [0,0,0,0,0,0,0,0,0,0,0];

let dado1 = 0;
let dado2 = 0;
let resultado = 0;

for (let i = 0; i < 50; i++) {
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  resultado = dado1 + dado2;
  if (resultado === 2) {
    apariciones[0]++
  }
  if (resultado === 3) {
    apariciones[1]++
  }
  if (resultado === 4) {
    apariciones[2]++
  }
  if (resultado === 5) {
    apariciones[3]++
  }
  if (resultado === 6) {
    apariciones[4]++
  }
  if (resultado === 7) {
    apariciones[5]++
  }
  if (resultado === 8) {
    apariciones[6]++
  }
  if (resultado === 9) {
    apariciones[7]++
  }
  if (resultado === 10) {
    apariciones[8]++
  }
  if (resultado === 11) {
    apariciones[9]++
  }
  if (resultado === 12) {
    apariciones[10]++
  }
}

document.writeln(`<table>`);
  document.writeln(`<tbody>`)
    document.writeln(`<tr>`);

      document.writeln(`<td>`);
        document.writeln(`Resultados posibles <br>`);
        document.writeln(`<ul>`)
        for (let i = 0; i < suma.length; i++){
          document.writeln(`<li>${suma[i]}</li>`)
        }
        document.writeln(`</ul>`)
      document.writeln(`</td>`);

      document.writeln(`<td>`);
        document.writeln(`Cantidad repeticiones <br>`);
        document.writeln(`<ul>`)
        for (let i = 0; i < apariciones.length; i++){
          document.writeln(`<li>${apariciones[i]}</li>`)
        }
        document.writeln(`</ul>`)
      document.writeln(`</td>`);

    document.writeln(`</tr>`);
  document.writeln(`</tbody>`)
document.writeln(`</table>`);