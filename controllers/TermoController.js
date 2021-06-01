const TermoDeUso = require('../models/TermoDeUso')

module.exports = {
  async create (req, res){
    const termo  = req.body
    const cadastro = await TermoDeUso.create(termo)
    if(cadastro){
      const resposta = {
        mensagem: 'Resultado', 
        termo: cadastro
      }
      return res.status(201).send(resposta)
    }else {
      const resposta = {
        mensagem: 'Resultado', 
        erro: cadastro
      }
      return res.status(406).send(resposta)
    }
  },
  async read (req, res) {
    const dados = req.params
    //Consultar os dados
    const termo = await TermoDeUso.findOne({ where: { cd_termo: dados.cd_termo }})
    if(!termo){
      const resposta = {
        mensagem: 'Nenhum termo encontrado.'
      }
      return res.status(401).send(resposta)
    } else {
      const resposta = {
        mensagem: 'Termo encontrado.',
        termo: termo.cd_termo
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
        usuario: {
          cd_usuario: user.cd_usuario,
          nome: user.nome,
          email: user.email,
          rua: user.rua,
          bairro: user.bairro,
          cidade: user.cidade,
          tipo_sanguineo: user.tipo_sanguineo,
          estado: user.estado,
          data_nascimento: user.data_nascimento
        }
      }
      return res.status(202).send(resposta)
    }
  },

  async update (req, res) {
    const usuario = req.body
    usuario.senha = md5(usuario.senha + usuario.email) //Criptografia da senha em md5
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
  }
}

