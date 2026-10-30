
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const recetas = [
    { id: 1, nombre: 'Tacos de carne asada', tiempo: '40 min', ingredientes: 'Carne, tortillas, cebolla, cilantro, limón' },
    { id: 2, nombre: 'Guacamole', tiempo: '10 min', ingredientes: 'Aguacate, jitomate, cebolla, chile, limón' },
    { id: 3, nombre: 'Quesadillas de harina', tiempo: '15 min', ingredientes: 'Tortillas de harina, queso, frijoles' },
    { id: 4, nombre: 'Caldo de pollo', tiempo: '60 min', ingredientes: 'Pollo, zanahoria, papa, calabaza, cilantro' },
    { id: 5, nombre: 'Agua de jamaica', tiempo: '20 min', ingredientes: 'Flor de jamaica, agua, azúcar, hielo' }
];

app.get('/', (req, res) => {
    res.send('API Recetas funcionando');
});

app.get('/api/recetas', (req, res) => {
    res.json(recetas);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor en puerto ' + PORT);
});
