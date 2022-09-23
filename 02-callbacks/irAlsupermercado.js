/*
    Acciones:
    1º Ir al supermercado - 5000ms
    2º Pagar la despensa - 3000ms
    3º Llegar casa - 4000ms

    callback
*/

function goToSuperMArket(callback) {
    console.log('Llendo al supermercado...')
    setTimeout(() => {
        // Ejecuta el callback
        callback(null, 'Hola, ya llegue al supermercado')
        // callback('Hubo una manifestación!! D:', null)
    }, 5000)
}

function payThings(callback) {
    console.log('Haciendo fila para pagar...')
    setTimeout(() => {
        // callback(null, 'Hola, Ya pague la despensa')
        callback('Se me olvido el monedero', null)
    }, 3000)
}

function arriveHome(callback) {
    console.log('Llendo a casa...')
    setTimeout(() => {
        callback(null, 'Hola, Ya estoy en casa :D')
    }, 2000)
}

goToSuperMArket((error, message) => {
    if(error) {
        console.log('Ah ocurrido algo: ', error)
        return // retorna undefined
        // salidas tempranas
    }
    console.log(message)
    // ya llego al supermercado

    payThings((error, message) => {
        if(error) {
            console.log('Error: ', error)
            return
        }

        console.log(message)

        arriveHome((errorArriveHome, messageHome) => {
            if(errorArriveHome) {
                console.log('Error: ', errorArriveHome)
                return
            }

            console.log(messageHome)
        })
    })
})

// callback hell












