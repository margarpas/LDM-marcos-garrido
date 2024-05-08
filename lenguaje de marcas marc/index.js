


//1. document.getElementById("count-el").innerText = 5
//Haz click en CTRL P para ir al menu del fichero
//Desde ahi, pon el simbolo del > para ejecutar lo que quiera que tengas
//Clase 10.04.24
/*
1.
// inicializamos el conteo como 0
// Leerá los clics en el botón de incremento
// incrementa la variable de conteo cuando se hace clic en el botón
// cambia el recuento en el HTML para reflejar el nuevo recuento
*/
//1. Aquí, iniciamos el conteo como 0.
//El código que va antes de count es posterior al punto 1, NO EJECUTAR

let countEl = document.getElementById("count-el");
console.log(countEl)

//4. Este count-el lo tomamos del index.html, del h2
let count = 0
//2. utilizamos la funcion de incrementar con la que hemos trabajado, comenzando en 0
function increment(){
    //Queremos que nuestra app funcione como un contador de mano, de manera que sume +1
    count = count + 1
    //5. Por último, pillamos la variable countEl, la cual selecciona por id el elemento h2
    //Con innerText, establecemos/obtenemos el contenido del texto
    countEl.innerText = count    
}


//3. cambia el recuento en el HTML para reflejar el nuevo recuento
/**
 * Ahora queremos que se refleje los cambios de cuenta en el numero de la app
 * para conseguirlo, debemos utilizar el getelementbyId del principio pero primero
 * tenemos que declarar antes del let count = 0, un par de cosas.
 */
/**6. Al trabajar con document.getElementById("count-el");, trabajamos con el DOM
 * ¿Qué es el DOM? DOCUMENT OBJECT MODEL, ES DECIR, COMO USAR JAVASCRIPT PARA MODIFICAR
 * UNA WEB.
 * DOCUMENT? PORQUE ESTÁS MIRANDO A UN DOCUMENTO HTML
 * OBJECT? PORQUE LA PALABRA DOCUMENT ES DE TIPO OBJETO. SI, TIPOS!
 * MODEL? PORQUE ES UNA REPRESENTACION
 */

/**
 *
 * Después de toda la explicación, solamente tengo que tener este código:
 * let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
 */
//7. Creame un boton save() que carga la cuenta fuera del contador
//8. y un save button en el html llamado save-btn, ve a index.html
function save(){
    console.log(count)

}

//1. Saludo Personalizado: Declara una funciÃ³n llamada saludar que reciba un nombre como parÃ¡metro. La funciÃ³n debe imprimir en la consola un saludo, por ejemplo "Hola, [nombre]". //Llama a esta funciÃ³n pasÃ¡ndole tu propio nombre como argumento.
function saludo(nombre) {
    console.log("Hola, " + nombre);

}

saludo("marcos");
//2. Tabla de Multiplicar: Crea una funciÃ³n llamada tablaMultiplicar que reciba un nÃºmero. La funciÃ³n debe imprimir la tabla de multiplicar de ese nÃºmero del 1 al 10 usando un bucle. Por ejemplo, si el nÃºmero es 5, debe imprimir "5 x 1 = 5", "5 x 2 = 10", etc. Normalmente se hace con un for, pero no sabemos hacerlo. Si sabes hacerlo con un for, hazlo.
let numero1 = 5
let numero2 = 0

function tablaMultiplicar() {
    numero2 = numero2 + 1
    resultado = numero1 * numero2console.log( numero1 * 'x' numero2)
}
//3. Convertidor de Temperatura: Declara una funciÃ³n convertirCelsiusAFahrenheit que tome una temperatura en Celsius y la convierta a Fahrenheit, usando la fÃ³rmula \( F = C \times 9/5 + 32 \). La funciÃ³n debe imprimir el resultado en la consola. Usa constantes, no variables. Aunque no lo hayamos dado, mira como declarar una constante en JS.
function fahrenheitCelsiusAFahrenheit (celsius) {
const fahrenheit = celsius * 9/5 + 32;
console.log(`~${celsius}ºC es igual a ${fahrenheit}ºF`);
}
fahrenheitCelsiusAFahrenheit(20)
//4. Calculadora de IVA: Escribe una funciÃ³n calcularIVA que reciba el precio de un producto como argumento. La funciÃ³n debe calcular el 21% de IVA sobre ese precio y retornar el precio final incluido el IVA. Luego, imprime este precio final en la consola.

function sumaIVA(producto){
resultado123=(producto * 0.21) + producto
consoleçlog('Con IVA aplicado son ' + resultadoIVA);

}
sumarIVA(12.95)


//ACTIVIDAD//
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count +=1
    countEl.innerText = count //revisar//

}

function save() {
console.log(count)
count = 0
countEl.innertext = count //revisar//

}