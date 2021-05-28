const Tarefas = require('../models/Tarefas');
const Condicao = require('../models/Condicao');
module.exports = {
    async store(req, res){
        const { id_condicao, descricao, data_criacao } = req.body;
        const condicao = await Condicao.findByPk(id_condicao);
        if(!condicao){ return res.status(404).send({ erro: "Id da condição informada não é valida"})};
        const tarefas = await Tarefas.create({ descricao, data_criacao, id_condicao});
        return res.status(201).json(tarefas);
    },
    async get(req, res) { //Fazer igual essa aqui
        const tarefas = await Tarefas.findAll();
        return res.status(202).send({
            mensagem: 'Todas as tarefas',
            tarefas: tarefas
        });
    },
    async delete(req, res) {
        const { id } = req.params;
        const tarefas = await Tarefas.destroy({ where: { id } });
        return res.status(200).json(tarefas);
    },
    async update(req, res) {
        const { id, descricao, id_condicao } = req.body;
        const tarefas = await Tarefas.update({
            descricao,
            id_condicao
        },{
            where: {
                id
            }
        });
        return res.status(200).json(tarefas);
    },
    async consulta(req, res) {
        const { id } = req.params;
        const tarefas = await Tarefas.findByPk(id)
        return res.status(200).json(tarefas);
    }
}