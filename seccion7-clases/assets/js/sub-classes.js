class Persona{
  static _count = 0;

  static get getCount(){
    return Persona._count;
  }

  static mensaje(){
    return `${Persona._count} instancias`;
  }

  nombre = '';
  apellido = '';
  frase = '';
  colorFav = ''

  constructor(nombre = 'Sin definir', apellido = 'Sin definir', frase = 'Sin definir', colorFav = 'Sin definir'){
    this.nombre = nombre;
    this.apellido = apellido;
    this.frase = frase;
    this.colorFav = colorFav;
  }

  set setFrase(frase){
    this.frase = frase;
  }

  mostrarFrase(){
    console.log(`La frase de ${this.nombre} es: ${this.frase}`);  
  }
}

// instancias
const Joel = new Persona('Joel', 'Dome', 'Paso a paso', 'Morado');
console.log(Joel);
Joel.mostrarFrase(); // La frase de Joel es: Paso a paso
Joel.setFrase = "Todo es posible";
Joel.mostrarFrase(); // La frase de Joel es: Todo es posible

/*
  En javascript una clase puede extender de otra
  haciendo uso de la palabra reservada 'extends'
  Con esto hereda las propiedades y métodos que se 
  encuentran en la clase 'padre'
*/

class Estudiante extends Persona{
  numControl = '';

  // Como se hereda su constructor, se hace lo siguiente
  constructor(nombre, apellido, frase, numControl){
    super(nombre, apellido, frase);
    
    // Despues de llamar el constructor del padre, ya se pueden inicializar 
    // las variables de la clase actual
    this.numControl = numControl;
  }

  // Si heredan sus métodos
  // Pero en caso de 'sobrescribir' un método, se hace lo siguiente
  mostrarFrase(){
    console.log(`Soy ${this.nombre} y este es el nuevo mensaje de la clase Estudiante`);
    super.mostrarFrase();
  }
}

// Instancia se sub-clase
const estJoel = new Estudiante('Joel', 'Dome', 'Paso a paso', '0000');
console.log(estJoel); // Estudiante {nombre: 'Joel', apellido: 'Dome', frase: 'Paso a paso', colorFav: 'Sin definir', mostrarFrase: ƒ, …}
estJoel.mostrarFrase(); 
/*
  Soy Joel y este es el nuevo mensaje de la clase Estudiante
  La frase de Joel es: Paso a paso
*/