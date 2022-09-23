/*
Práctica:
Proceso de inscripción a Kodemia

    1º recibir información | entrevista 
    2º Enviar la oferta 
    3º Inscripción
    4º prebootcamp

    Objetivo: Plasmar en funciones y callbacks dicho proceso

    const inscriptionKodemiaCin = {
        name: 'Cin Ruiz',
        isInterviewed: false, // true
        hasOffer: false,
        isInscript: false,
        canTakeClass: false
    }
*/

const inscriptionKodemiaCin = {
    name: 'Cin Ruiz',
    isInterviewed: false, // true
    hasOffer: false,
    isInscript: false,
    canTakeClass: false
}

function takeAInterview(koderToInterview, callback) {
    console.log(`Entrevistando a ${koderToInterview.name}`)
    setTimeout(() => {
        let error = null

        koderToInterview.isInterviewed = true

        if(!koderToInterview.isInterviewed) {
            error = `No se logro entrevistar a ${koderToInterview.name}`
        }

        callback(error, koderToInterview)
    }, 3000)
}

function doOffer(koderToOffer, callback) {
    console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`)
    setTimeout(() => {
        let error = null
        koderToOffer.hasOffer = true

        // Operador ternario
        // error = !koderToOffer.hasOffer
        //             ? `${koderToOffer.name} no tiene una oferta` // si cumple 
        //             : null // si NO cumple

        // Sintaxis del operador ternario
        // (condicion)
        //   ? -> si cumple la condicion
        //   : -> Si NO cumple la condicion
        
        // Operador and and
        error = !koderToOffer.hasOffer && `${koderToOffer.name} no tiene una oferta`
        callback(error, koderToOffer)
    }, 4000)
}

takeAInterview(inscriptionKodemiaCin, (errorToInterview, koderInterviewed) => {
    if(errorToInterview) {
        console.log('Error entrevista: ', errorToInterview)
        return
    }

    console.log(`${koderInterviewed.name} ah sido entrevistada!! `)
    console.log(koderInterviewed)
    // Oferta
    doOffer(koderInterviewed, (errorDoOffer, koderWithOffer) => {
        if(errorDoOffer) {
            console.log('Error oferta: ', errorDoOffer)
            return 
        }
        console.log(`${koderWithOffer.name} Ya tiene una oferta!! `)
        console.log(koderWithOffer)
    })
})

