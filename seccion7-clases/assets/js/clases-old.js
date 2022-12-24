// Problemática al uso de 'clases' en el pasado (antes de ES6)

// Lo primero se creaba una función que funcionaba como una 'clase'
function Persona(nombre, edad){
  this.nombre = nombre
  this.edad = edad
  this.imprimirDatos = function (){
    console.log(`${this.nombre} - ${this.edad}`)
  }
}

// Se crean instancias de la 'clase' con la palabra 'new'
const julieta = new Persona('Julieta', 23)

console.log(julieta); // Persona {nombre: 'Julieta', edad: 23, imprimirDatos: ƒ}
julieta.imprimirDatos() // Julieta - 23

const pepe = new Persona('Pepito', 14)
console.log(pepe); // Persona {nombre: 'Pepito', edad: 14, imprimirDatos: ƒ}
console.log(pepe.edad); // 14