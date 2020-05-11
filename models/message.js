module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      message: {
        allowNull: false,
        type: DataTypes.STRING,
        required: true,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        required: true,
      },
    },
    {}
  );
  Message.associate = function (models) {
    Message.belongsTo(models.User);
  };
  return Message;
};
