module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        required: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        required: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        required: true,
      },
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Message, { foreignKey: "userId", sourceKey: "id" });
    User.belongsToMany(models.Chat, {
      through: "UserChats",
      foreignKey: "userId",
    });
  };
  return User;
};
