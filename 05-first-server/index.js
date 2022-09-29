
// importamos el module http de node
const http = require('http')

// recibe un requestListener
const server = http.createServer((request, response) => {

    const url = request.url
    console.log('url: ', url)
    const method = request.method
    console.log('method: ', method)

    if(url === '/koders') {
        if(method === 'GET') {
            response.write('Aqui se obtendrán todos los koders')
        }else if(method === 'POST') {
            response.write('Aqui se podrá crear un koder')
        }else {
            response.write('No conozco esta peticion')
        }
    }else {
        response.write('No conozco esta solicitud')
    }

    // response.write('Hola desde mi servidor en node :D')
    response.end() // cerramos la respuesta
})

// Poniendo a escuchar en un puerto al server

/*
    8080 -> ambiente de desarrollo
    http -> 80
    https -> 443
    ssh -> 22
*/
server.listen(8080, () => {
    console.log('Server listening on port 8080')
})

/*
Ejercicio:
    Reaccionar a las siguientes rutas:

    GET /koders -> Response: Aquí estarán todos los koders
    POST /koders -> Response: Aqui puedes crear un koder
    X /x (cualquier otra ruta con cualquier otro método)-> Response: No conozco esta solicitud
*/

