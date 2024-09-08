import express from 'express'
import morgan from 'morgan'

const app = express()// `app` representa nuestra aplicación web que se encargará de manejar las solicitudes HTTP.
const port = 3000 // Definimos el puerto en el que escuchará nuestro servidor HTTP.
app.use(morgan('dev')) //Middleware: Utilizamos `morgan('dev')` para registrar las solicitudes HTTP en la consola.


// Servidor a la escucha en el puerto definido (3000).
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
