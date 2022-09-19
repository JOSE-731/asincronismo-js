//Promesas es ese bloque de codigo que se ejecuta de forma asíncronas, 
//por lo que el código continuará su ejecución normalmente y luego dirá si la promesa 
//se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.

//Las promesas pueden suceder:
//Ahora
//En el futur
//Nunca


//ejemplo de contar vacas
const cows = 15; //valor inicial de vacas

const countCows = new Promise(function (resolve, reject) {
    //El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
    //El parámetro reject, se usa en el que caso de que no funcione.

    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject("There is no cows on the farm");
    }
    
});

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));
//se usan arrow function () =>