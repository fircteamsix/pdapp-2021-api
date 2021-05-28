const Condicao = require('../models/Condicao');
module.exports = {
    async store(req, res){
        const { descricao } = req.body;
        const condicao = await Condicao.create({ descricao });
        return res.status(201).json(condicao);
    },
    async get(req, res) {
        const condicao = await Condicao.findAll();
        return res.status(202).json(condicao);
    },
    async delete(req, res) {
        const { id } = req.params;
        const condicao = await Condicao.destroy({ where: { id } });
        return res.json(condicao);
    },
    async update(req, res) {
        const { id, descricao } = req.body;
        const condicao = await Condicao.update({
            descricao
        },{
            where: {
                id
            }
        });
        return res.json(condicao);
    }
}