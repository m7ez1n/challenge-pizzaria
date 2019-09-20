module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pizzas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      ingredients: {
        type: Sequelize.STRING,
        get() {
          return JSON.parse(this.getDataValue('ingredients'));
        },
        set(value) {
          return this.setDataValue('ingredients', JSON.stringify(value));
        },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('pizzas');
  },
};
