const { Model, DataTypes, BelongsTo } = require('sequelize');

class Campanhas extends Model {
    static init(sequelize){
        super.init({
            id_campanha: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            titulo_paciente: DataTypes.STRING,
            data_inicio: DataTypes.STRING,
            data_termino: DataTypes.STRING,
            local_doacao: DataTypes.STRING,
            tipo_sanguineo: DataTypes.STRING,
            foto: DataTypes.STRING,
            estado: DataTypes.STRING
        },{
            sequelize,
            freezeTableName: true,
            tableName: 'campanhas',
            createdAt: false,
            updatedAt: false
        })
    }
    static associate(models) {
        this.belongsTo(models.Usuario, {
            foreignKey: 'cd_usuario',
            as: 'usuario'
        })
    }
}
module.exports = Campanhas;