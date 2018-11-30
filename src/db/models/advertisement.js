'use strict';
module.exports = (sequelize, DataTypes) => {
  var Advertisement = sequelize.define('Topic', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Advertisement.associate = function(models) {
      //none
   };
  return Advertisement;
};