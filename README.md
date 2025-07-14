<!-- markdownlint-disable MD036 -->

# Queremos implementar una pantalla con un display con el turno actual de una clinica

## Proceso realizado:

### Definimos la estructura Html

- botones de avance - retroceso - inicio
- input para introducir un numero determinado
- boton enviar

### Definicion funciones

- funcion siguiente ( suma una unidad al numero en pantalla)
- funcion anterior ( resta una unidad al numero en pantall)
- funcion inicio ( iguala a zero en numero mostrado en pantalla)

### Definicion botones

- boton siguinte ( capturo el evento "click" y llamo a la fucion siguiente)
- boton anterior ( capturo el evento "click" y llamo a la fucion siguiente)
- boton inicio (capturo el evento "click" y llamo a la fucion siguiente)

### Modificar a dos digitos del numero en pantalla

- aplicacion del metodo padStart [informacion encontrada](https://midu.dev/como-anadir-un-cero-a-la-izquierda-de-un-numero-en-javascript)

### Costrucion pantalla para introducir numero

- funcion nuevoNumero ( introducir numero, utilizando tambien metodo padStart)
- boton enviar ( capturo el evento y llamo a la funcion nuevo Numero)

### Mejoras realizadas

Se modifica las funcion anterior y nuevoNummero para evitar tener numeros neugativos.

### Posibles mejoras

Refactorizar las funciones ( anterio-sigueitne-inicio) en una unica funcion control() utilizando un condicional segun el boton clicado.
