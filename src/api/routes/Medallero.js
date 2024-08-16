const {
  getmedallero,
  getmedalleroById,
  getmedalleroByGold,
  getmedalleroBySilver,
  getmedalleroByBronze,
  getmedalleroByDiploma,
  postmedallero,
  putmedallero,
  deletemedallero
} = require('../controllers/Medallero')

const medalleroRouter = require('express').Router()

medalleroRouter.get('/Oro/:Oro', getmedalleroByGold)
medalleroRouter.get('/Plata/:Plata', getmedalleroBySilver)
medalleroRouter.get('/Bronce/:Bronce', getmedalleroByBronze)
medalleroRouter.get('/Diploma/:Diploma', getmedalleroByDiploma)
medalleroRouter.get('/:id', getmedalleroById)
medalleroRouter.get('/', getmedallero)
medalleroRouter.post('/', postmedallero)
medalleroRouter.put('/:id', putmedallero)
medalleroRouter.delete('/:id', deletemedallero)

module.exports = medalleroRouter
