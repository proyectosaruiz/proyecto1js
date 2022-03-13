// "use strict";
// let contadorAciertos = 0;
// let contadorErrores = 0;
// let colorCorrecto;
// let colores;
// //Función que genera un color
// function generaColores() {
//   let colores = [];
//   for (let i = 0; i < 3; i++) {
//     colores[i] = [
//       (Math.random() * 256).toFixed(0),
//       (Math.random() * 256).toFixed(0),
//       (Math.random() * 256).toFixed(0),
//     ];
//   }
//   return colores;
// }
// //Función compueba los colores
// function comprobador(colorSeleccionado) {
//   if (colorSeleccionado === colorCorrecto) {
//     contadorAciertos++;
//     console.log(
//       "acertaste " +
//         " aciertos " +
//         contadorAciertos +
//         " fallos " +
//         contadorErrores
//     );
//     if (contadorAciertos === 3) {
//       alert("you win");
//     }
//   } else {
//     contadorErrores++;
//     console.log(
//       "fallaste " +
//         " aciertos " +
//         contadorAciertos +
//         " fallos " +
//         contadorErrores
//     );
//     if (contadorErrores === 3) {
//       alert("GAME OVER");
//     }
//   }
// }
// function simulador() {
//   while (contadorAciertos < 3 && contadorErrores < 3) {
//     colores = generaColores();
//     colorCorrecto = (Math.random() * 2).toFixed(0);
//     console.log("RGB:" + colores[colorCorrecto]);
//     console.log(
//       "opciones a elegir \n " +
//         colores[0] +
//         "\n" +
//         colores[1] +
//         "\n" +
//         colores[2]
//     );
//     //colorSeleccionado = click recibido(0,1 o 2)
//     comprobador(prompt("elege color")); //es solo comprobador
//   }
// }
// simulador();
