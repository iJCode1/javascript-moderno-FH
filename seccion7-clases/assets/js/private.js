/*
  Se pueden declarar propiedades y métodos privados
  Por lo que estos solo podran ser llamados o accedidos desde la misma clase
*/

class Rectangulo{
  base = 0;
  altura = 0;
  areaPublica = 0;
  
  // Crear propiedad privada
  #areaPrivada = 0;

  constructor(base, altura){
    this.base = base;
    this.altura = altura;

    this.areaPublica = this.base * this.altura;
    this.#areaPrivada = this.base * this.altura;
    
    // Pero si se pueden invocar métodos privados en la misma clase
    this.#modificarArea();
  }

  // Crear método privado
  #modificarArea(){
    this.#areaPrivada = 77;
    console.log("Área privada modificada");
  }
}

const r1 = new Rectangulo(5, 10);
console.log(r1); // Rectangulo {base: 5, altura: 10, areaPublica: 50, #areaPrivada: 77}

// Si una propiedad no fuera privada
// Se podra cambiar el valor de la propiedad desde una instancia
r1.areaPublica = 20;
console.log(r1); // Rectangulo {base: 5, altura: 10, areaPublica: 20, #areaPrivada: 77}

// En cambio, si es privada, no lo permitira y arrojara un error al intentarlo.
// r1.#areaPrivada = 90; // Uncaught SyntaxError: Private field '#areaPrivada' must be declared in an enclosing class

// Invocar métodos privados también devolvera un error
// r1.#modificarArea(); // Uncaught SyntaxError: Private field '#modificarArea' must be declared in an enclosing class