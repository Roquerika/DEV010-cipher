# DEV010-cipher
## Definición del producto:

   Teniendo en cuenta que los cifrados, códigos y claves son parte esencial en nuestras vidas, abordé este proyecto para conocer sobre el funcionamiento de un cifrado básico como el cifrado caesar que puede dar lugar a cifrados más complejos.
   
   Una vez elegido el proyecto y en función de las opciones de diseño, elegí el enfoque del producto “Mensajes de amor” ya que el amor es una de las emociones más importantes que nos permite vincularnos a las personas, por tanto incitar a la picardía y entusiasmo de cifrar mensajes especiales para un ser querido cuyo significado solo puede ser conocido entre los participantes de dicho mensaje y potenciar las sensaciones de agrado, bienestar y satisfacción en la comunidad que interacciona con esta herramienta, han sido el motivo para desarrollar el diseño y la funcionalidad del producto.

* Usuarios: 
   La interfaz está pensada principalmente para personas que mantienen un vínculo amoroso del [ciclo de la intimidad afectiva] [https://www.todoparaellas.com/sexualidad/2021/4/8/vinculos-amorosos-que-son-cuales-son-las-caracteristicas-de-cada-uno-de-ellos-7592.html] con la pareja, con la familia o con los amigos.

* Objetivo del usuario en relación con tu producto:
   Codificar / decodificar un mensaje cuyo contenido tiene categoría de secreto o confidencial para los participantes en el proceso de comunicación (emisor-receptor).
   
* Respuesta del producto al problema:
   La forma en que el producto resuelve el problema es simple, ya que permite asignar un número de desplazamiento elegido por el usuario que incide en  el alfabeto conocido, desplazando cada carácter del mensaje tantas veces como el usuario lo haya indicado, permitiendo generar un mensaje resultante de composición ilegible de acuerdo a las nuevas letras que conforman el mensaje respecto al alfabeto tradicional, de esta misma manera se puede obtener la revelación de un mensaje previamente codificado conociendo el valor de desplazamiento asignado.

* Duración del proyecto y conocimientos previos:
   El proyecto tuvo una duración de tres-Sprints de cinco días de seis a ocho horas, partiendo de un conocimiento de básico a nulo respecto a las herramientas necesarias para llevarlo a cabo, las cuales fueron: HTML, CSS, JS, Git, Node.js y Visual estudio code.
   
* Definición del producto final a nivel de experiencia y de interfaz:

   Inicialmente se realizó un prototipo de la interfaz en función de los requerimientos a cumplir:
   
   La temática, indicarle al usuario que escogiera entre codificar y decodificar, un espacio para introducir el mensaje original y un espacio para obtener el mensaje codificado/descodificado, también un botón para copiar el mensaje obtenido, se asume que el desplazamiento es fijo para la interfaz y no es una opción variable para el usuario.
   [url("img/Prototipo.png")]

   Posteriormente se realizó una representación inicial del prototipo en HTML y CSS, en este punto se consideró incluir un input tipo número para que el usuario eligiera el valor de desplazamiento del alfabeto tradicional ya que así estaba estipulado en el Readme preestablecido, sin embargo la codificación en JS era escueta por tanto aún no se podía encriptar un mensaje y los caracteres ingresados podían ser mayúsculas, minúsculas, números, símbolos y espacios.
   [url("img/BosquejoEnHTMLyCSS.png")]

   A través de JS se logró realizar la codificación tal que independientemente del valor ingresado por el usuario el desplazamiento ocurriera en función de los caracteres en mayúscula ASCII, en este punto solo se podía codificar un mensaje, aún no se lograba decodificar, de igual manera se estuvo trabajando en un solo archivo JS por desconocimiento sobre trabajar con módulos y la interacción entre estos.

   También se logró delimitar el input de mensaje original para admitir solamente caracteres en mayúsculas, en este punto los caracteres ingresados independientemente que fuese letras minúsculas se observan en el input en mayúsculas, la limitación encontrada era que no se podía ingresar espacios ni caracteres especiales, para esto se trabajó con una función regular de JS que se encontró en la web sin entender muy bien su funcionamiento, salvo por los resultados reflejados en la interfaz.
   [url("img/PrimerResultadoEncriptar.png")]

   Debido a que la interfaz se percibía muy simple, se incorporó un fondo alusivo a la temática “Mensajes de amor”, sin embargo resulto difícil otorgar opacidad al back-ground en CSS por tanto se editó la imagen en ppt y se subió a VSC desde el ordenador, se generó y se otorgó estilos a un select para elegir entre cifrar y descifrar y un botón para ejecutar la función seleccionada por el usuario, en este punto los botones no tenían funcionalidad y en el feedback de la demo se obtuvo la observación de aclarar aún más el fondo o ampliarlo para que ocupara toda la interfaz pero en el main presentara un tonalidad más clara.
   [url("img/CSSyHTMLfondoYbotones.png")]

   Ahora bien, se editó nuevamente el fondo en ppt y se cargó la imagen a VSC desde el ordenador, se modificó la propiedad opacidad en el main, así como también la imagen principal denominada cupido.

   Se logró generar el código JS para decodificar un mensaje previamente codificado con un desplazamiento conocido por el usuario, se añadió un botón limpiar con funcionalidad en JS, se cambió el selector y el botón ejecutar por dos botones enlazadas a las funciones codificar y decodificar.

   La limitación encontrada era que el mensaje se cifraba en tiempo real, por tanto se debía modificar la función a manera de que esta dependiera del clic en el botón seleccionado y así resolver la decodificación en función del desplazamiento seleccionado, pues como partí del código para codificar, solo codificaba y comentando la expresión regular de la función codificar logré incorporar los espacios pero eran de codificación también.

   Asistí a una sesión corta de ayuda con un coach para conversar sobre la ubicación de la función de los botones en JS, el mantener los espacios del input de mensaje original en el mensaje resultante y hacer stop si se quiere a la función codificar para que no se ejecutara en tiempo real, la verdad no entendí mucho y el tiempo fue muy corto pero me sirvió de guía para buscar y lograra solucionar parcialmente el problema, indico parcialmente ya que si bien se pueden ingresar los espacios y se pueden obtener de la misma forma en el mensaje resultante, no tengo soporte para números, caracteres espaciales y la Ñ, antes estaba limitado la incorpación de estos en el input original y no se podían escribir, ahora se pueden incorporar al input de mensaje original obteniendo la codificación de estos en función del desplazamiento indicado por el usuario y al intentar descifrarlos no se generan los caracteres original, por tanto el soporte de la interfaz está dirigida solo para caracteres alfabéticos en minúscula y en mayúscula debido al uso de UpperCase en JS.

   También se agregó un footer como extra de acuerdo con lo observado en las demos de mis compañeras y para otorgarle personalidad.
   El desafío más grande fue trabajar con módulos, debido a que no comencé de tal manera y las funciones desarrolladas fluían en un solo módulo JS, una vez desbloqueado este conflicto la interfaz quedó funcional.

   [url("img/InterfazFinal.png")]

* Aplicación de tests unitarios:
   Este punto también representó un gran desafío y una enseñanza importante: “Seguir al pie de la letra el Readme preestablecido y realizar el test a medida que se desarrolla el código para entender los requerimientos específicos del proyecto”.

   Inicialmente desconocía como aplicar el test, para ello solicité ayuda a varias compañeras por slack, finalmente logré canalizar la información recibida e implementar los test requeridos, me funcionó para indentar el código, también para no prestar atención a las alertas generadas en consola de acuerdo a lo informado por una compañera que ya había realizado los test.
   
   El principal problema ocurrió al no aprobar ningún test de 7, entendí que la forma creado el objeto en el módulo cipher.js era incorrecta al igual que la forma de importarlo en el módulo index.js, por tanto lo corregí y aprobé ese test, posteriormente me encontré con la dificultad de que al probar con un mensaje original y un desplazamiento random la función codificar no devolvía lo esperado de esa forma noté que tenía que modificar los argumentos de la función, en este caso invertirlos para coincidir con las especificaciones del test, pero me encontré como otra limitante la función bucle for estaba establecida en el módulo index.js, por tanto al ingresar “ABCDEFGHIJKLMNOPQRSTUVWXYZ” con un desplazamiento de 33 solo se obtenía la letra “H”, empleando console.log, se encontró que el texto completo se obtenía  a partir de index.
   js, se intentó solucionar con múltiples modificaciones, al igual que se consultó por slack y se trabajó en función de una sugerencia de un coach, sin embargo no logré resolverlo.

   Finalmente con chat GPT se logró incorporar un bucle for que permitiera obtener la codificación completa a partir de la función codificar en cipher.js, se realizaron los cambios pertinentes en la función decodificar y ahora se aprobaban 5 de 7 test.

   El último error estaba asociado a la limitación de los argumentos de las funciones codificar/decodificar, respecto a aceptar solo números y texto, antes de agregar el for al objeto cipher daba ok, pero después no, no supe porque ni supe resolverlo, para esto revisé algunos repositorios de mis compañeras en encontré una función if explicada que empleé en mis funciones codificar/decodificar del objeto cipher y así dar respuesta al requerimiento del test.

   Intenté quitar el for de index.js y no logré funcionalidad en la interfaz ni como asociar el objeto cipher a index.js de una manera distinta ala que tenía establecida, por tanto la versión final aunque funcional contiene este erro que no pude solucionar, pero que dan respuesta tanto a los requerimientos del test como a la funcionalidad de la interfaz. 
   [url("img/test.png")]

 * Webs consultadas han sido las siguientes:

* [rot-13](https://parzibyte.me/blog/2019/05/24/rot-13-java-algoritmo-variantes-rot-1/)
* [Eventos en JS](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
* [falso y falso es falso en JS](https://stackoverflow.com/questions/44206185/javascript-false-false-is-false)
* [Expresiones regulares en JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_expressions)
* [String en JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
* [iniciando Jest](https://jestjs.io/es-ES/docs/getting-started)
* [Instalación de Jest](https://www.youtube.com/watch?v=VpYSV2D-9NM)
* [Indentar el código en VSC](https://programaraciegas.net/?p=992#:~:text=En%20el%20caso%20de%20Windows,es%20Control%2BMay%C3%BAsculas%2BI)
* [Chat GPT] (https://chat.openai.com)
* [rix] (https://hashnode.com/rix)
* [Etiqueta background position en CSS](https://uniwebsidad.com/libros/referencia-css2/background-position)
* [Etiqueta background position en CSS](https://developer.mozilla.org/es/docs/Web/CSS/background-position)  
* [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [Modelo básico de eventos](https://docplayer.es/15175824-Eventos-ii-modelo-basico-de-eventos.html)
* [JS] (https://www.todo-argentina.net/cursos/javascript/pagina56.php)
* [Objetos y eventos en JS](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=843:objeto-event-javascript-type-target-currenttarg-timestamp-clientx-pagex-button-preventdefault-cu01160e&catid=78&Itemid=206)
* [Tutorial formularios HTML] (https://www.htmlquick.com/es/tutorials/forms/2.html)
* [Selectores CSS par input](https://desarrolloweb.com/faq/que-selector-css-usar-para-seleccionar-un-campo-input-que-tiene-el-atributo-namesearch)
* [atributo height en CSS] (https://developer.mozilla.org/es/docs/Web/CSS/height)
* [Cómo encriptar y desencriptar usando JS](https://www.youtube.com/watch?v=6uuSceftOe4)
* [Convertidor cifrado césar usando HTML, CCS y JS](https://www.youtube.com/watch?v=hlh1kHlOqYs)
* [Codificando en JS](https://www.youtube.com/watch?v=yTt1ZT9KKHc)
* [función para cifrado césar en JS](https://donnierock.com/2023/04/13/funcion-de-javascript-para-emular-el-cifrado-cesar/)
* [Cifrado césar JS](https://www.lawebdelprogramador.com/codigo/JavaScript/3270-Cifrado-Cesar.html#google_vignette)
* [Cifrado césar HTML, CSS y JS](https://codepen.io/jersonramirezortiz/pen/OJJGLXy)
* [Reto resuelto de programación cifrado césar](https://www.youtube.com/watch?v=67z0sZX9iok)
* [Cómo usar break y continue en JS](https://www.digitalocean.com/community/tutorials/how-to-use-break-continue-and-pass-statements-when-working-with-loops-in-python-3-es)
* [Uso de getElementByClassName en JS](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName)
* [Complemento para botón limpiar](https://es.stackoverflow.com/questions/49635/como-limpiar-un-campo-concreto-en-javascript)
* [Edición de botones con CSS](https://www.w3bai.com/es/css/css3_buttons.html#gsc.tab=0)
* [Condicionales JS](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
* [Cifrado césar | Tutotial Javascript](https://www.youtube.com/watch?v=7A4pdwpT10Q)
* [Cifrado césar encriptado y desencriptado Web App con JS | criptografía en JS](https://www.youtube.com/watch?v=CNDijVw-tSQ)
* [Curso de Js desde cero (completo)- Nivel Junior soy Dalto](https://www.youtube.com/watch?v=z95mZVUcJ-E&t=33895s)
