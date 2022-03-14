"use strict";
let contadorAciertos;
let contadorErrores;
let colorCorrecto;
let colores;

const muestra1 = document.querySelector(".muestra1");

muestra1.addEventListener("click", () => {
  comprobador(0);
});
const muestra2 = document.querySelector(".muestra2");

muestra2.addEventListener("click", () => {
  comprobador(1);
});
const muestra3 = document.querySelector(".muestra3");

muestra3.addEventListener("click", () => {
  comprobador(2);
});

//let colorSeleccionado;
//Función que genera un color
function generaColores() {
  let colores = [];
  for (let i = 0; i < 3; i++) {
    colores[i] = [
      (Math.random() * 256).toFixed(0),
      (Math.random() * 256).toFixed(0),
      (Math.random() * 256).toFixed(0),
    ];
  }
  return colores;
}
//Función compueba los colores
function comprobador(colorSeleccionado) {
  if (colorSeleccionado === colorCorrecto) {
    contadorAciertos++;
    const marcadorAcierto = document.querySelector("#aciertos");
    marcadorAcierto.textContent = "Aciertos: " + contadorAciertos;
    if (contadorAciertos === 3) {
      const resultado = document.querySelector("#resultadoPartida");
      resultado.textContent = "YOU WIN";
      nuevaPartida();
    }
  } else {
    contadorErrores++;

    const marcadorError = document.querySelector("#errores");
    marcadorError.textContent = "Errores: " + contadorErrores;

    if (contadorErrores === 3) {
      const resultado = document.querySelector("#resultadoPartida");
      resultado.textContent = "YOU LOSE";
      nuevaPartida();
    }
  }
  nuevoIntento();
}

function simulador() {
  while (contadorAciertos < 3 && contadorErrores < 3) {
    colores = generaColores();
    colorCorrecto = (Math.random() * 2).toFixed(0);

    console.log("RGB:" + colores[colorCorrecto]);
    console.log(
      "opciones a elegir \n " +
        colores[0] +
        "\n" +
        colores[1] +
        "\n" +
        colores[2]
    );

    //colorSeleccionado = click recibido(0,1 o 2)

    comprobador(prompt("elege color")); //es solo comprobador
  }
}
//simulador();

function pintaColores(colores, colorCorrecto) {
  muestra1.style.backgroundColor = `rgb(${colores[0][0]},${colores[0][1]},${colores[0][2]})`;

  muestra2.style.backgroundColor = `rgb(${colores[1][0]},${colores[1][1]},${colores[1][2]})`;

  muestra3.style.backgroundColor = `rgb(${colores[2][0]},${colores[2][1]},${colores[2][2]})`;

  //aqui es donde en lugar del color backgroundcolor, tiene que apararecer el texto rgb
  //const enunciado = document.querySelector(".enunciado");
  const codigoRgb = document.querySelector("#rgb");
  codigoRgb.textContent = `RGB: ${colores[colorCorrecto][0]} . ${colores[colorCorrecto][1]} . ${colores[colorCorrecto][2]}`;
}

function nuevoIntento() {
  colorCorrecto = Math.floor(Math.random() * 2);

  pintaColores(generaColores(), colorCorrecto);
}

//colorCorrecto = (Math.random() * 2).toFixed(0);

function nuevaPartida() {
  contadorErrores = 0;
  contadorAciertos = 0;
  nuevoIntento();
}

nuevaPartida();
