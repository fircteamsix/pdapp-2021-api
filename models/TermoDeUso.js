const { Model, DataTypes } = require('sequelize');

class TermoDeUso extends Model {
    static init(sequelize){
        super.init({
            cd_termo: { type: DataTypes.INTEGER, primaryKey: true },
            conteudo: DataTypes.STRING,
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'termodeuso',
            createdAt: false,
            updatedAt: false
        })
    }
}

module.exports = TermoDeUso;