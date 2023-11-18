'use strict'
//Hacer una función que reciba dos parámetros (miltp y multi)
//ejecute el bucle para analizar la suma necesaria
//para lograr la mult. Al final retornamos la suma.


function multiplicar (multiplicador, multiplicando) {
    let suma=0;
for (let i = 0; i < multiplicador; i++) {
    suma = suma + multiplicando
   
}
return suma;
}




let multiplicador = Number(prompt("Numero 1", ""));
let multiplicando = Number(prompt("Numero 2",""));


let result = multiplicar(multiplicador, multiplicando);
alert (result);
