import { DataTypes, Model, Sequelize } from "sequelize";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

module.exports = (sequelize: Sequelize) => {
  class User extends Model<UserAttributes> {
    id: number;
    name: string;
    email: string;

    static associate(models: any) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
