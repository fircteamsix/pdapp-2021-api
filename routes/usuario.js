const express = require('express')
const router = express.Router()

const UsuarioController = require('../controllers/UsuarioController')

router.post('/', UsuarioController.create)
router.post('/upload/:cd_usuario', UsuarioController.upload)
router.get('/:email/:senha', UsuarioController.login)
router.get('/:cd_usuario', UsuarioController.read)
router.get('/', UsuarioController.readAll)
router.put('/', UsuarioController.update)
router.put('/banir', UsuarioController.banir)
router.post('/deletar', UsuarioController.delete)

module.exports = router