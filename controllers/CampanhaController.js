const Campanhas = require('../models/Campanhas')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

const folder = path.join('public/img')

if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder)
}
var nome_foto = ""

module.exports = {
  async create(req, res) {
    const data = req.body
    const cadastro = await Campanhas.create(data).then(function (e) {
      const resposta = {
        mensagem: 'Resultado',
        campanha: e
      }
      return res.status(201).send(resposta)
    }).catch(erro => {
      return res.status(500).send({ mensagem: 'Resultado', erro: erro })
    })

  },

  async get(req, res) { // Captura a campanha especifica pelo ID
    const dados = req.params
    //Consultar os dados
    const campanha = await Campanhas.findOne({ where: { id_campanha: dados.id_campanha } })
    if (!campanha) {
      //Não achou a campanha
      const resposta = {
        mensagem: 'Campanha informado não localizada.'
      }
      return res.status(401).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Campanha encontrado.',
        campanha: campanha
      }
      return res.status(202).send(resposta)
    }
  },

  async readAll(req, res) {
    const campanhas = await Campanhas.findAll();
    return res.status(200).send(campanhas);
  },

  async getCampanhaUser(req, res) {
    const { cd_usuario } = req.params
    const { count, rows } = await Campanhas.findAndCountAll({ where: { cd_usuario: cd_usuario } })
    if (count > 0) {
      // exibe resultados
      return res.status(200).send({ mensagem: "Campanhas desse usuario.", campanhas: rows })
    } else {
      // nao encontrou campanhas para esse usuario
      return res.status(404).send({ mensagem: "Usuario não tem campanhas." })
    }
  },

  async upload(req, res) {
    id_campanha = req.params.id_campanha
    const form = new formidable.IncomingForm()
    form.uploadDir = folder

    form.parse(req, async (_, fields, files) => {
      nome_foto = files.file.path.substring(11)
      const campanha = await Campanhas.update({ foto: nome_foto }, { where: { id_campanha: id_campanha } })
      if (!campanha) {
        return res.status(500).send({ mensagem: 'Ocorreu um erro ao gravar a imagem.' })
      } else {
        return res.status(200).send({ mensagem: 'Imagem atualizada com sucesso.' })
      }
    })
  },

  async update(req, res) {
    const campanha = req.body
    const update = await Campanhas.update(campanha, { where: { id_campanha: req.params.id_campanha } })
    if (!update) {
      //Negação
      const resposta = {
        mensagem: 'Erro na atualização'
      }
      return res.status(400).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Dados atualizado'
      }
      return res.status(200).send(resposta)
    }
  },

  async banir(req, res) {
    const usuario = req.body
    const update = await Campanhas.update();
    return res.status(200).send(campanhas);
  },
}