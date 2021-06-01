const express = require('express')
const router = express.Router()

const TermoController = require('../controllers/TermoController')

router.post('/', TermoController.create)
router.get('/:cd_termo', TermoController.read)

module.exports = router