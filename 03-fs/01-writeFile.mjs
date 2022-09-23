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
- Ejercicio de Callbacks del proceso de inscripcion en Kodemia

- Ir a la documentacion de node del modulo del file system, callback api

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