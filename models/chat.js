module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "Chat",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {}
  );
  Chat.associate = function (models) {
    Chat.belongsToMany(models.User, {
      foreignKey: "chatId",
      through: "UserChats",
    });
  };
  return Chat;
};
