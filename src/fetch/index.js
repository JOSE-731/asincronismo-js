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



//Utilizando methodo POST

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    //ya no se solicita informarción si no se guardará información
    const response = fetch(urlApi, {
        method: 'POST', //tiene que ir en mayúscula
        mode: 'cors', //cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials: 'same-origin', //es opcional
        headers:{
            'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data) //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
    "title": "Nunca pares de aprender",
    "price": 25,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));

    //Con PUT para actualizar un objeto
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 104 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate));

//Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 103; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });
