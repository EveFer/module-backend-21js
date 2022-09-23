// Callback -> Es la declaración/definicion de una funcion que pasa
// como parametro a otra función para ser ejecutada posteriormente


// Definción de la funcion - sincrona
function irAlSuperMercado(callback) {
    console.log('Llendo al supermercado...')
    console.log('Llegue al supermercado')
    const mensaje = callback(null, 'Hola. Ya estoy en el supermercado')
    console.log(mensaje)
}

// Declaración de la funcion - 
function avisar(error, mensaje) {
    if(error) {
        console.log('Ah ocurrido un error: ', error)
    }else {
        return mensaje
    }
}


//irAlSuperMercado(avisar()) //-> la ejecución de la funcion -> string ❌

// firma -> La forma en que una función recibre sus parametros

/*
function cb(error, data) {
    if(error) {
        manejo del error
    }
    continuar
}
*/

/*
    1º Cuando hayamos llegado
    2º Avisar cuando haya comprado la despensa
    3º Avisar cuando haya llegado a casa
*/

// sincronas
function pay(callback) {
    console.log('Pagando la despensa...')
    const mensaje = callback(null, 'Hola, Ya pague la despensa')
    console.log(mensaje)
}

// sincronas
function arriveHome(callback) {
    console.log('Llegando a casa...')
    const mensaje = callback(null, 'Hola, Ya estoy en casa san@')
    console.log(mensaje)
}

// sincrona
irAlSuperMercado(avisar) // ✅
pay(avisar)
arriveHome(avisar)

// sincrono
console.log('Hola!!')
console.log('¿cómo estan?')
const num1 = 10
const num2 = 20
console.log('sum: ', num1 + num2)

// Asincronismo en JS

// Asincrono

console.log('Hola Koders!!!')

setTimeout(() =>{
    console.log('Hola Rafa!!')
    //  
},2000)

console.log('Buenas noches amigos!!')
console.log('Descansen Koders')

// Caso de uso

// const useCreated = createUser() //asincrono

// const userTemplate = `${useCreated.name} ${useCreated.lastName}`

let numero1
let numero2

// Jona selecionar dos numero
console.log('Jona eligiendo numeros')
setTimeout(() =>{
    numero1 = 20
    numero2 = 30
    console.log('Jonatan ya eligio los numeros')
}, 3000)

console.log('sum: ', numero1 + numero2)

/*
Ejercicio: 
    1º Ir al supermercado -> 5s 
    2º Pagar la despensa -> 4s
    3º Llegando a casa -> 5s

    Que cada una de estas acciones sean asincronas
*/


// Declarando/definición de la funcion

                // parametros
function holaKoders(name) {
    return 'Hola ' + name
}

// Ejecutando la función
    // argumentos
holaKoder('Annie')



// 

function saludar(despedirme) {
    console.log('Rafa esta saludando')
    despedirme()
}

// Firma de un metodo: Es la forma en la que va a recibir la funcion sus parametros

saludar((error, data) => {
    console.log('Rafa se esta despidiendo')
})

// callbacks -> son funciones anonimas
