import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))
app.use(express.json())

const port = 3000

let usuarios = [{
    "id": 1,
    "nombre": "Juan Pérez",
    "edad": 25,
}]

app.get('/usuarios', (req, res) => {
    // res.send('Se ha obteniendo un usuario') Metodo para Obtener un texto
    res.json(usuarios)// Metodo para obtener un json
})

app.post('/usuarios', (req, res) => {
    console.log(req.body) // Muestra en la consola el cuerpo de la solicitud

    const newUser = { ...req.body, id: usuarios.length + 1 }; //Crear un nuevo usuario con los datos recibidos en `req.body`, y añadirle un `id` que es la longitud actual del array `usuario` + 1.
    usuarios.push(newUser); // 2. Agregar el nuevo usuario al array `usuario`.
    res.send('Se ha creado un usuario'); // 3. Enviar una respuesta al cliente indicando que el usuario ha sido creado.
});

app.put('/usuarios/:id', (req, res) => {

    const newData = req.body
    const usuariosFound = usuarios.find((usuario) => usuario.id === parseInt(req.params.id))


    if (!usuariosFound) return res.status(404).json({ message: 'Usuario no encontrado' })


    usuarios = usuarios.map(usuario => usuario.id === parseInt(req.params.id) ? { ...usuario, ...newData } : usuario)// Recorre el arreglo de productos por cada producto compara su propiedad ID con el req.params si es true actualiza sus valores y en caso contrario conserva el usuario tal y como esta.

    console.log(usuarios)

    res.json({
        message: 'Se ha actualizado un usuario'
    })
})

app.delete('/usuarios/:id', (req, res) => {

    const usuariosFound = usuarios.find((usuario) => usuario.id === parseInt(req.params.id))

    if (!usuariosFound) return res.status(404).json({ message: 'Usuario no encontrado' })

    usuarios = usuarios.filter(usuario => usuario.id !== parseInt(req.params.id))
    console.log(usuarios)
    res.sendStatus(204)//significa todo esta bien pero que la respuesta no tiene contenido
})

app.get('/usuarios/:id', (req, res) => {
    const usuariosFound = usuarios.find((usuario) => usuario.id === parseInt(req.params.id))

    if (!usuariosFound) return res.status(404).json({ message: 'Usuario no encontrado' })

    console.log(usuariosFound)
    res.json(usuariosFound)
})


app.listen(port, () => {
    console.log(`Servidor a la escucha en el puerto ${port}`)
})