import cipher from './cipher.js';

const btnCodificar = document.querySelector('#codificar'); /*querySelector permite capturar*/
const btnDecodificar = document.querySelector('#decodificar');

const originalInput = document.querySelector("#original");
const desplazamientoInput = document.querySelector("#desplazamiento");
const resultadoInput = document.querySelector("#resultado"); 

let mensajeOriginal = originalInput.value; /*.value convierte el input en un objeto y permite asignar el valor del input a una variable*/

originalInput.addEventListener("input", aMayuscula, false); /*addEventListener permite ejecutar una función dada a partir de una cambio en el input o al escuchar un click*/

function aMayuscula(e) { 

  mensajeOriginal = e.target.value; /*OJO REVISAR*/ /*Permite acceder al valor de mensaje original desde dentro del controlador del evento en sí (que es la función)*/
  mensajeOriginal = mensajeOriginal.toUpperCase(); /*toUpperCase a mayúscula*/
 
  e.target.value = mensajeOriginal; 
}

btnCodificar.addEventListener("click", encripta, false); 

function encripta() { 
  let mensajeEncriptado = "";
  const desplazamiento = desplazamientoInput.value ? Number(desplazamientoInput.value) : 0; /*Es un condicional ternario*/
  console.log(desplazamiento); 
       
  for (const letra of mensajeOriginal) { /*for of*/
    mensajeEncriptado += cipher.encode(desplazamiento, letra); /*se enlaza al objeto cipher.encode*/
  }
  console.log(mensajeEncriptado);
  resultadoInput.value = mensajeEncriptado; 
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

//function desencripta() {
  //const offsetTwo = desplazamientoInput.value ? Number(desplazamientoInput.value) : 0; 
  //resultadoInput.value = cipher.decode(offsetTwo, mensajeOriginal.value); 
//}

const btnLimpiar = document.querySelector('#limpiar');
btnLimpiar.addEventListener("click", limpiarInputs);

function limpiarInputs(){
  document.getElementById("original").value= "";
  document.getElementById("desplazamiento").value= "";
  document.getElementById("resultado").value= "";
}