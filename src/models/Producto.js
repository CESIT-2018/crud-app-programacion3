const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  stock: Number,
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('productos', productoSchema);
