import Sequelize, { Model } from 'sequelize';

class Pizza extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.FLOAT,
        ingredients: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Pizza;
