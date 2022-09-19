//Callbacks: Una función de callback es una función que se pasa a otra función como un argumento, que luego 
//se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callbackSum) {
    return callbackSum(num1, num2);
};

console.log(calc(2, 517, sum))


//Callback: una funcion que recibe otra funcion para ser ejecutada, ejemplo de una forma que nos trae por defecto js
//que utiliza callbacks:

function saludo(nombre){
    console.log(`Hola ${nombre}`);
}

setTimeout(saludo, 2000, "Jose");