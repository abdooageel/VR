"use strict";

module.exports = function(sequelize, DataTypes) {
  var Regester = sequelize.define("Regester", {
    creation_date : DataTypes.DATE(),
    modification_date : DataTypes.DATE(),
    national_id : DataTypes.STRING(20),
    center_id : DataTypes.STRING(10),
    center_name : DataTypes.STRING(30)


  } );
  Regester.sync();
  return Regester;
};
