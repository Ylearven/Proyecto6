const MedalleroData = require('../../data/Medallero')
const Medallero = require('../../api/models/Medallero')
const mongoose = require('mongoose')

const Semilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://ylenia:6L0zISJX1bGsr06s@cluster0.lw4js.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('Conectado al mongo')
    for (let data of MedalleroData) {
      await Medallero.updateOne(
        { Oro: data.Oro },
        { Plata: data.Plata },
        { Bronce: data.Bronce },
        { Diploma: data.Diploma },
        { $set: data },
        { upsert: true }
      )
    }

    console.log('Datos insertados o actualizados')
  } catch (error) {
    console.log('ERROR', error)
  } finally {
    await mongoose.disconnect()
    console.log('Desconectado de la BBDD')
  }
}
Semilla()
