const express = require('express')
const router = express.Router()

const CampanhaController = require('../controllers/CampanhaController')

router.post('/', CampanhaController.create)

module.exports = router