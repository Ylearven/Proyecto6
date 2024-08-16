const mongoose = require('mongoose')

const medalleroSchema = new mongoose.Schema(
  {
    Oro: { type: Number, required: true, min: [0] },
    Plata: { type: Number, required: true, min: [0] },
    Bronce: { type: Number, required: true, min: [0] },
    Diploma: { type: Number, required: true, min: [0] }
  },
  {
    timestamps: true,
    collection: 'Medallero'
  }
)

const Medallero = mongoose.model('Medallero', medalleroSchema, 'Medallero')
module.exports = Medallero
