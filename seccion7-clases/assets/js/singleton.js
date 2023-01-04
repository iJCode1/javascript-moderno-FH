/*
  Singleton es un patron de diseño en el que 
  se crea una clase y esta solo puede ser instanciada 1 única vez.
  Es decir, no podemos tener más objetos de instancia y en caso de hacerlo,
  singleton devolvera la primer instancia creada (el espacio en memoria).
  Para implementarlo solo hay que hacer una validación,
  Si ya se tiene una instancia, se retorna.
  Si no, se crea una nueva instancia.
*/

class Singleton {
  nombre = "";
  static instancia; // undefined
  // !undefined = true
  // !true = false

  constructor(nombre = "") {
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    this.nombre = nombre;
    Singleton.instancia = this;

    // return this; // Un constructor tras banbalinas hace un retorno de la instancia
  }
}

// Al ser un singleton, se retornara siempre la misma instancia (primera)
const s1 = new Singleton("Joel");
console.log(s1); // Singleton {nombre: 'Joel'}

const s2 = new Singleton("Pepe");
console.log(s2); // Singleton {nombre: 'Joel'}

const s3 = new Singleton("Julieta");
console.log(s3); // Singleton {nombre: 'Joel'}
