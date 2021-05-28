const Usuario = require('../models/Usuario')
const md5 = require('md5');

module.exports = {
  async create (req, res){
    const usuario  = req.body
    //Consultar o E-Mail
    const buscaEmail = await Usuario.findOne({ where: { email: usuario.email } })
    if(!buscaEmail) {
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
  async login (req, res) {
    const dados = req.params
    const senhaMd5 = md5(dados.senha + dados.email)
    //Consultar os dados
    const user = await Usuario.findOne({ where: { email: dados.email, senha: senhaMd5 }})
    if(!user){
      const resposta = {
        mensagem: 'E-mail ou Senha invalidas.'
      }
      return res.status(401).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Usuario autorizado.'
      }
      return res.status(202).send(resposta)
    }
  },

  async read (req, res) {
    const dados = req.params
    //Consultar os dados
    const user = await Usuario.findOne({ where: { cd_usuario: dados.cd_usuario }})
    if(!user){
      //Não achou o email ou senha
      const resposta = {
        mensagem: 'Usuario informado não localizado.'
      }
      return res.status(401).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Usuario encontrado.',
        usuario: user
      }
      return res.status(202).send(resposta)
    }
  },

  async update (req, res) {
    const usuario = req.body
    usuario.senha = md5(usuario.email + usuario.senha) //Criptografia da senha em md5
    const update = await Usuario.update( usuario, { where: { cd_usuario: usuario.cd_usuario }})
    if(!update) {
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

  async delete (req, res) {
    const { cd_usuario } = req.body
    const deletar = await Usuario.destroy({ where: { cd_usuario: cd_usuario }})
    if(!deletar) {
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