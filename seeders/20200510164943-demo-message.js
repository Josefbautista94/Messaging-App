module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Messages",
      [
        {
          id: "96b522b1-f053-4d6f-814d-72bfb1f2a198",
          message: "Hello User2!",
          userId: "2605bf85-fd97-463d-aeb6-64812f4722f6",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d8fce986-0e0a-4e3a-a617-3a58150cad43",
          message: "Hello there User 1!",
          userId: "bdeb9b65-fba0-4ec5-bba1-f80ccaebd151",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  },
};
