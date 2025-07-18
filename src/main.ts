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
  if (turno > 0) {
    turno = turno - 1;
  } else {
    turno = 0;
  }

  pintarNumero(turno);
}

/* -------------------------------------------FUNCION  XRA BOTON AVANCE ----------------------------*/

function avance(): void {
  turno = turno + 1;

  pintarNumero(turno);
}

/* -------------------------------------------FUNCION  XRA BOTON RESET -----------------------------*/

function reset(): void {
  turno = 0;

  pintarNumero(turno);
}

/* -------------------------------------------FUNCION INTRODUCIR NUEVO NUMERO ------------------------*/

function nuevoNumero(): void {
  const numeroNuevo = (
    document.getElementById("nuevo-numero") as HTMLInputElement
  ).value;

  if (numeroNuevo !== null && numeroNuevo !== undefined) {
    let valorActual = parseInt(numeroNuevo);

    if (valorActual >= 0) {
      turno = valorActual;
      pintarNumero(turno);

      (document.getElementById("nuevo-numero") as HTMLInputElement).value = "";
    } else {
      console.log(alert("introduce un numero positivo"));

      (document.getElementById("nuevo-numero") as HTMLInputElement).value = "";
    }
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

  const botonCambiar = document.getElementById("btn4");

  if (botonCambiar) {
    botonCambiar.addEventListener("click", nuevoNumero);
  }
}
