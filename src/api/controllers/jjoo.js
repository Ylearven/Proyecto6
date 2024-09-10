const JJOO = require('../models/jjoo')

const getjjoo = async (req, res, next) => {
  try {
    const jjoo = await JJOO.find().populate('Medallero')
    return res.status(200).json(jjoo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getjjooById = async (req, res, next) => {
  try {
    const { id } = req.params
    const jjoo = await JJOO.findById(id).populate('Medallero')
    return res.status(200).json(jjoo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud By Id')
  }
}

const getjjooByN_athles = async (req, res, next) => {
  try {
    const { N_atletas } = req.params
    const jjoo = await JJOO.find({ N_atletas }).populate('Medallero')
    return res.status(200).json(jjoo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud Atletas')
  }
}
const postjjoo = async (req, res, next) => {
  try {
    const { Nombre } = req.body
    const jjooExiste = await JJOO.findOne({ Nombre })
    if (jjooExiste) {
      return res.status(400).json('Ya existe un JJPP con el mismo nombre')
    }
    const newjjoo = new JJOO(req.body)
    const jjooSaved = await newjjoo.save()
    return res.status(201).json(jjooSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const putjjoo = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body
    if (updates.Medallero && updates.Medallero.length) {
      const jjoo = await JJOO.findById(id)
      if (!jjoo) {
        return res.status(404).json('JJOO no encontrado')
      }
      const medalleroSet = new Set(jjoo.Medallero.map(String))
      updates.Medallero.forEach((item) => medalleroSet.add(String(item)))
      updates.Medallero = Array.from(medalleroSet)
    }

    const jjooUpdated = await JJOO.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    )
    return res.status(200).json(jjooUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud put')
  }
}

const deletejjoo = async (req, res, next) => {
  try {
    const { id } = req.params
    const jjooDeleted = await JJOO.findByIdAndDelete(id)
    return res.status(200).json(jjooDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud delete')
  }
}
const Updatejjoo = async (req, res, next) => {
  try {
    const { id } = req.params
    const newjjoo = new JJOO(req.body)
    newjjoo._id = id

    if (newjjoo.Medallero && newjjoo.Medallero.length) {
      const jjoo = await JJOO.findById(id)
      if (!jjoo) {
        return res.status(404).json('JJOO no encontrado')
      }
      const medalleroSet = new Set(jjoo.Medallero.map(String))
      newjjoo.Medallero.forEach((item) => medalleroSet.add(String(item)))
      newjjoo.Medallero = Array.from(medalleroSet)
    }
    const jjooUpdated = await JJOO.findByIdAndUpdate(id, newjjoo, {
      new: true
    })
    return res.status(200).json(jjooUpdated)
  } catch (error) {
    return res.status(400).json('error')
  }
}

module.exports = {
  getjjoo,
  getjjooById,
  getjjooByN_athles,
  postjjoo,
  putjjoo,
  deletejjoo,
  Updatejjoo
}
