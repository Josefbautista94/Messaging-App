module.exports = (sequelize, DataTypes) => {
  const ChatMessage = sequelize.define(
    "ChatMessage",
    {
      chatId: {
        allowNull: false,
        type: DataTypes.UUID,
        required: true,
      },
      messageId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "Messages",
          key: "id",
        },
        required: true,
      },
    },
    {}
  );
  ChatMessage.associate = function (models) {
    ChatMessage.belongsTo(models.UserChat, {
      foreignKey: "chatId",
      targetKey: "chatId",
    });
    ChatMessage.belongsTo(models.Message, {
      foreignKey: "messageId",
      targetKey: "id",
    });
  };
  return ChatMessage;
};
