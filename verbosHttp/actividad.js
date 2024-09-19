import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Ruta GET para obtener productos
app.get('/productos', (req, res) => {
    res.send('Obteniendo todos los productos');
});

// Ruta POST para crear un nuevo producto
app.post('/productos', (req, res) => {
    res.send('Producto creado exitosamente');
});

// Ruta PUT para actualizar un producto por ID
app.put('/productos/:id', (req, res) => {
    res.send(`Producto con ID ${req.params.id} actualizado`);
});

// Ruta DELETE para eliminar un producto por ID
app.delete('/productos/:id', (req, res) => {
    res.send(`Producto con ID ${req.params.id} eliminado`);
});

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
