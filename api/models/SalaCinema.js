const { Model, DataTypes } = require("sequelize");
class SalaCinema extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: {
          type: DataTypes.INTEGER,
          primaryKey: true
        },
        quantidade_assentos: DataTypes.INTEGER,
        tem_3d: DataTypes.BOOLEAN,
        tem_preferencial: DataTypes.BOOLEAN
      },
      {
        sequelize,
        modelName: "SalaCinema",
      }
    );
  }
}
  module.exports = SalaCinema