//Para trabajar con fecth hay que instalarlo: npm i node-fetch
import fetch from 'node-fetch';
const API1 = 'https://official-joke-api.appspot.com/';
const API2 = 'https://api.escuelajs.co/api/v1';

//Con una sola solicitud
//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi){
    return fetch(urlApi);
};
//el llamado
fetchData(`${API1}/random_joke`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .then(() => {
        console.log('hola');
    }) //se pueden anidar múltiples .then
    .catch(error => console.log(error));


//Con varias solicitudes

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchDataV2(urlApi){
    return fetch(urlApi);
};

fetchDataV2(`${API2}/products`)
    .then(response => response.json()) //se hace la conversión a un objeto json
    .then(products => {
        console.log(products);
        return fetchDataV2(`${API2}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
    })
    .then(response => response.json()) //se vuelve traer la data
    .then(product => {
       console.log(product.title);
        return fetchDataV2(`${API2}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err)) //detectar un error
    .finally(() => console.log('Finally')); //es opcional para mostrar que se terminó la solicitud
