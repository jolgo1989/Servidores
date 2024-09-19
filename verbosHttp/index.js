import express from 'express'
import morgan from 'morgan'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(express.json())

//Verbos http
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/usuario', (req, res) => {
    res.send('Se a creado un producto')
})

app.put('/usuario', (req, res) => {
    res.send('Se ha actualizado un producto')
})

app.delete('/usuario', (req, res) => {
    res.send('se ha eliminado un producto')
})

app.delete('/usuarioID/:id', (req, res) => {
    console.log(req.params.id)
})



app.post('/request', (req, res) => {
    res.send('Se a creado un request')
    console.log(req.originalUrl) // Muestra en la consola la URL original solicitada.
    console.log(req.headers) // Muestra en la consola los headers enviados con la solicitud.
    console.log(req.body)  // Muestra en la consola el cuerpo de la solicitud (si existe).
})

//Metodo cuando un usuario no ha sido encontrado y asignar un codigo de estado
app.use((req, res) => {
    res.status(404).send('Usuario no encontrado')
})

//Metodo para obtener una imagen
app.get('/imagen', (req, res) => {
    res.sendFile('./img.jpg', {
        root: import.meta.dirname //Obtener la doreción del archivo(img.jpg)
    })
})



app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})


