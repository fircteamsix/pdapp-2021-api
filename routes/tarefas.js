const express = require('express')
const router = express.Router()

const TarefasController = require('../controllers/TarefasController')

router.get('/', TarefasController.get)
router.post('/', TarefasController.store); 
router.put('/', TarefasController.update); 
router.delete('/:id', TarefasController.delete); 

module.exports = router