const Usuario = require('../models/Usuario')
const md5 = require('md5')
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
    const usuario = req.body
    //Consultar o E-Mail
    const buscaEmail = await Usuario.findOne({ where: { email: usuario.email } })
    if (!buscaEmail) {
      usuario.senha = md5(usuario.senha + usuario.email) //Criptografia da senha em md5
      const cadastro = await Usuario.create(usuario)
      const resposta = {
        mensagem: 'Resultado',
        usuario: cadastro
      }
      return res.status(201).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Resultado',
        erro: buscaEmail
      }
      return res.status(406).send(resposta)
    }
  },
  async login(req, res) {
    const dados = req.params
    const senhaMd5 = md5(dados.senha + dados.email)
    //Consultar os dados
    const user = await Usuario.findOne({ where: { email: dados.email, senha: senhaMd5 } })
    if (!user) {
      const resposta = {
        mensagem: 'E-mail ou Senha invalidas.'
      }
      return res.status(401).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Usuario autorizado.',
        usuario: user
      }
      return res.status(202).send(resposta)
    }
  },
  async upload(req, res) {
    cd_usuario = req.params.cd_usuario
    const form = new formidable.IncomingForm()
    form.uploadDir = folder

    form.parse(req, async (_, fields, files) => {
      nome_foto = files.file.path.substring(11)
      const user = await Usuario.update({ foto: nome_foto }, { where: { id: cd_usuario } })
      if (!user) {
        return res.status(500).send({ mensagem: 'Ocorreu um erro ao gravar a imagem.' })
      } else {
        return res.status(200).send({ mensagem: 'Imagem atualizada com sucesso.' })
      }
    })
  },

  async read(req, res) {
    const dados = req.params
    //Consultar os dados
    const user = await Usuario.findOne({ where: { id: dados.cd_usuario } })
    if (!user) {
      //N??o achou o email ou senha
      const resposta = {
        mensagem: 'Usuario informado n??o localizado.'
      }
      return res.status(401).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Usuario encontrado.',
        usuario: {
          id: user.cd_usuario,
          nome: user.nome,
          email: user.email,
          rua: user.rua,
          bairro: user.bairro,
          cidade: user.cidade,
          tipo_sanguineo: user.tipo_sanguineo,
          estado: user.estado,
          data_nascimento: user.data_nascimento,
          foto: user.foto,
          senha: '',
          confSenha: ''
        }
      }
      return res.status(202).send(resposta)
    }
  },

  async readAll(req, res) {
    const users = await Usuario.findAll();
    const resposta = {
      mensagem: 'Usuarios',
      usuarios: users
    }
    return res.status(200).send(users);
  },

  async update(req, res) {
    const usuario = req.body
    usuario.senha = md5(usuario.senha + usuario.email) //Criptografia da senha em md5
    const update = await Usuario.update(usuario, { where: { id: usuario.id } })
    if (!update) {
      //Nega????o
      const resposta = {
        mensagem: 'Erro na atualiza????o'
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
    const update = await Usuario.update({ status: usuario.status }, { where: { id: usuario.id } })
    if (!update) {
      const resposta = {
        mensagem: 'Erro na atualiza????o'
      }
      return res.status(400).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Dados atualizado'
      }
      return res.status(200).send(resposta)
    }
  },

  async delete(req, res) {
    const { id } = req.body
    const deletar = await Usuario.destroy({ where: { id: id } })
    if (!deletar) {
      const resposta = {
        mensagem: 'Erro ao deletar usuario'
      }
      return res.status(400).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Usuario deletado'
      }
      return res.status(200).send(resposta)
    }
  }
}