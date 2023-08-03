import cipher from './cipher.js';

const btnCodificar = document.querySelector('#codificar'); /*captura el click dado por el usuario*/
const btnDecodificar = document.querySelector('#decodificar');

const originalInput = document.querySelector("#original"); /*captura el msj ingresado por el usuario*/
const desplazamientoInput = document.querySelector("#desplazamiento"); /*captura el desplazamiento ingresado por el usuario*/
const resultadoInput = document.querySelector("#resultado"); /*captura el resultado generado por el desplazamiento*/

let mensajeOriginal = originalInput.value; /*Es un objeto que permite que el valor del msj ingresado por el usuario se asigne a una variable*/

originalInput.addEventListener("input", aMayuscula, false); /*escucha un cambio en input de mensaje original y aplica la función a mayúscula*/

function aMayuscula(e) { /*la función debe tener un evento (e) en su parámetro para usar el objeto target que devuelve el método del DOM que generó la ejecución de la función*/

  mensajeOriginal = e.target.value; /*Permite acceder al valor de mensaje original desde dentro del controlador del evento en sí (que es la función)*/
  mensajeOriginal = mensajeOriginal.toUpperCase(); /*cambia lo introducido por el usuario a mayúscula*/
  /*mensajeOriginal = mensajeOriginal.replace(/[^A-Z]/, ''); /*.replace ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.*/

  e.target.value = mensajeOriginal; /*renombro e.target.value como msj orig después de los cambios*/
}

btnCodificar.addEventListener("click", encripta, false); /* escucha el cambio el click y aplica la función encripta, el primer parámetro es un string con el nombre del evento que inicializa, el segundo la función a ejecutar y el tercero normalmente es falso pero no sé por qué, encontré que no captura el evento en sí, sino el burbujeo pero no lo entiendo*/

function encripta() { 
  let mensajeEncriptado = "";/*defino variable mensaje encriptado como un elemento vacío*/
  const desplazamiento = desplazamientoInput.value ? Number(desplazamientoInput.value) : 0; /*El valor input obtenido en desplazamiento se pasa a la función Number, la función number convierte el valor a un número, si el valor es válido devuelve ese número, si el valor es inválido o está vacío Number devolverá NaN pero en este caso devuelve cero porque estoy usando un operador ternario ? : es una forma de escribir un condicional if/else en una sola línea*/
  console.log(desplazamiento); /*se imprime en pantalla el valor válido de desplazamiento*/
       
  for (const letra of mensajeOriginal) { /*Aquí recorre cada letra de mensaje original usando for.. of, para cada letra llama a la función desplazamientoLetra*/
    mensajeEncriptado += cipher.encode(desplazamiento, letra); /*para cifrarla con el desplazamiento especificado, agrega la letra cifrada a mensaje encriptado*/
  }
  console.log(mensajeEncriptado);/*imprime mensaje encriptado en consola*/
  resultadoInput.value = mensajeEncriptado; /*Establece mensajeEncriptado como el mensaje grabado*/
      
}

btnDecodificar.addEventListener("click", desencripta, false); 

function desencripta() {
  let mensajeDesencriptado = "";
  const desplazamiento2 = desplazamientoInput.value ? Number(desplazamientoInput.value) : 0; 
  console.log(desplazamiento2); 

  for (const letra2 of mensajeOriginal) { 
    mensajeDesencriptado += cipher.decode(desplazamiento2, letra2); 
  }
  console.log(mensajeDesencriptado);
  resultadoInput.value = mensajeDesencriptado;    
}

const btnLimpiar = document.querySelector('#limpiar');
btnLimpiar.addEventListener("click", limpiarInputs);

function limpiarInputs(){
  document.getElementById("original").value= "";
  document.getElementById("desplazamiento").value= "";
  document.getElementById("resultado").value= "";
}