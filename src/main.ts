import "./style.css";

/* -------------------------------------------FUNCION  XRA BOTON RETROCEDER -------------------------*/

function retroceder(): void {
  // lee el numero del turno

  let number = (document.getElementById("numero-turno") as HTMLElement)
    .textContent;

  // resta una unidad al numero actual del turno y muestra el resultado con dos digitos (.padStart)

  if (number !== null && number !== undefined) {
    let modificado = parseInt(number) - 1;

    const resultado = document.getElementById("numero-turno");

    if (resultado !== null && resultado !== undefined) {
      resultado.textContent = modificado.toString().padStart(2, "0");
    }
  }
}

/* -------------------------------------------FUNCION  XRA BOTON AVANCE -------------------------*/

function avance(): void {
  // lee el numero del turno

  let number = (document.getElementById("numero-turno") as HTMLElement)
    .textContent;

  // suma una unidad al numero actual del turno y muestra el resultado con dos digitos (.padStart)

  if (number !== null && number !== undefined) {
    let modificado = parseInt(number) + 1;

    const resultado = document.getElementById("numero-turno");

    if (resultado !== null && resultado !== undefined) {
      resultado.textContent = modificado.toString().padStart(2, "0");
    }
  }
}

/* -------------------------------------------FUNCION  XRA BOTON RESET -------------------------*/

function reset(): void {
  // lee el numero del turno

  let number = (document.getElementById("numero-turno") as HTMLElement)
    .textContent;

  // resetea el numero a zero

  if (number !== null && number !== undefined) {
    let modificado = 0;

    const resultado = document.getElementById("numero-turno");

    if (resultado !== null && resultado !== undefined) {
      resultado.textContent = modificado.toString().padStart(2, "0");
    }
  }
}

/* -------------------------------------------EVENTOS CLICK DE LOS BOTONES -------------------------*/

const botonAvanzar = document.getElementById("btn1");

if (botonAvanzar !== null && botonAvanzar !== undefined) {
  botonAvanzar.addEventListener("click", avance);
}

const botonRetroceder = document.getElementById("btn2");

if (botonRetroceder !== null && botonRetroceder !== undefined) {
  botonRetroceder.addEventListener("click", retroceder);
}

const botonReset = document.getElementById("btn3");

if (botonReset !== null && botonReset !== undefined) {
  botonReset.addEventListener("click", reset);
}
