const express = require('express')
const router = express.Router()

const HemocentroController = require('../controllers/HemocentroController')

router.post('/', HemocentroController.create)
router.get('/', HemocentroController.readAll)
router.get('/:estado', HemocentroController.read)

module.exports = router