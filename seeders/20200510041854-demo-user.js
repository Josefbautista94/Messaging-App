module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "2605bf85-fd97-463d-aeb6-64812f4722f6",
          name: "User 1",
          email: "user1@email.com",
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "bdeb9b65-fba0-4ec5-bba1-f80ccaebd151",
          name: "User 2",
          email: "user2@email.com",
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
