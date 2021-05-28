const { Model, DataTypes } = require('sequelize');

class Condicao extends Model {
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING,
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'condicao'
        })
    }
}

module.exports = Condicao;