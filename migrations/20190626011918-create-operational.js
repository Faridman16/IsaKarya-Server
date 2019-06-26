'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('operationals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      trip: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      harga: {
        type: Sequelize.DECIMAL
      },
      jumlah: {
        type: Sequelize.DECIMAL
      },
      fee: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('operationals');
  }
};


// tanggal: DataTypes.DATE,
// trip: DataTypes.INTEGER,
// qty: DataTypes.INTEGER,
// harga: DataTypes.DECIMAL,
// jumlah: DataTypes.DECIMAL,
// fee: DataTypes.DECIMAL