module.exports = (sequelize, DataTypes) => {
  const UserChat = sequelize.define(
    "UserChat",
    {
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
        required: true,
      },
      chatId: {
        allowNull: false,
        type: DataTypes.UUID,
        required: true,
      },
    },
    {}
  );
  UserChat.associate = function (models) {
    UserChat.belongsTo(models.User, { foreignKey: "userId", targetKey: "id" });
    UserChat.belongsTo(models.Chat, { foreignKey: "chatId", targetKey: "id" });
  };
  return UserChat;
};
