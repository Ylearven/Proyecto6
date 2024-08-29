const mongoose = require('mongoose')
const jjooData = require('../../data/jjoo')
const jjoo = require('../../api/models/jjoo')

const Semilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ylenia:6L0zISJX1bGsr06s@cluster0.lw4js.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('conectado a Mongo')
    for (const data of jjooData) {
      data.Medallero = data.Medallero.map((id) => {
        const trimmedId = id.trim()
        if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
          throw new Error('Invalid ObjectId:${trimmedId')
        }
        return new mongoose.Types.ObjectId(trimmedId)
      })
      await jjoo.updateOne(
        { Nombre: data.Nombre },
        { $set: data },
        { upsert: true }
      )
    }
    console.log('Datos insertados y actualizados con éxito')
  } catch (error) {
    console.log('ERROR', error)
  } finally {
    await mongoose.disconnect()
    console.log('Desconectado de la BBDD')
  }
}
Semilla()
