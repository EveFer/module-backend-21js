/*
Crear una funcion que reciba un nombre como parametro y devuelva un saludo con dicho nombre

Output -> 'Hola {alguien}, buenas noches'

*/

function greeting(name) {
    return `Hello ${name}, buenas noches` // string
}

const greetFer = greeting('Fers')

console.log(greetFer) // string

const nameXavy = 'Xavy'

const greetXavy = greeting(nameXavy)

console.log(greetXavy)

/*
Crear una función que me devuelva un nombre aleatorio de un arreglo
*/

// declarando/definiendo una funcion
function getNameRandom(){
    const arrayNames = ['Benja', 'Cin', 'Rafa', 'Jona', 'Xavy', 'Annie']
    const min = 0
    const max = arrayNames.length
    const indexRandom = Math.floor(Math.random() * (max - min) + min)
    return arrayNames[indexRandom]
}

// Ejecución de la función
getNameRandom()

console.log('Obteniendo un nombre random')



                    // Pasando como argumento la ejecución de una función
const firstGreet = greeting(getNameRandom())

const nameRandom = getNameRandom()
const secondGreet = greeting(nameRandom)

console.log(firstGreet)
console.log(secondGreet)

// 

function hola(name) {
    return `Hola, ${name}, buenas noches`
}


const x = hola('Xavy') //
console.log('x', x)

// Pasar como referencia
const otraFuncion = hola
console.log(otraFuncion)
const a = otraFuncion
const b =  hola

console.log(b('Rodri'))

// 

const product = () => {}

// Funciones autoejecutables

// factory function -> funciones que general funciones