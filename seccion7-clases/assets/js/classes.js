// Creación de una clase

class Estudiante {
  // Propiedades estáticas
  static _conteo = 0;

  // set estáticos
  static set setConteo(conteo){
    Estudiante._conteo = conteo;
  }

  // get estáticos
  static get getConteo(){
    return Estudiante._conteo + " instancias"
  }

  // Métodos estáticos
  static mensajeEstatico(){
    console.log("Soy un mensaje estático");
  }

  // Se declaran las propiedades de la clase
  nombre = "";
  apellido = "";
  edad = "";
  comida = "";

  // Se declará el método constructor
  // Es el método que se ejecuta en un inicio antes de hacer una nueva instancia
  constructor(nombre = "Sin nombre", apellido = "Sin apellido", edad = "Sin edad") {
    // Se 'inicializan' las propiedades con los valores recibidos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    Estudiante._conteo ++;
  }

  // Métodos setters y getters

  set setNombre(nombre){
    this.nombre = nombre;
  }

  get getNombre(){
    return this.nombre;
  }

  set setComidaFavorita(comida){
    this.comida = comida;
  }

  get getComidaFavorita(){
    return `La comida favorita de ${this.nombre} es ${this.comida}`
  }

  // Creación de métodos (funciones de un objeto)
  saludar() {
    console.log(`Hola mundo, mi nombre es: ${this.nombre}`);
  }

  decirEdad() {
    // Ejecutar un método dentro de otro
    this.saludar();

    console.log(`Tengo ${this.edad} años`);
  }
}

// Instanciando desde una clase ('new')
const julieta = new Estudiante("Julieta", "Carmona", 27);
console.log(julieta); // Estudiante {nombre: 'Julieta', apellido: 'Carmona', edad: 27}
console.log(julieta.nombre); // Julieta
julieta.saludar(); // Hola mundo, mi nombre es: Julieta

const pepe = new Estudiante("Pepe", "Jimenez", 18);
pepe.decirEdad();
/*
  Hola mundo, mi nombre es: Pepe
  Tengo 18 años
*/

// Haciendo uso de los métodos set y get de una clase
julieta.setNombre = "JulietaEditada";
console.log(julieta); // Estudiante {nombre: 'JulietaEditada', apellido: 'Carmona', edad: 27}

console.log(julieta.getNombre); // JulietaEditada

julieta.setComidaFavorita = "Tacos";
console.log(julieta); // Estudiante {nombre: 'JulietaEditada', apellido: 'Carmona', edad: 27, comida: 'Tacos'}

console.log(julieta.getComidaFavorita); // La comida favorita de JulietaEditada es Tacos

/*  
  Algo curioso que pasa con las clases es que en este punto se pueden 
  "crear" nuevas propiedades como si de un 'set' se tratara. 
  Pero esa propiedad solo vivira en la instancia que se añadio, en las demás no.
*/

julieta.correr = true;
console.log(julieta); // Estudiante {nombre: 'JulietaEditada', apellido: 'Carmona', edad: 27, comida: 'Tacos', correr: true}

pepe.setComidaFavorita = "Papas"
console.log(pepe); // Estudiante {nombre: 'Pepe', apellido: 'Jimenez', edad: 18, comida: 'Papas'}

// Accediendo a propiedades, set, get y métodos estáticos
console.log(Estudiante._conteo); // 2
Estudiante.setConteo = 9;
console.log(Estudiante._conteo); // 9
console.log(Estudiante.getConteo); // 9 instancias
Estudiante.mensajeEstatico(); // Soy un mensaje estático
/*
  Se pueden crear propiedades estáticas nuevas (aunque esta forma no es la mejor)
  Es más fácil leer el código si estás son definidas en la misma clase
*/
Estudiante._nota = 90;
console.log(Estudiante._nota); // 90