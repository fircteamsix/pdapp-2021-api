const express = require('express')
const router = express.Router()

const UsuarioController = require('../controllers/UsuarioController')

router.post('/', UsuarioController.create)
router.get('/:email/:senha', UsuarioController.login)
router.get('/:cd_usuario', UsuarioController.read)
router.put('/', UsuarioController.update)
router.delete('/', UsuarioController.delete)

module.exports = router