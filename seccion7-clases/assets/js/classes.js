// Creación de una clase

class Estudiante {
  // Se declaran las propiedades de la clase
  nombre = "";
  apellido = "";
  edad = "";

  // Se declará el método constructor
  // Es el método que se ejecuta en un inicio antes de hacer una nueva instancia
  constructor(nombre = "Sin nombre", apellido = "Sin apellido", edad = "Sin edad") {
    // Se 'inicializan' las propiedades con los valores recibidos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
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
