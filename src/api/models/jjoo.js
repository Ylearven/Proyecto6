const mongoose = require('mongoose')

const jjooSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true },
    Imagen: { type: String, required: true },
    N_atletas: { type: Number, required: true },
    Medallero: [
      { type: mongoose.Types.ObjectId, ref: 'Medallero', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'jjoo'
  }
)

const jjoo = mongoose.model('jjoo', jjooSchema, 'jjoo')
module.exports = jjoo
