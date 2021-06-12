const Hemocentros = require('../models/Hemocentros')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

const folder = path.join('public/img')

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder)
}
var nome_foto = ""

module.exports = {
  async create (req, res){
    const data  = req.body.hemocentros
    var x

    for(x in data) {
        var cadastro = await Hemocentros.create(data[x]).then(resposta => {
            console.log('Hemocentro cadastrado: ' + cadastro)
        })
    }
    return res.send('Todos os hemocentros foram cadastrados')
  },

  async read (req, res) {
    const data = req.params
    //Consultar os dados
    const { count, rows } = await Hemocentros.findAndCountAll({ where: { estado: data.estado }})
    if (count > 0) {
        // exibe resultados
        res.status(200).send({ mensagem: "Hemocentros.", hemocentros: rows})
    } else {
        // nao encontrou hemocentros para esse estado
        return res.status(404).send({ mensagem: "Usuario não tem campanhas."})
    }
  }
}