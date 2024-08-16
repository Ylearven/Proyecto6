const Medallero = require('../models/Medallero')

const getmedallero = async (req, res, next) => {
  try {
    const medallero = await Medallero.find()
    return res.status(200).json(medallero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getmedalleroById = async (req, res, next) => {
  try {
    const { id } = req.params
    const medallero = await Medallero.findById(id)
    return res.status(200).json(medallero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud By id')
  }
}
const getmedalleroByGold = async (req, res, next) => {
  try {
    const { Oro } = req.params
    const medallero = await Medallero.find({ Oro: { $lte: Number(Oro) } })
    return res.status(200).json(medallero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud Oro')
  }
}
const getmedalleroBySilver = async (req, res, next) => {
  try {
    const { Plata } = req.params
    const medallero = await Medallero.find({ Plata: { $lte: Number(Plata) } })
    return res.status(200).json(medallero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud Plata')
  }
}
const getmedalleroByBronze = async (req, res, next) => {
  try {
    const { Bronce } = req.params
    const medallero = await Medallero.find({ Bronce: { $lte: Number(Bronce) } })
    return res.status(200).json(medallero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud Bronce')
  }
}
const getmedalleroByDiploma = async (req, res, next) => {
  try {
    const { Diploma } = req.params
    const medallero = await Medallero.find({
      Diploma: { $lte: Number(Diploma) }
    })
    return res.status(200).json(medallero)
  } catch (error) {
    return res.status(400).json('Error en la solicitud Dimploma')
  }
}
const postmedallero = async (req, res, next) => {
  try {
    const newmedallero = new Medallero(req.body)
    const medalleroSaved = await newmedallero.save()
    return res.status(201).json(medalleroSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const putmedallero = async (req, res, next) => {
  try {
    const { id } = req.params
    /*  const oldjjoo = await JJOO.findById(id) */
    const newmedallero = new Medallero(req.body)
    newmedallero._id = id
    /*  newjjoo.medallero = [...oldjjoo.medallero, ...req.body.medallero] */
    const medalleroUpdated = await Medallero.findByIdAndUpdate(
      id,
      newmedallero,
      {
        new: true
      }
    )
    return res.status(200).json(medalleroUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud put')
  }
}

const deletemedallero = async (req, res, next) => {
  try {
    const { id } = req.params
    const medalleroDeleted = await Medallero.findByIdAndDelete(id)
    return res.status(200).json(medalleroDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud delete')
  }
}

module.exports = {
  getmedallero,
  getmedalleroById,
  getmedalleroByGold,
  getmedalleroBySilver,
  getmedalleroByBronze,
  getmedalleroByDiploma,
  postmedallero,
  putmedallero,
  deletemedallero
}
