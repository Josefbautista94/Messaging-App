module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ChatMessages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      chatId: {
        allowNull: false,
        type: Sequelize.UUID,
        required: true,
      },
      messageId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Messages",
          key: "id",
        },
        required: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ChatMessages");
  },
};
