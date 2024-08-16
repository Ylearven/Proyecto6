const {
  getjjoo,
  getjjooById,
  getjjooByN_athles,
  postjjoo,
  putjjoo,
  deletejjoo
} = require('../controllers/jjoo')

const jjooRouter = require('express').Router()

jjooRouter.get('/N_atletas/:N_atletas', getjjooByN_athles)
jjooRouter.get('/:id', getjjooById)
jjooRouter.get('/', getjjoo)
jjooRouter.post('/', postjjoo)
jjooRouter.put('/:id', putjjoo)
jjooRouter.delete('/:id', deletejjoo)

module.exports = jjooRouter
