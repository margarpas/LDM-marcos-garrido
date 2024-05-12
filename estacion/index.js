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