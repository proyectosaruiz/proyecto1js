"use strict";

let contadorAciertos; //variable aciertos
let contadorErrores; //variable contador
let colorCorrecto; //variable RGB del color buscado

//Escuchadores de click en colores, se llama a comprobador como parámetro la posición donde se hizo click

const muestra1 = document.querySelector(".muestra1");
muestra1.addEventListener("click", () => {
  if (contadorAciertos < 3 && contadorErrores < 3) {
    comprobador(0);
  }
});

const muestra2 = document.querySelector(".muestra2");
muestra2.addEventListener("click", () => {
  if (contadorAciertos < 3 && contadorErrores < 3) {
    comprobador(1);
  }
});

const muestra3 = document.querySelector(".muestra3");
muestra3.addEventListener("click", () => {
  if (contadorAciertos < 3 && contadorErrores < 3) {
    comprobador(2);
  }
});

//Escuchador del botón de nueva partida

const iniciaPartida = document.querySelector(".iniciarPartida");
iniciaPartida.addEventListener("click", () => {
  nuevaPartida();
});

//Función que genera un color aleatorio y otros dos similares en un rango de 50 y +-20 del color aleatorio
//limitamos el num por encima de 256 y por debajo de 0

function generaColores() {
  let colores = [];

  colores[0] = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];

  colores[1] = [
    colores[0][0] + 20 + Math.floor(Math.random() * 50),
    colores[0][1] + 20 + Math.floor(Math.random() * 50),
    colores[0][2] + 20 + Math.floor(Math.random() * 50),
  ];
  if (colores[1][0] > 255) {
    colores[1][0] = 255;
  }
  if (colores[1][1] > 255) {
    colores[1][1] = 255;
  }
  if (colores[1][2] > 255) {
    colores[1][2] = 255;
  }

  colores[2] = [
    colores[0][0] - 20 + Math.floor(Math.random() * -50),
    colores[0][1] - 20 + Math.floor(Math.random() * -50),
    colores[0][2] - 20 + Math.floor(Math.random() * -50),
  ];
  if (colores[2][0] < 0) {
    colores[2][0] = 0;
  }
  if (colores[2][1] < 0) {
    colores[2][1] = 0;
  }
  if (colores[2][2] < 0) {
    colores[2][2] = 0;
  }

  return colores;
}

//Función que compueba si el color clickado por el usuario es el mismo que el color correcto
// y gestiona los contadores y el marcador de lose o win
//Recibe como parámetro la posición en la que hizo click el usuario

function comprobador(colorSeleccionado) {
  if (colorSeleccionado === colorCorrecto) {
    contadorAciertos++;
    const marcadorAcierto = document.querySelector("#aciertos");
    marcadorAcierto.textContent = "Aciertos: " + contadorAciertos;
    if (contadorAciertos === 3) {
      const resultado = document.querySelector("#resultadoPartida");
      resultado.textContent = "YOU WIN";
    }
  } else {
    contadorErrores++;

    const marcadorError = document.querySelector("#errores");
    marcadorError.textContent = "Errores: " + contadorErrores;

    if (contadorErrores === 3) {
      const resultado = document.querySelector("#resultadoPartida");
      resultado.textContent = "YOU LOSE";
    }
  }

  nuevoIntento();
}

// dibuja los colores y el codigo RGB, recibe como parámetro un array de arrays con los 3 colores y
// la posición del color correcto

function pintaColores(colores, colorCorrecto) {
  muestra1.style.backgroundColor = `rgb(${colores[0][0]},${colores[0][1]},${colores[0][2]})`;

  muestra2.style.backgroundColor = `rgb(${colores[1][0]},${colores[1][1]},${colores[1][2]})`;

  muestra3.style.backgroundColor = `rgb(${colores[2][0]},${colores[2][1]},${colores[2][2]})`;

  const codigoRgb = document.querySelector("#rgb");
  codigoRgb.textContent = `RGB: ${colores[colorCorrecto][0]} . ${colores[colorCorrecto][1]} . ${colores[colorCorrecto][2]}`;
}

// selecciona si la posicion RGB correctra es la 1, 2 o 3 y tambien posiciona el resto de colores

function nuevoIntento() {
  colorCorrecto = Math.floor(Math.random() * 3);

  pintaColores(generaColores(), colorCorrecto);
}

// funcion que pone los contadores a 0, gestiona el marcador, oculta el final de partida y inicia nuevos colores

function nuevaPartida() {
  contadorErrores = 0;
  contadorAciertos = 0;
  const marcadorAcierto = document.querySelector("#aciertos");
  marcadorAcierto.textContent = "Aciertos: " + contadorAciertos;

  const marcadorError = document.querySelector("#errores");
  marcadorError.textContent = "Errores: " + contadorErrores;
  const resultado = document.querySelector("#resultadoPartida");
  resultado.textContent = "";
  nuevoIntento();
}

nuevaPartida(); //llamada a partida nueva
