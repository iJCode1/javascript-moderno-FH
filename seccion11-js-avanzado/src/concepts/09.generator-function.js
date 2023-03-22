/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) => {
  
  // Invocación de la función generadora
  // Se requiere almacenar la invocación en una variable
  // Esta no se ejecuta inmediatamente, sino que devuelve un objeto iterador
  const generador = generatorFunction();

  console.log(generador.next()); // {value: 'Hola Mundo', done: false}
  console.log(generador.next()); // {value: 'Estoy probando la función generadora', done: false}
  console.log(generador.next()); // {value: 'Es algo nuevo de JS', done: false}
  console.log(generador.next()); // {value: 'Retorno de la función generadora', done: true}
  
  // Si el done ya es true, el proximo value es undefined
  console.log(generador.next()); // {value: undefined, done: true}

}

function* generatorFunction () { // Devuelve un objeto generador
  yield "Hola Mundo";
  yield "Estoy probando la función generadora";
  yield "Es algo nuevo de JS";

  return "Retorno de la función generadora";

  yield "Esto ya no se ejecuta";
}