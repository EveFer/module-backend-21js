// const fs = require('fs') -> así importamos en node

// fs.writeFile('koder.txt', 'Hola Koders desde fs de node', (error) => {
//     if(error) {
//         console.log('Ocurrio un error: ', error)
//         return
//     }
//     console.log('Se ha creado el archivo!! :D')
// })

import fs from 'fs' // cambiar la extenxion del archivo a .mjs

fs.writeFile('koder-1.txt', 'Hola Koders!!', (error) => {
    if(error) {
        console.log('Error: ', error)
        return
    }
    console.log('Se ha creado el archivo!! :D')
})

/*
- Práctica 1: Ejercicio de Callbacks del proceso de inscripcion en Kodemia

- Práctica 2: Ir a la documentacion de node del modulo del file system, callback api

    Para Archivos
    - 1º .writeFile
    - 2º .readFile
    - 3º .appendFile
    - 4º .unLink
    - 5º .copyFile

    Para directorios
    - 1º .mkdir
    - 2º readdir
    - 3º rmdir

    Para cada método crear su script .js or .mjs

*/

/*
Práctica file system

A partir de archivo koders.json
Realizar las siguientes acciones:

    1º Crear un función que permita leer el archivo e imprimir en consola el arreglo de Koders
    2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
    3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
    4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
    5º Crear una función que permita obtener a los koders que sean mayores a 25 años

    Req callbacks file Sytems
    JSON.parse() -> convierte de cadena a un objeto js
    JSON.stringify() -> convertir de objeto a string
*/