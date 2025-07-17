import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  pintarNumero(turno);
  eventos();
});

let turno = 0;

const pintarNumero = (turno: number): void => {
  const numeroTurno = document.getElementById("numero-turno");
  if (numeroTurno) {
    const numeroFormateado = turno.toString().padStart(2, "0");
    numeroTurno.textContent = numeroFormateado;
  } else {
    console.error("Elemento 'numero-turno' no encontrado.");
  }
};

/* -------------------------------------------FUNCION  XRA BOTON RETROCEDER -------------------------*/

function retroceder(): void {
  let number = (document.getElementById("numero-turno") as HTMLElement)
    .textContent;

  let modificado = parseInt(number);

  if (modificado > 0) {
    turno = modificado - 1;
  } else {
    turno = 0;
  }

  pintarNumero(turno);
}

/* -------------------------------------------FUNCION  XRA BOTON AVANCE -------------------------*/

function avance(): void {
  let number = (document.getElementById("numero-turno") as HTMLElement)
    .textContent;

  let modificado = parseInt(number);

  turno = modificado + 1;

  pintarNumero(turno);
}

/* -------------------------------------------FUNCION  XRA BOTON RESET -------------------------*/

function reset(): void {
  const resultado = document.getElementById("numero-turno");

  if (resultado) {
    resultado.textContent = "0".padStart(2, "0");
  }
}

/* -------------------------------------------EVENTOS CLICK DE LOS BOTONES -------------------------*/

function eventos() {
  const botonAvanzar = document.getElementById("btn1");

  if (botonAvanzar) {
    botonAvanzar.addEventListener("click", avance);
  }

  const botonRetroceder = document.getElementById("btn2");

  if (botonRetroceder) {
    botonRetroceder.addEventListener("click", retroceder);
  }

  const botonReset = document.getElementById("btn3");

  if (botonReset) {
    botonReset.addEventListener("click", reset);
  }
}

/* -------------------------------------------FUNCION INTRODUCIR NUEVO NUMERO ------------------------*/

function nuevoNumero(): void {
  const numeroNuevo = (
    document.getElementById("nuevo-numero") as HTMLInputElement
  ).value;

  if (numeroNuevo !== null && numeroNuevo !== undefined) {
    let valorActual = parseInt(numeroNuevo);

    if (valorActual >= 0) {
      document.getElementById("numero-turno").textContent = numeroNuevo
        .toString()
        .padStart(2, "0");

      (document.getElementById("nuevo-numero") as HTMLInputElement).value = "";
    } else {
      console.log(alert("introduce un numero positivo"));

      (document.getElementById("nuevo-numero") as HTMLInputElement).value = "";
    }
  }
}

const botonCambiar = document.getElementById("btn4");

if (botonCambiar) {
  botonCambiar.addEventListener("click", nuevoNumero);
}
