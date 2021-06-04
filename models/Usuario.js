const { Model, DataTypes } = require('sequelize');
const Campanhas = require('./Campanhas');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            cd_usuario: { type: DataTypes.INTEGER, primaryKey: true },
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            estado: DataTypes.STRING,
            rua: DataTypes.STRING,
            cidade: DataTypes.STRING,
            cep: DataTypes.INTEGER,
            bairro: DataTypes.STRING,
            complemento: DataTypes.STRING,
            tipo_sanguineo: DataTypes.CHAR,
            data_nascimento: DataTypes.STRING,
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'usuario',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models) {
        this.hasMany(models.Campanhas)
    }
}
module.exports = Usuario;