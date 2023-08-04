
const cipher = {

  encode: (desplazamiento, mensaje) => {
    let mensajeEncriptado = "";
    let nuevaLetraCodificada = "";

    if (typeof Number(desplazamiento) !== 'number' || typeof mensaje !== 'string') {
      throw new TypeError('Argumentos inválidos');
    }
    // typeof Number(desplazamiento) !== 'number': Aquí se convierte la variable deplazamiento en un número utilizando la función Number() y luego se verifica si el tipo de dato resultante es igual a 'number'. Si no es un número, se pasa a la siguiente parte de la condición.
    // typeof string !== 'string': Esta parte verifica si la variable mensaje es de tipo 'string'. 
    // Si cualquiera de las dos partes se evalúa como verdadera se lanza un error TypeError con el mensaje "Argumentos inválidos".
    // Este fragmento de código asegura de que los argumentos pasados a una función sean válidos, es decir, que offset sea un número y que string sea una cadena de texto, de lo contrario se indicará un error en pantalla. 

    for (let i = 0; i < mensaje.length; i++) {
      const letraACodificar = mensaje[i].charCodeAt();/*charCodeAt() cambia a ASCII la letra*/

      if (letraACodificar !== 32) {
        nuevaLetraCodificada = letraACodificar + (desplazamiento % 26);

        if (nuevaLetraCodificada < 65) { 
          nuevaLetraCodificada += 26; 
        } else if (nuevaLetraCodificada > 90) { 
          nuevaLetraCodificada -= 26; 
        }
      } else {
        nuevaLetraCodificada = 32;
      }

      const nuevaLetra = String.fromCharCode(nuevaLetraCodificada); 
      mensajeEncriptado += nuevaLetra;
      console.log(mensajeEncriptado);

    }

    return mensajeEncriptado; /*return devuelve el valor de la variable indicada*/
  },


  decode: (desplazamientoDos, mensajeDos) => {
    let mensajeDesencriptado = "";
    let nuevaLetraDecodificada = "";

    if (typeof Number(desplazamientoDos) !== 'number' || typeof mensajeDos !== 'string') {
      throw new TypeError('Agrumentos inválidos');
    }

    for (let i = 0; i < mensajeDos.length; i++) {
      const letraADecodificar = mensajeDos[i].charCodeAt();

      if (letraADecodificar !== 32) {
        nuevaLetraDecodificada = letraADecodificar - (desplazamientoDos % 26);

        if (nuevaLetraDecodificada < 65) {
          nuevaLetraDecodificada += 26;
        } else if (nuevaLetraDecodificada > 90) {
          nuevaLetraDecodificada -= 26;
        }
      } else {
        nuevaLetraDecodificada = 32;
      }

      const nuevaLetraDos = String.fromCharCode(nuevaLetraDecodificada);
      mensajeDesencriptado += nuevaLetraDos;
      console.log(mensajeDesencriptado);
    }
    return mensajeDesencriptado;
  },

};
export default cipher;



