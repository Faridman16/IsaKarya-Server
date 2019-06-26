'use strict';
module.exports = (sequelize, DataTypes) => {
  const operational = sequelize.define('operational', {
    tanggal: DataTypes.DATE,
    trip: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    harga: DataTypes.DECIMAL,
    jumlah: DataTypes.DECIMAL,
    fee: DataTypes.DECIMAL
  }, {});
  operational.associate = function(models) {
    // associations can be defined here
  };
  return operational;
};