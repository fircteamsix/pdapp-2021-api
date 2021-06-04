const Campanhas = require('../models/Campanhas')

module.exports = {
  async create (req, res){
    const data  = req.body
    const cadastro = await Campanhas.create(data)
    const resposta = {
    mensagem: 'Resultado', 
    campanha: cadastro
    }
    return res.status(201).send(resposta)
  }
}