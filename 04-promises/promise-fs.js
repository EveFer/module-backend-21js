/*
Prácticas Promesas: 
    2. Práctica del CRUD de Koders con file System con promesas:
        A partir de archivo koders.json
        Realizar lo siguiente:

            1º Crear un función que permita leer el archivo e imprimir en consola el arreglo de Koders
            2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
            3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
            4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
            5º Crear una función que permita obtener a los koders que sean mayores a 25 años

            JSON.parse() -> convierte de cadena a un objeto js
            JSON.stringify() -> convertir de objeto a string

            async / await
*/

const fs = require('fs')

async function updateKoderById(idKoder, newData) {
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8')
    const json = JSON.parse(dataFile)

    const koderFound = json.koders.find((koder) => koder.id === idKoder)

    console.log('koderFound: ', koderFound)

    // spread operator
    const koderUpdated = {...koderFound, ...newData}
    console.log('koderUpdated: ', koderUpdated)

    const newKodersToUpdate = json.koders.filter((koder) => koder.id !== idKoder)
    // console.log('koders sin rafa: ', koders)

    newKodersToUpdate.push(koderUpdated)
    json.koders = newKodersToUpdate
    console.log('Koders actualizado')
    console.log(json.koders)

    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2))
}

const newDataRafa = {
    age: 24
}
updateKoderById(1, newDataRafa)
    .catch((error) => {
        console.error('Error: ', error)
    })


// spread operator

// let objetoFer = {
//     name: 'Fernanda',
//     lastName: 'Palacios'
// }

// const otherObject = {
//     name: 'Evelyn'
// }

// objetoFer = {...objetoFer,...otherObject}

// console.log(objetoFer)

// const newObject = {...objetoFer, ...otherObject}


// console.log(newObject)