const { Model, DataTypes } = require('sequelize');

class Tarefas extends Model {
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING,
            data_criacao: DataTypes.DATE,
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'tarefas'
        })
    }
    static associate(models){
        this.belongsTo(models.Condicao, { foreignKey: 'id_condicao', as: 'condicao'});
    }
}

module.exports = Tarefas;