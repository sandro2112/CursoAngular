(() => {

    // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  const edad = 23;

  let PERSONAJE = {
    nombre: nombre,
    edad: edad
  };


  // Cree una interfaz que sirva para validar el siguiente objeto
  interface Heroe{
      nombre:string;
      artesMarciales:string[];
  }
  let batman : Heroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }
  

  // Convertir esta funcion a una funcion de flecha
  
  const resultadoDoble = (a: number,b:number) => (a+b) *2

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger(nombre: string, poder?:string, arma:string = 'arco'){
        
    var mensaje;
    if( poder ){
       mensaje = `${nombre} tiene el poder de ${poder} y un arma ${arma}`
      
    }else{
        mensaje = `${nombre} tiene un ${arma}`
      //cambié poder por arma, ya que en esta condicional no hay poder pero sí arma.
    }
    
    }

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.
    // console.log(`nombre es ${nombre} y su rol es ${rol}`)
    class rectangulo{
        base: number;
        altura: number;
 
    
        constructor(base:number, altura: number){
            this.base = base;
            this.altura = altura;
        }
    
        CalcularArea(){
            return (this.base * this.altura);
        }
    
    }
    
})();
