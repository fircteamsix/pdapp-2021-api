const express = require('express')
const router = express.Router()

const CampanhaController = require('../controllers/CampanhaController')

router.post('/', CampanhaController.create)
router.get('/:id_campanha', CampanhaController.get)
router.get('/usuarios/:cd_usuario', CampanhaController.getCampanhaUser)
router.post('/upload/:id_campanha', CampanhaController.upload)

module.exports = router