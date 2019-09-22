import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Pizza from '../app/models/Pizza';
import Order from '../app/models/Order';

const models = [Pizza, Order];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);

    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
