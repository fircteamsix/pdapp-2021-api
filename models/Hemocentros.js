const { Model, DataTypes } = require('sequelize');

class Hemocentros extends Model {
    static init(sequelize){
        super.init({
            id_hemocentro: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            estado: DataTypes.STRING,
            unidade: DataTypes.STRING,
            link: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'hemocentros',
            createdAt: false,
            updatedAt: false
        })
    }
}
module.exports = Hemocentros;