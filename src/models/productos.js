const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: "Capture el id del producto."
        },
        nombre:{
            type: String,
            required: "Capture el nombre del producto."
        },
        path:{
            type: String,
            required: "Inserte una direccion"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Productos', productosSchema);